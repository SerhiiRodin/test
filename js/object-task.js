// TASK 2
//     ? У нас є об'єкт, де зберігаються зарплати нашої команди.
//     ? Напишіть код для підсумовування всіх зарплат та збережіть
//     результат у змінній sum.
//     ? Повинно вийти 390. Якщо об'єкт salaries порожній,
//     результат має бути 0.
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// Object.values
// const salariesValues = Object.values(salaries)
// console.log(salariesValues)
// let sum = 0
// for(const value of salariesValues){
//     sum += value
// }
// console.log(sum)

// for-in
// let sum = 0
// for( const key in salaries){
//     sum += salaries[key] // salaries['John']
// }
// console.log(sum)

// Object.keys + for...of

// const salariesKeys = Object.keys(salaries)
// // console.log(salariesKeys)
// let sum = 0
// for(const key of salariesKeys){
//     // sum += salaries[key]
//     sum = sum + salaries[key]
// }
// console.log(sum)
//
// TASK 3
//     ? Напиши скрипт управління особистим кабінетом інтернет-банку.
//     ? Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
//     ? Типів транзацький лише два:
//     ? Можна покласти чи зняти гроші з рахунку.
//     ? Кожна транзакція це об'єкт із властивостями: id, type та amount

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   startId: 0,
//   balance: 0,
//   transactions: [],
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: account.generateID(),
//     };
//   },

//   generateID() {
//     return (account.startId += 1);
//   },

//   deposit(amount) {
//     account.transactions.push(account.createTransaction(amount, Transaction.DEPOSIT));
//     account.balance += amount;
//   },

//   withdraw(amount) {
//     if (account.balance >= amount) {
//       account.transactions.push(account.createTransaction(amount, Transaction.WITHDRAW));
//       account.balance -= amount;
//     } else {
//       console.log('Не можливо зняти таку сумму, ваш баланс ', account.balance);
//     }
//   },

//   getTransactions() {
//     console.log(account.transactions);
//   },
// };

// console.log(account);
// account.deposit(5000);
// console.log(account);
// account.deposit(1000);
// console.log(account);
// account.withdraw(20000);
// account.withdraw(1000);
// console.log(account);
// account.getTransactions();

//------------------------------------------------------------------------------------------
// Корзина товаров

// const cart = {
//   items: [],

//   // getItems возвращает ссылку на items
//   getItems() {
//     console.log('Смотрим корзину.');
//     return this.items;
//   },

//   // добавляем в корзину товар
//   add(product) {
//     // Перед добавлением продукта проверяем есть ли такой же в корзине, если есть то меняем колличество
//     // и выходим из функции.
//     console.log(`Добавляю продукт ${product.name}`);

//     for (const item of this.items) {
//       //console.log(item);
//       if (product.name === item.name) {
//         item.quantity += 1;
//         console.log(`${product.name}  уже есть`);
//         return;
//       }
//     }

//     // для того чтоб групировать одинаковые продукты вводим объект с новым ствойстом колличество(quantity)
//     // и в него распыляем объект product кторорый приходит. Потом новй объект добавляем в массив items
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },

//   //  удаляем продукт из корзины
//   remove(productName) {
//     const { items } = this; // деструкторизация объекта cart (this), теперь вместо this.items пишем items
//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i]; // деструкторизация массива продуктов, теперь вмето items[i].name пишем name

//       if (productName === name) {
//         console.log('Нашли продукт,', productName, '. Удаляем!!!');
//         console.log('Индекс: ', i);
//         this.items.splice(i, 1);
//       }
//     }
//   },

//   // Удаляем все из корзины
//   clear() {
//     console.log('Очищаю корзину!!!');
//     this.items = [];
//   },

//   //Сумма покупок в корзине
//   countTotalPrice() {
//     let totalPrice = 0;

//     for (const item of this.items) {
//       const { price, quantity } = item; // деструкторизация массива price вместо item.price и quantity
//       totalPrice += price * quantity;
//     }
//     return totalPrice;
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//         console.log(`Увеличиваем кол. ${productName}`);
//         return;
//       }
//     }

//     console.log(`${productName} нет в корзине, сначала добавьте его.`);
//   },

//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.quantity === 1 && item.name === productName) {
//         this.remove(productName);
//         return;
//       } else if (item.name === productName) {
//         console.log(`Уменьшаем кол. ${productName}`);
//         item.quantity -= 1;
//         return;
//       }
//     }

//     console.log(`${productName} нет в корзине, уменьшить не могу!!!`);
//   },
// };

// console.log(cart.getItems());

// cart.add({ name: 'lemon', price: 30 });
// cart.add({ name: 'lemon', price: 30 });
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'orange', price: 70 });
// cart.add({ name: 'cherry', price: 80 });
// cart.add({ name: 'lemon', price: 30 });
// cart.add({ name: 'orange', price: 70 });

// console.table(cart.getItems());

// cart.increaseQuantity('orange');

// console.table(cart.getItems());

// cart.decreaseQuantity('apple');

// console.table(cart.getItems());

// cart.remove('orange');

// console.table(cart.getItems());

// console.log('Total price: ', cart.countTotalPrice());

// console.log('Total price: ', cart.countTotalPrice());

// console.table(cart.getItems());

// cart.clear();

// console.log(cart.getItems());

//------------------------------------------------------------------------------------------

//   1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// const friends = [
//   { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
//   { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
//   { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
//   {
//     name: 'Oleksii',
//     books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
//     age: 26,
//   },
// ];

// function bookName(arr, bookNAME) {
//   let arreyName = [];
//   let sum = 0;

//   for (const value of arr) {
//     if (value.hasOwnProperty('age')) {
//       sum += value.age;
//     }

//     // if ('age' in value) {
//     //   sum += value.age;
//     // }
//   }
//   return sum;
// }

// console.log(bookName(friends, 'Harry Potter'));

// bookName(friends, 'Harry Potter');

//------------------------------------------------------------------------------------------
// // Порахувати скільки ззаробив кожен  юзер
// // (функція приймає 2 параметри
// // 1 параметр масив
// // 2 параметр імя робітника
// // Функція повертає скільки він заробив (salary*month) )

// const workers = [
//   {
//     name: 'Alex',
//     salary: 3500,
//     month: 12,
//   },
//   {
//     name: 'Dima',
//     salary: 2500,
//     month: 9,
//   },
//   {
//     name: 'Oleg',
//     salary: 1500,
//     month: 36,
//   },
// ];

//------------------------------------------------------------------------------------------

// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

// const hogvarts = {
//   griffindor: [
//     {
//       name: 'Harry',
//       points: 17,
//     },
//     {
//       name: 'Hermiona',
//       points: 19,
//     },
//     {
//       name: 'Ron',
//       points: 14,
//     },
//   ],
//   sliserin: [
//     {
//       name: 'Draco',
//       points: 17,
//     },
//     {
//       name: 'Goyl',
//       points: 14,
//     },
//     {
//       name: 'Crabbe',
//       points: 5,
//     },
//   ],

//   getName(fuculty) {
//     const names = [];
//     for (const student of this[fuculty]) {
//       names.push(student.name);
//     }
//     const namesString = names.join(', ');
//     return namesString;
//   },

//   getPoints(fuculty) {
//     let sum = 0;
//     for (const student of this[fuculty]) {
//       sum += student.points;
//     }
//     return sum;
//   },

//   getBestFuculty() {
//     let name = '';
//     let bestPoints = 0;

//     const keys = Object.keys(this); // возвращает список ключей и методов, нам надо только ключи (названия факультетов)
//     console.log(keys);

//     for (const key of keys) {
//       // выбирает только ключи, методы отсеиваем.  Проверяем условие что очки факультета должны быть больше чем bestPoints.
//       if (typeof this[key] === 'object' && this.getPoints(key) > bestPoints) {
//         bestPoints = this.getPoints(key);
//         name = key;
//       }
//     }
//     return name;
//   },
// };

// console.log(hogvarts.getName('griffindor'));
// console.log(hogvarts.getPoints('griffindor'));
// console.log(hogvarts.getBestFuculty());

//--------------------------------------------------------------------------------------------

// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

const products = [
  {
    id: 'sku1',
    qty: 1,
  },
  {
    id: 'sku2',
    qty: 2,
  },
  {
    id: 'sku3',
    qty: 3,
  },
  {
    id: 'sku1',
    qty: 6,
  },
  {
    id: 'sku1',
    qty: 8,
  },
  {
    id: 'sku2',
    qty: 19,
  },
  {
    id: 'sku4',
    qty: 1,
  },
];

// Берем первый эл. и сравниваем его с всеми следующими эл. для этого делаем вложеный for в for
function makeOrder(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
    for (let j = i + 1; j < arr.length; j += 1) {
      // если совпали id, то слаживаем кол. i-го и j-го и удаляем j-й эл.
      if (arr[i].id === arr[j].id) {
        arr[i].qty += arr[j].qty;
        arr.splice(j, 1);
        // При удалении эл. у нас меняется длина массива (индексы съежают) и мы пропускаем один эл для этого j-ий эл. уменьшаем на один.
        j -= 1;
      }
    }
  }
  return arr;
}

console.log(makeOrder(products));
