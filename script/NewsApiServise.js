const options = {
  headers: {
    'X-Api-Key': 'dd82ff3604224bf1b224da3ef75c9135',
  },
};

const ENDPOINT = `https://newsapi.org/v2/everything`;

export default class NewsApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  } 

  getNews() {
    const URL = `${ENDPOINT}?q=${this.searchQuery}&pageSize=6&page=${this.page}`;

    return fetch(URL, options)
      .then(response => response.json())
      .then(({ articles }) => {
        //  При вызове запроса к БД увеличиваем страницу
        this.nextPage();
        return articles;
      });
  }

  nextPage() {
    this.page += 1;
    }
    //Если делать новыый запрос, то номер страницы должен сбасываться,
    //  а не искать с той же странице как осталось от предыдущего запроса. 
    // И вызываем его в сабмите.
  resetPage() {
    this.page = 1;
  }
}
