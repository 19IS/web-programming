window.onload = function() {
  const hamburger = document.getElementById('hamburger');

  hamburger.onclick = function() {
    let topNav = document.getElementById('myTopnav');
    if (topNav.className === 'responsive') {
      topNav.className = '';
    } else {
      topNav.className = 'responsive';
    }
  }

  // const menuList = document.querySelectorAll('.menu-element');
  // menuList.forEach(function(element) {
  //   element.addEventListener('click', function(event) {

  //     const elementLink = element.dataset.link;

  //     if (elementLink) {
  //       event.preventDefault();
  //       document.getElementById(elementLink).scrollIntoView({ behavior: 'smooth'});
  //     }
  //   });
  // });

  let docWidth = $(document).width();
  const imageCount = $('.top-image').lenght;

  function el() {

  }

  const photoList = document.querySelectorAll('.portfolio-item');
  photoList.forEach(function(item) {
    item.addEventListener('click', function() {
  //    createPopup(item);
    });
  });

  window.addEventListener('click', function(e) {

  });

  const services = [{
    id: 1,
    header: "Разработка интернет магазинов",
    description: "Заказать интернет-магазин - важный шаг для расширения продаж существующей торговой сети, и необходимый этап для создания службы электронной коммерции. Продающий онлайн-магазин не только позволяет с удобством осуществлять покупки онлайн, но и привлекает дополнительных посетителей в розничные интернет-магазины.",
    color: "purple"
  }, {
    id: 2,
    header: "Разработка лэндинга",
    description: "Лэндинг удобен для того, чтобы передать целевое сообщение. Наличие правильных ссылок на основной сайт приводит заинтересованных посетителей сразу на нужные страницы, что позволяет выделить потенциальных клиентов из поискового траффика.",
    color: "cyan"
  }, {
    id: 3,
    header: "Сайт-каталог",
    description: "Онлайн каталог служит для демонстрации ассортимента продукции компании. Но он может содержать и документацию, книги, музыку и многое другое. Сайт может иметь как простую структуру разделов, так и довольно сложную с возможностью расширенного поиска.",
    color: "orange"
  }, {
    id: 4,
    header: "Корпоративный сайт",
    description: "Корпоративный сайт представляет собой полноценную презентацию вашей компании или бизнеса в интернете.  Это своеобразная рекламная площадка, призванная решать разные задачи. Грамотное наполнение и регулярное обновление приведет к увеличению доходов компании.",
    color: "pink"
  }, {
    id: 5,
    header: "Сайт-визитка",
    description: "Сайт-визитка - это небольшой ресурс, который служит для ознакомления с  компанией, личностью или предоставляемой услугой (продуктом). Это информационный и представительский ресурс компании. Его цель – привлечь клиентов и ознакомить их с информацией о компании, персоне  или предоставляемой услуге в интернете. Так же он призван привлекать потенциальных партнеров.",
    color: "orange"
  }, {
    id: 6,
    header: "Облачные программные комплексы",
    description: "Мы предлагаем разработку программного комплексного решения с целью снижения временных и административных затрат. Перенесите деятельность в облако, регламентируйте рабочие процессы, автоматизируйте рутинные операции. Автоматизация не только значительно снизит расходы, но и минимизирует возможность возникновения ошибок. Интеграция существующих информационных систем поможет сделать внедрение быстрым и эффективным.",
    color: "cyan"
  }];

  const servicesGrid = document.querySelector('.service-grid');
  if (servicesGrid) {
    services.forEach((serviceData) => {
      const service = new Service(serviceData.id, serviceData.header, serviceData.description, serviceData.color);
      service.draw(servicesGrid);
    });
  }
}

function createPopup(item) {
  let container = document.createElement('div');
  container.className = "popup-container";
  let popup = document.createElement('img');
  popup.className = "popup";
  popup.src = item.dataset.img;

  container.append(popup);
  document.body.append(container);
}

const deleteModal = document.getElementById('deleteModal');

deleteModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const postId = button.getAttribute('data-bs-id')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = deleteModal.querySelector('.modal-body')
  const modalBodyInput = deleteModal.querySelector('.modal-dialog input')

  modalTitle.textContent = `Удалить запись с id:` + postId;
  modalBodyInput.value = postId;

  deleteModal.addEventListener('hidden.bs.modal', () => {
    console.log('modal element completely hidden!');
  });

  deleteModal.querySelector('.btn-warning').addEventListener('click', (event) => {
    fetch('http://127.0.0.1:3000/blog/posts/' + postId, {
      method: 'DELETE'
    }).then(() => {
      window.location.href = "http://127.0.0.1:3000/blog";
    });
  });

});

const editModal = document.getElementById('editModal');

editModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const postId = button.getAttribute('data-bs-id')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = deleteModal.getElementById('title-name');
  const modalAuthor = deleteModal.getElementById('author-name');
  const modelBlogText = deleteModal.getElementById('blog-text');
  const modalBodyInput = deleteModal.querySelector('.modal-dialog input')

  // modalTitle.textContent = `Редактивировать запись с id:` + postId;

  editModal.addEventListener('hidden.bs.modal', () => {
    console.log('modal element completely hidden!');
  });

  editModal.querySelector('.btn-primary').addEventListener('click', (event) => {
    fetch('http://127.0.0.1:3000/blog/posts/' + postId, {
      method: 'PUT',
      body: {
        "author": modalAuthor.value,
        "title": modalTitle.value,
        "content": modelBlogText.value,
        "picture": null
      }
    }).then(() => {
      window.location.href = "http://127.0.0.1:3000/blog";
    });
  });
  
});