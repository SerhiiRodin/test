// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

//-------------------------------------------------------------------------------
//Инлайн колбэки

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest('Манго', function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest('Поли', function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

//-------------------------------------------------------------------------------
//Инлайн колбэки

// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall('Манго');

//------------------------------------------------------------------------------
// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;
//     console.log(isRecipientAvailable);

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);

//--------------------------------------------------------------------------

// const numbers = [5, 10, 15, 20, 25];

// Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// Перебирающий forEach
// let ar = [];
// numbers.forEach(function (number, index, array) {
//     console.log(`Индекс ${index}, значение ${number}`);
//     return array;
// });
// ar.push(50);
// console.log(ar);
// console.log(numbers);

// const num = numbers.slice(0, numbers.length - 1);
// console.log(num);

// console.log(ar === numbers);

//--------------------------------------------------------------------------
// Фильтрация массива по вызову определенного callback

// function filter(array, callback) {
//   const filterArray = [];

//   for (const el of array) {
//     const pased = callback(el);

//     if (pased) {
//       filterArray.push(el);
//     }
//   }
// Хьюстон;
//   return filterArray;
// }

// function callback1(value) {
//   return value >= 3;
// }

// function callback2(value) {
//     return value < 3;
// }

// console.log(filter([1, 2, 3, 4, 5, 6, 7], callback1));
// console.log(filter([1, 2, 3, 4, 5, 6, 7], callback2));

//---------------------------------------------------------------------------------------------

const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

console.table(cars);
// Example 1 Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

const getModels = cars => cars.map(car => car.model);

console.log(getModels(cars));

// Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням
//  властивості price залежно від переданої знижки.

const makeCarsWithDiscount = (cars, discount) =>
  cars.map(car => {
    const newCar = { ...car };
    newCar.price = newCar.price * (1 - discount);

    return newCar;
  });

console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.5));

//* Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра
// threshold.

const filterByPrice = (cars, threshold) => cars.filter(car => car.price < threshold);

console.table(filterByPrice(cars, 25000));

//* Example 6 - Метод find

const getCarByModel = (cars, model) => cars.find(car => car.model === model);

console.log(getCarByModel(cars, "F-150"));
console.log(getCarByModel(cars, "CX-9"));

//* Example 4 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням
//  значення якості amount.

const sortByAscendingAmount = cars => [...cars].sort((firstCar, secondCar) => firstCar.amount - secondCar.amount);

console.log(sortByAscendingAmount(cars));

//* Example 5 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

const getTotalAmount = cars => cars.reduce((acc, car) => { return (acc += car.amount); }, 0);

console.log(getTotalAmount(cars));

//* Example 6 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale),
//  відсортованих за зростанням ціни.

const getSortedCarsOnSale = cars =>
  [...cars]
    .sort((firstCar, secondCar) => firstCar.price - secondCar.price)
    .filter(car => car.onSale === true);

console.table(getSortedCarsOnSale(cars));
