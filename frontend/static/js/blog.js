// ожидаем загрузки документа
$(document).ready(() => {
  const data = JSON.parse(jsonData);

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
