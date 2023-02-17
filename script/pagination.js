const ref = {
  form: document.getElementById('textForm'),
  buttonSubmit: document.querySelector('searchNews'),
  loadMoreBtn: document.querySelector('.moreBtn'),
};

let searchQuery = '';

ref.form.addEventListener('submit', onSearch);
ref.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  // не делаем через глобальную переменную т.к. функция буудет вынесена в др. файл,
  //  а он не будет знать про глобальную переменную.
  searchQuery = e.currentTarget.elements.news.value;

  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=ru&pageSize=5&page=2`;
  const option = {
    headers: {
      'X-Api-Key': 'dd82ff3604224bf1b224da3ef75c9135',
    },
  };

  fetch(url, option)
    .then(response => response.json())
    .then(data => console.log(data));
}

function onLoadMore() {
  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=ru&pageSize=5&page=2`;
  const option = {
    headers: {
      'X-Api-Key': 'dd82ff3604224bf1b224da3ef75c9135',
    },
  };

  fetch(url, option)
    .then(response => response.json())
    .then(data => console.log(data));
}
