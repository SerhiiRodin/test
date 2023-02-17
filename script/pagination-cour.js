//  Подключаем функцию которая делает запрос на API сервер
import NewsApiService from '../script/NewsApiServise.js';
import LoadMoreBtn from '../script/components/LoadMoreBtn.js';

const form = document.getElementById('form');
const newsWrapper = document.getElementById('newsWrapper');
const newsApiService = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
  selector: '#loadMore',
  isHidden: true,
});

// console.log(newsApiService);
// console.log(loadMoreBtn.button.disabled);

// Вешаем оброботчик при отправке формы submit

form.addEventListener('submit', onSubmit);
loadMoreBtn.button.addEventListener('click', fetchArticles);

function onSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget; // эл где висит обработчик
  const value = form.elements.news.value.trim(); // значение в поле импута обезаем в начале и в конце пробелы

  // Очищаем на экране разметку, т.к. может рстаться разметка от предыдущего запросса.
  clearNewsList();
  //Сбрасываем номер страницы до 1.
  newsApiService.resetPage();
  //Сохраняем значение импута в конструктор.
  newsApiService.searchQuery = value;
  //При сабмите кнопка появляется
  loadMoreBtn.show();

  fetchArticles().finally(() => form.reset()); // блок выполняется в любом случае промиса он очищает форму.
}

// При нажатии на кнопку вызывается newsApiService.getNews функция обращается к БД
// Для передачи value-значения импута в ф-цию, делаем переменную в нашем классе
function fetchArticles() {
  loadMoreBtn.disable();

  return (
    newsApiService
      .getNews()
      .then(articles => {
        // Если не нашли не одной статьи ошибка и переходим в блок catch
        if (articles.length === 0) {
          throw new Error();
        }
        //метод принимает массив статей берет эл. делает раметку и прибавляет к асс (это все строка)
        return articles.reduce((acc, article) => {
          return acc + createMarkup(article);
        }, '');
      })
      // мы знаем что сюда приходи только markup поэтому можно указать функцию без параметров
      // .then appendNewsToList )
      .then(markup => {
        appendNewsToList(markup);
        loadMoreBtn.enable();
      })
      .catch(onError)
  );
}

function appendNewsToList(markup) {
  // newsWrapper.innerHTML = markup;
  // нам надо добавлять статьи к уже существующим
  newsWrapper.insertAdjacentHTML('beforeend', markup);
}

//если будем делать другой запрос, чтоб на экране не оставались статьи от
//  редыдущего запроса надо очищать экран от разметки. Вызываем в сабмите.
function clearNewsList() {
  newsWrapper.innerHTML = '';
}

// Если фатора нет, то пишем anonymous 135 строка
function createMarkup({ author, title, description, url, urlToImage }) {
  return `
  <div class="article-card">
    <img src=${urlToImage} class="article-img" />
    <h2 class="article-title">${title}</h2>
    <h3 class="article-author">${author || 'anonymous'}</h3>
    <p  class="article-description">${description}</p>
    <a href=${url} class="article-link" target="_blank">Read more</a>
  </div>
  `;
}

// Если ничего не нашло то выводит на экран строку.
function onError(error) {
  appendNewsToList('<p>Articles not found</p>');
  console.log('no data');
}
