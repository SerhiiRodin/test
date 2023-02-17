export default class LoadMoreBtn {
  //В конструктор передаем селектор кнопки и ее состояние видима/невидима
  constructor({ selector, isHidden }) {
    this.button = this.getButton(selector);
    // если у кнопки пармаетр isHidden = true, то скрываем кнопку в разметке,
    //    если isHidden = false отображаем (паказываем)
    if (isHidden) this.hide();
    else this.show();
  }

  // Метод поиска кнопки

  getButton(selector) {
    return document.querySelector(selector);
  }

  //Методы скрывать и показывать кнопку
  hide() {
    this.button.classList.add('hidden');
  }
  show() {
    this.button.classList.remove('hidden');
  }
  // Методы делать кнопку неактивной с надписью Loading...
  //   Вызываем при нажатии на кнопку в начале запроса в БД
  disable() {
    this.button.disabled = true;
    this.button.textContent = 'Loading...';
  }
  // и активной с надписью Load more
  // вызываем после отрисовки appendNewsToList(markup)
  enable() {
    this.button.disabled = false;
    // console.dir(this.button.disable);
    this.button.textContent = 'Load more';
  }
}
