//----------------------------------------------------------------------------------------------
// Метод call

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Поли',
// };

// greetGuest.call(mango, 'Добро пожаловать'); // Добро пожаловать, Манго.
// greetGuest.call(poly, 'С приездом'); // С приездом, Поли.

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const planetsInUpperCase = planets.map(planet => planet + 2);
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(' - ');
//   },
//   getEmails() {
//       const emails = this.orders.map(order => order.email);
//       const uniqueEmails = new Set(emails);
//     //   return uniqueEmails;
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getEmails());
// console.dir(historyService);

//----------------------------------------------------------------------------------------------

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders.map(order => `email: ${order.email} dish: ${order.dish}`).join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());

//----------------------------------------------------------------------------------------------

// class User {
//   // Деструктуризируем объект
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: 'Манго',
//   email: 'mango@mail.com',
// });

// console.log(mango); // { name: "Манго", email: "mango@mail.com" }

//----------------------------------------------------------------------------------------------
// Напиши класс Blogger для создания обьекта блоггера со следующим свойствами:

//     email - почта, строка
//     age - возраст, число
//     numberOfPosts - кол-во постов, число
//     topics - массив тем на которых специализируется блоггер

// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку:
//  User ${ почта } is ${ возраст } years old and has ${ кол - во постов } posts.

// Добавь метод updatePostCount(value), который в параметре value принимает количество постов
//  которые нужно добавить пользователю.

// class User {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//   updatePostCount(value) {
//     return (this.numberOfPosts += value);
//   }
// }

// const mango = new User({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango);

// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts

// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

//----------------------------------------------------------------------------------------------

// Напиши класс Storage который создаёт объекты для управления складом товаров. При вызове будет
// получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

//     getItems() - возвращает массив товаров.
//     addItem(item) - получает новый товар и добавляет его к текущим.
//     removeItem(item) - получает товар и, если он есть, удаляет его из текущих.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     items.push(item);
//     }

//     removeItem(item) {
//         const indexElement = this.items.findIndex(element => element === item);
//         this.items.splice(indexElement, 1);
//     }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();

// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(items);

// storage.removeItem('🍋');
// console.table(items); // [ '🍎', '🍇', '🍑', '🍌' ]

//----------------------------------------------------------------------------------------------

// Напиши класс User который создаёт объект со свойствами login и email.Объяви приватные свойства
// #login и #email, доступ к которым сделай через геттер и сеттер login и email.

// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     console.log(`Изменяем логин на ${newLogin}`);
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     if (newEmail === '') {
//       console.error('Ошибка! Почта не может быть пустой строкой!');
//       return;
//     }

//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango);
// console.log(mango.login);
// console.log(mango.email);

// mango.login = 'Poly';
// console.log(mango);
// mango.email = 'mango@dogg.com';
// console.log(mango);

//----------------------------------------------------------------------------------------------

// Напиши класс Notes который управляет коллекцией заметок в свойстве items.Заметка это объект со
// свойствами text и priority.Добавь классу статическое свойство Priority, в котором будет храниться
// объект с приоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }

// Добавь методы addNote(note), removeNote(text) и updatePriority(text, newPriority).

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(arr) {
//     this.items = arr;
//   }

//   // Повторяетися операция для поиска индекса, можно ее вынести как статическую ф-цию.

//   static findNoteByIndex(text, items) {
//     return items.findIndex(item => item.text === text);
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     const index = this.items.findIndex(item => item.text === text); // повтор
//     // const index = Notes.findNoteByIndex(text, this.items);

//     this.items.splice(index, 1);
//   }

//   updatePriority(text, newPriority) {
//     const index = this.items.findIndex(item => item.text === text); // повтор
//     // const index = Notes.findNoteByIndex(text, this.items);

//     this.items[index].priority = newPriority;
//   }
// }

// console.dir(Notes);

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя вторая заметка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.updatePriority('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items);

//----------------------------------------------------------------------------------------
// Класс Square наследует класс Rectangle, класс вызывет конструктор родительского класса

// class Rectangle {
//   constructor(height, width) {
//     this.name = 'Rectangle';
//     this.height = height;
//     this.width = width;
//   }
//   sayName() {
//     console.log('Hi, I am a ', this.name + '.');
//   }
//   get area() {
//     return this.height * this.width;
//   }
//   set area(value) {
//     this._area = value;
//   }
// }

// class Square extends Rectangle {
//   constructor(length) {
//     super(length, length);
//     this.name = 'Square';
//   }
// }

// const square = new Square(10);

// console.log(square);
// square.sayName();
// console.log(square.area);

//----------------------------------------------------------------------------------------

class StringBuilder {
  constructor(value) {
    this.value = value;
  }
  getValue() {
    return this.value;
  }

  padEnd(str) {
    this.value = this.value + str;
  }

  padStart(str) {
    this.value = str + this.value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder = new StringBuilder('.');
console.log(builder);
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
console.log(builder.padEnd('^'));
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
