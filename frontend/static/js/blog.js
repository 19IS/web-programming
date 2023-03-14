// ожидаем загрузки документа
$(document).ready(() => {
  const data = JSON.parse(jsonData);
  drawCards(data);

  $('.search-do').on('click', () => {
    const search = $('.search-text').val().toLowerCase();
    filter(search, data);
  });

  $('.blog-tags a').on('click', (e) => {
    e.preventDefault();
    const search = $(e.currentTarget).text().toLowerCase();
    filter(search, data);
  });
});

// Рисует записи блога согласно входной информации
function drawCards (data) {
  $('.blog-container').html('');
  data.forEach((item, i) => {
    let card = $(cardHtml);
    card.find('.blog-cover').css('background-image', 'url("img/blog/' + item.image + '")');
    card.find('.blog-title h2').text(item.title);
    card.find('.blog-text p').text(item.text);
    card.find('.blog-published-date').text(item.date);
    let tags = '';
    item.tags.forEach((tag, i) => {
      tags += '<li><a href="' + tag + '">' + tag + '</a></li>';
    });
    card.find('.blog-tags ul').html(tags);
    $('.blog-container').append(card);
  });
}

function filter(value, data) {

    const newData = data.filter((item) => {
      let result = 0;
      result += item.image.toLowerCase().indexOf(value) > -1;
      result += item.title.toLowerCase().indexOf(value) > -1;
      result += item.text.toLowerCase().indexOf(value) > -1;
      result += item.date.toLowerCase().indexOf(value) > -1;
      result += item.tags.filter((tag) => {
        return tag.toLowerCase().indexOf(value) > -1;
      }).length;
      return result > 0;
    })
    drawCards(newData);
}
const jsonData = '[{"image": "blog01.jpg", "title": "Situr amera tempor", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "date": "2 days ago", "tags": ["canyon", "summer", "volkswagen"]},{"image": "blog02.jpg", "title": "Official grand tur", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animest id est laborum.", "date": "3 days ago", "tags": ["city", "girl", "people", "work"]}, {"image": "blog03.jpg", "title": "Cilpalorem set deserunt", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "date": "4 days ago", "tags": ["somersby", "summer", "ocean", "nothing"]}, {"image": "blog04.jpg", "title": "Lorem dolorem", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "date": "5 days ago", "tags": [ "people", "thinkin", "nothing"]}]';

const cardHtml = '<section class="blog-card"><div class="blog-header"><div class="blog-cover"></div></div><div class="blog-body"><div class="blog-title"><h2>Lorem ipsum dolor sit amet</h2></div><div class="blog-text"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div><div class="blog-tags"><ul><li><a href="#">lorem</a></li><li><a href="#">proident</a></li><li><a href="#">amet</a></li><li><a href="#">laborum</a></li></ul></div><div class="blog-footer"><div class="blog-published-date">3 дня назад</div></div></div></section>'
