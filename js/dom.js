// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'tomato';

// console.log(firstMenuItem.style);

// const fff = document.querySelector('#menu').lastElementChild;

// fff.style.color = 'green';

// const text = document.querySelector('#paragraph');

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]
// text.classList.add('a', 'b', 'c');
// text.classList.toggle('is-hidden');
// console.log(text.classList);

// text.classList.forEach(cls => {
//   console.log(cls); // text, red, new-class
// });

// const button = document.querySelector('.btn');

// button.style.backgroundColor = 'teal';

// console.log(button.attributes);
// console.log(button.hasAttribute('class'));
// console.log(button.getAttribute('class'));

// const dishes = document.querySelectorAll('.dishes > li');
// dishes.forEach(dish => {
//     console.log(dish);
//   console.log(dish.dataset.id);
// });

//------------------------------------------------------------------------------------------------

// const menuEl = document.querySelector('.menu');
// console.log(menuEl.textContent);

// const menuItemEl = document.createElement('li');
// menuItemEl.classList.add('menu-item');
// menuItemEl.textContent = 'serj';

// menuEl.prepend(menuItemEl);

// // menuEl.insertBefore(menuItemEl, menuEl.lastElementChild);

// console.log(menuItemEl);
// console.log(menuEl.innerHTML);
// console.log(menuEl);

// const article = document.querySelector('.article');
// console.log(article.innerHTML);

// const title = document.querySelector('.article .title');
// console.log(title.innerHTML);

// const textt = document.querySelector('.article .text');
// console.log(text.innerHTML);

// const link = document.querySelector('.article .link');
// console.log(link.innerHTML);

//---------------Task 1 ----------------------------------------------------------------------

// 1. Створити список технологій що вивчаються на курсі Fullstack за допомогою js
// Показати як че робиться через **map** та **reduce**

// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

/*
    1. створимо список ul
    2. створення циклу для перебору елементів масиву
    3. створення елементів списку - li
    4. запис тексту з масиву у елемент li
    5. помістити елементи li всередину елементу ul
    6. помістити ul на сторінку
*/

//Ссылка на div в который будем помещать список
// const divRef = document.querySelector('.testList');
// const divRefById = document.querySelector('#testList');
// const divRefById = document.getElementById('testList');

// const ulRef = document.createElement('ul');
// console.log(ulRef);

// for (const technologie of technologies) {
//   const liRef = document.createElement('li');
//   liRef.textContent = technologie;
//   console.log(liRef);

//   ulRef.appendChild(liRef);
// }

// divRef.appendChild(ulRef);

// --------- Добавляем массив li в ul через спред и метод  append---------

// const ulRef = document.createElement('ul');

// const liElements = [];

// for (const technologie of technologies) {
//   const liRef = document.createElement('li');
//   liRef.textContent = technologie;
//   console.log(liRef);

//   liElements.push(liRef);
// }

// console.log(liElements);

// ulRef.append(...liElements);
// divRef.appendChild(ulRef);

//   --------- Через метод ** map **  ---------
// 1. створимо список ul
// 2. Перебираем массив через метод ** map **
// 3. Делаем черз шаблонную строку
// 4. Метод ** map ** возвр. массив, а метод insertAdjacentHTML принимает строку.
//    первращаем массив в строку меод join.
// 5. добавляем строоку в элеметр ul

// const ulRef = document.createElement('ul');

// const listContent = technologies.map(technologie => `<li>${technologie}</li>`).join('');

// ulRef.insertAdjacentHTML('beforeend', listContent);

// divRef.appendChild(ulRef);

//   --------- Через метод **reduce**  ---------

// const ulRef = document.createElement('ul');

// const listContent = technologies.reduce(
//   (acc, technologie) => (acc += `<li>${technologie}</li>`),
//   ''
// );

// // ulRef.insertAdjacentHTML('beforeend', listContent);

// // divRef.appendChild(ulRef);

// //Можно заменить, чтоб не создавать const ulRef = document.createElement('ul');
// divRef.insertAdjacentHTML('beforeend', `<ul>${listContent}</ul>`);

//---------------Task 2 ----------------------------------------------------------------------

// Створити кілька кнопок на основі масива з обʼєктами використовуючи createElement

// const colors = [
//   {
//     label: 'red',
//     color: '#FF0000',
//   },
//   {
//     label: 'green',
//     color: '#00FF00',
//   },
//   {
//     label: 'blue',
//     color: '#0000FF',
//   },
//   {
//     label: 'yellow',
//     color: '#FFFF00',
//   },
// ];

/*
    1. перебір елементів масиву за допомогою циклів
    2. створити кнопку
    3. задати колір кнопки і текст кнопки
    4. додати кнопку на сторінку
*/

// const divRefById = document.getElementById('testList');

// colors.forEach(color => {
//   const buttonEl = document.createElement('button');
//   buttonEl.textContent = color.label;
//   buttonEl.style.backgroundColor = color.color;
//   // buttonEl.style.marginRight = "10px";    // Можно сделать класс в CSS и его добавить для кнопики.
//   buttonEl.classList.add('indents');

//   divRefById.appendChild(buttonEl);
// });

//-------------------------------------------------------------------------------
// Создание карточек с товара и поиск по бренду и модели.
const cars = [
  {
    brand: 'Honda',
    model: 'Civic',
    price: 12000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
  },
  {
    brand: 'BMW',
    model: 'X5',
    price: 19000,
    img: 'https://i.infocar.ua/img/mats/11150/ins/1614846802162.jpg',
  },
  {
    brand: 'Audi',
    model: 'Q7',
    price: 40000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
  },
  {
    brand: 'BMW',
    model: '5 siries',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
  },
  {
    brand: 'Audi',
    model: 'A6',
    price: 25000,
    img: 'https://i.gaw.to/vehicles/photos/40/28/402805-2022-audi-a6.jpg?640x400',
  },
  {
    brand: 'Honda',
    model: 'Accord',
    price: 20000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
  },
  {
    brand: 'Volvo',
    model: 'XC60',
    price: 7000,
    img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
  },
  {
    brand: 'Audi',
    model: 'RSQ8',
    price: 180000,
    img: 'https://static.apostrophe.ua/uploads/image/7a832f54750de46acc3269ef2e0d8b26.jpg',
  },
];

const formEl = document.querySelector('.js-forme');

const listEl = document.querySelector('.js-list');

function createMarkup(arr) {
  // получаем массив разметки для каждого объекта
  const markup = arr.map(
    item =>
      `<li><img src="${item.img}" alt="${item.brand}" width="300">
      <h2>${item.brand}</h2>
      <h3>${item.model}</h3>
      <p>${item.price}</p>
      </li>`
  );

  //   console.log(markup);
  // массив превращаем в строку и ее добавляем в разметку
  listEl.innerHTML = markup.join('');
}
createMarkup(cars);

//вешаем слушателя на форму
formEl.addEventListener('submit', onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();

  //   console.log(event.currentTarget.elements); // query- эл. Импут, type - эл. Селект

  const { query, type } = event.currentTarget.elements; // деструкторизовали эл. Импута и Селекта

  console.dir(query.value.toLowerCase()); /// введеное значение в Импут
  console.log(type.value.toLowerCase()); // brand || model значение Селекта

  // Функция фильтрации карточек (массива объектов) по значению введеным буквам Селекта
  const filteredArr = cars.filter(item =>
    item[type.value].toLowerCase().includes(query.value.toLowerCase())
  );

  //   // Функция фильтрации карточек (массива объектов) по значению Селекта
  //   const filteredArr = cars.filter(
  //     item => item[type.value].toLowerCase() === query.value.toLowerCase()
  //     );

  console.log(filteredArr);

  createMarkup(filteredArr);
}

//-------------------------------------------task-----------------
// // Представлений масив фільмів (films) кожен елемент масиву являється об'єктом в якого є назва фільму та масив
//  з жанрами до яких він відноситься, але в масиві(genreIDs) тільки ID цих фільмів.
// // Потрібно в кожен об'єкт додати ключ genreNames який буде масивом з назвами жанрів до яких цей фільм
// відноситься.Після чого відрендерити список фільмів як наведено в прикладі нижче(Expected result), якщо в
//  списку жанрів більш ніж 2 фільми тоді рендеримо назву перших двох жанрів, а всі інші замінюємо на "Others".
// // Співвідношення ID жанру та назви жанру знаходиться в об'єкті genresInfo.

const films = [
  {
    title: 'Interceptor',
    genreIDs: [28, 53, 12],
  },
  {
    title: 'Fantastic Beasts: The Secrets of Dumbledore',
    genreIDs: [14, 12, 28],
  },
  {
    title: 'Last Seen Alive',
    genreIDs: [28, 53],
  },
  {
    title: 'Jurassic World Dominion',
    genreIDs: [878, 28, 12, 53],
  },
];

const genresInfo = {
  genres: [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ],
};
// В массиве films для каждого объекта добавляем свойство  genreNames которое соотв. его genreIDs.
films.forEach(film => {
  //   console.log(film.genreIDs);

  const names = film.genreIDs.map(id => {
    // console.log(id);
    const genre = genresInfo.genres.find(genre => genre.id === id).name;
    // console.log(genre);
    return genre;
  });

  // console.log(genreNames);
  film.genreNames = names;
});

console.log(films);

// Создаем розметку. Выдает в строке genreNames отображает первые 2-а эл. и ...other

const markup = films.map(film => {
  return `  <li>
    <h2>${film.title}</h2>
    <p>${
      film.genreNames.length > 2 // тернарный оператор для условия
        ? film.genreNames.slice(0, 2).join(', ') + ', ...other'
        : film.genreNames.join(', ')
    }</p>
  </li>`;
});

console.dir(markup);

const listRef = document.querySelector('.js-listFilm');

// listRef.innerHTML = markup.join('');
listRef.insertAdjacentHTML('afterbegin', markup.join('')); // тут не надо удалять старую разметку, надо только добавить поэтому используем этот метод

//------------------------------------------------------------------------

const tech = [
  { label: 'HTML' },
  { label: 'JAVA' },
  { label: 'REACT' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'C++' },
];

const inputEl = document.getElementById('filterTech');
const listTech = document.querySelector('.js-listTech');

// Вешаем слушателя на input
inputEl.addEventListener('input', _.debounce(onFilterChenge, 2000));

const ListItemsMarkup = createListItemsMarkup(tech);

// функция создания строки разметки
function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

//добавление строки в разметку DOM
// listTech.innerHTML = ListItemsMarkup;
populateList(ListItemsMarkup);

// Функция фильтрует массив технологий в зависимости, что написали в input не зависит от регистра и добавляет в разметку
function onFilterChenge(event) {
  const filter = event.target.value.toLowerCase();

  const filteredItems = tech.filter(el => el.label.toLowerCase().includes(filter));

  const ListItemsMarkup = createListItemsMarkup(filteredItems);

  // listTech.innerHTML = ListItemsMarkup;
  populateList(ListItemsMarkup);
}

// повторяется код заменим его на функцию listTech.innerHTML = ListItemsMarkup

function populateList(markup) {
  listTech.innerHTML = markup;
}
