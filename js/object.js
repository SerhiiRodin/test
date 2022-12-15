//------------------------------------------------------------------------------------------
// Методы и доступ к свойствам объекта
// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook('The Mist');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

//------------------------------------------------------------------------------------------
// Перебор свойств в методе
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//     if (book.hasOwnProperty(key)) // проверка на собственные свойства
//       // Перебор ключей
//       console.log(key);

//   // Перебор значение свойства с таким ключом
//   console.log(book[key]);
// }
// // console.log(book);
// // console.log(book["title"]);
//------------------------------------------------------------------------------------------

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   // Название
//   console.log(book.title);
//   //   // Автор
//   console.log(book.author);
//   //   // Рейтинг
//   console.log(book.rating);
// }

// // Массив из названий всех книг
// const bookNames = [];
// for (const book of books) {
//   bookNames.push(book.title);
// }
// console.log(bookNames); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]

// // Средний рейтинг всех книг
// let totalRating = 0;
// for (const book of books) {
//   totalRating += book.rating;
// }
// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

//------------------------------------------------------------------------------------------
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName -
// название продукта.Функция ищет объект продукта с таким именем(свойство name) в массиве products и
// возвращает его цену(свойство price).Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// console.table(products); //выводит массив в виде таблицы

// function getProductPrice(productName) {
//   // массив из name.
//   const nameProducts = [];
//   for (const product of products) {
//     nameProducts.push(product.name);
//   }
//   // индекс параметра функции в массиве
//   const nameIndex = nameProducts.indexOf(productName);
//   let priceProducts = null;
// // если массив вкючает параметр фунции, то выводит цену этого товара
//   if (nameProducts.includes(productName)) {
//     priceProducts = products[nameIndex].price;
//   }

//   return priceProducts;
// }

// getProductPrice('Radar');
// getProductPrice('Engine');
// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));

//------------------------------------------------------------------------------------------
// Поиск обекта продукта с названием
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     const nameProducts = [];
//   for (const product of products) {
//     //   console.log(product);
//     //   console.log(product.name);
//     //   console.log(product.name === productName);
//       nameProducts.push(product.name);

//       if (product.name === productName) {
//          return console.log(`${productName} Нашли!!!`);
//     }
//     }
//     console.log(nameProducts);
//     return console.log(`${productName} Не нашли!!!`);
// }

// getProductPrice('Droid');
// getProductPrice('Droidа');
//------------------------------------------------------------------------------------------
// Создание массива с имен, с ценами, с колличеством
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllProp(products) {
//   const nameProducts = [];
//   const namePrice = [];
//   const nameQuantity = [];

//   for (const product of products) {
//     nameProducts.push(product.name);
//     namePrice.push(product.price);
//     nameQuantity.push(product.quantity);
//   }

//   console.log(nameProducts);
//   console.log(namePrice);
//   console.log(nameQuantity);
// }

// console.log(getAllProp(products));

//------------------------------------------------------------------------------------------
// Выбрать продукты у которых цена меньше 1250 и продукты с ценой больше.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductsPriceStatus(products) {
//   const sortProductsPriceLess = [];
//   const sortProductsPriceMore = [];

//   for (const product of products) {
//     if (product.price <= 1250) {
//       sortProductsPriceLess.push(product);
//     } else {
//       sortProductsPriceMore.push(product);
//     }
//   }

//   console.log(`Продуты с ценой менее 1250:`, sortProductsPriceLess);
//   console.log(`Продуты с ценой менее 1250:`, sortProductsPriceMore);

// }

// console.table(getProductsPriceStatus(products));

//------------------------------------------------------------------------------------------
// Др. способ

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductsPriceStatus(products) {
//   const productsPriceStatus = {
//     priceLess: [],
//     priceMore: [],
//   };

//   for (const product of products) {
//     if (product.price <= 1250) {
//       productsPriceStatus.priceLess.push(product);
//     } else {
//       productsPriceStatus.priceMore.push(product);
//     }
//   }

//   return productsPriceStatus;
// }

// console.log(getProductsPriceStatus(products));

//------------------------------------------------------------------------------------------

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

const a = { x: 1, y: 2, };
const b = { z: 3 };
const c = 5;

const newArray = Object.assign({}, a, b, {f: 5});
console.log(newArray);

