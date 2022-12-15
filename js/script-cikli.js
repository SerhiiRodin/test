'use strict';

// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);

// Результат prompt всегда string
// let quantity = prompt('Введите кол. товара');
// Преобразоввываем string в чилло
// quantity = Number(quantity);
// console.log(typeof quantity);
// console.log(quantity);

//--------------------------------------------------------
// Парсим из строки только целое число
// const width = '50.5px';
// const intNumber = Number.parseInt(width);
// console.log(width);
// console.log(intNumber);

// Парсим из строки только дробное число число
// const floatNumber = Number.parseFloat(width);
// console.log(floatNumber);

//--------------------------------------------------------
//Отсечение лишних знаков
// let salary = 100000.2564;
// console.log(salary);
// let salaryFixed = Number(salary.toFixed(2));
// console.log(salaryFixed);
// console.log(typeof salaryFixed);

//--------------------------------------------------------
// Пользователь вводит число и степень и выводится результат

// const base = prompt("Введите число");
// const power = prompt('Введите степень');
// const result = Number(base) ** Number(power);
// console.log(result);

//--------------------------------------------------------
// Случайное число от 20 до 50
// let number = Math.random() * (50 - 20) + 20;
//округляем до целого
// number = Math.round(number);
// console.log(number);

//--------------------------------------------------------
// Скрипт вхождение числа в отрезок х1 х2
// const x1 = 10;
// const x2 = 30;
// const namber = 35;
// console.log(`Число ${namber} попадает в отрезок до числа ${x1}?`, namber < x1);
// console.log(`Число ${namber} попадает в отрезок после числа ${x2}?`, namber > x2);
// console.log(
//   `Число ${namber} попадает в отрезок от числа ${x1} до числа ${x2}?`,
//   namber >= x1 && namber <= x2
// );
// console.log(
//   `Число ${namber} попадает в отрезок до числа ${x1} или после числа ${x2}?`,
//   namber < x1 || namber > x2
// );

//--------------------------------------------------------
// Условия
// const namber = 50;
// if (namber == 50) {
//     console.log('Число равно 50');
// }

// else if (namber > 20) {
//   console.log('Число больше 20');
// }

// else if (namber < 20) {
//     console.log('Число меньше 20');
// }

//--------------------------------------------------------
// Тернарный оператор
// const balans = 1000;

// let message = balans >= 0 ? 'Положительный баланс' : 'Отрицательный баланс';

// console.log(message);

//--------------------------------------------------------
// Инструкция SWITCH

// let cost;
// const subscription = 'premium';

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500

//--------------------------------------------------------
// Цикл FOR
// const target = 4;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//     sum += i;
//     console.log(`Итерация ${i}: ${sum}`);
// }

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

//--------------------------------------------------------
// Цикл WHILE
// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

//--------------------------------------------------------
// Цикл DO ... WHILE
// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

//--------------------------------------------------------
// Цикл FOR прерываем цикл по условию
// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log('Нашли число 3, прерываем выполнение цикла');
//     break;
//   }
// }
// console.log('Лог после цикла');

//--------------------------------------------------------
// Пропускаем итерации в цикле по условию
// const number = 30;

// for (let i = 0; i < number; i +=1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }

//--------------------------------------------------------
//Вывод четных чисел в промежутке

// console.clear();

// const min = 10;
// const max = 20;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
//   console.log(i, total);
// }

//--------------------------------------------------------
// Задача не кратность 3 и 5
// const min = 0;
// const max = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} Кратно 3 и 5`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} Кратно 3`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} Кратно 5`);
//   } else {
//       console.log(i);
//   }
// }

//--------------------------------------------------------
// Ссылка на кнопку

const btnAdd = document.querySelector('button[data-add]'); // получил ссылку на кнопку
const resetBtn = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');


let total = 0;

//Добавлен слушатель событий на клик по кнопке, выполняется функция при клике
btnAdd.addEventListener('click', function () {
  console.log('Кнопка нажата');
  console.log(Number(valueInput.value));

    const value = Number(valueInput.value);
    
    total += value;
    outputEl.textContent = total;
    console.log("tatal ", total);
    valueInput.value = '';
});


resetBtn.addEventListener('click', function () {
    outputEl.textContent = 0;
    total = 0;
 });