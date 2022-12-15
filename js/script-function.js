//------------------------------------------------------------------------------
// Снятие наличных
// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля');
//     return;
//   }

//   if (amount > balance) {
//     console.log('Недостаточно средств на счету');
//     return;
//   }

//   console.log('Операция снятия средств проведена');
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена успешно"

//------------------------------------------------------------------------------
// Функия сложение эл. массива
// const totalValue = function (array) {
//   console.log('Массив внутри функции: ', array);
//   let total = 0;
//   for (const value of array) {
//     total += value;
//   }

//   return total;
// };

// const r1 = totalValue([5, 6, 16, 7, 8]); // 42
// console.log(`Сумма эл. массива: ${r1}`);
// const r2 = totalValue([1, 2, 3, 4, 5, 6, 7]); //28
// console.log(`Сумма эл. массива: ${r2}`);

//------------------------------------------------------------------------------
// Функия логирования эл. массива (функция ничего не возвращает, только делает логирование)
// const logItems = function (items) {
//   console.log(items);
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(['Mango', 'Ajax', 'Poly']);
// logItems([1, 2, 3, 4, 5, 6, 7]);

//------------------------------------------------------------------------------
// Поиск логина
// const logins = ['11111', '22222', '33333', '444444']; // от сюда они берутся в аргумент при вызове функции

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден`; // чтоб при совпадении не переберать массив до конца
//     }
//   }
//   return `Пользователь ${loginToFind} не найден`;
//   // Через тернальный оперетор
//   // return allLogins.includes(loginToFind)
//   //   ? `Пользователь ${loginToFind} найден!`
//   //   : `Пользователь ${loginToFind} не найден!`;
// };

// console.log(findLogin(logins, '99999'));
// console.log(findLogin(logins, '88888'));
// console.log(findLogin(logins, '22222'));

//------------------------------------------------------------------------------
// Найти индекс массы тела
// Передается аргумент строка с разделением "," или "."
// function calcBMI(weight, height) {
//   weight = Number.parseFloat(weight.replace(',', '.'));
//   height = Number.parseFloat(height.replace(',', '.'));
//   const result = (weight / height ** 2).toFixed(1);

//   return result;
// }

// console.log(`Индекс массы: ${calcBMI('2,4', '2.89')}`);
// console.log(calcBMI('2,4', '2.89'));
// console.log('без округления', 2.4 / 2.89 ** 2);

//------------------------------------------------------------------------------
// Поиск наименьшего число в массиве

// function findSmollestNumber(array) {
//   let smolestNumber = array[0];
//   for (const values of array) {
//     if (values < smolestNumber) {
//       smolestNumber = values;
//     }
//   }
//   return smolestNumber;
// }

// console.log(findSmollestNumber([5, 7, 12, 9, 2, 10, 1]));

//------------------------------------------------------------------------------
// Изменение регистра в слове на противоположный
// function changeCase(string) {
//   const leters = string.split('');
//   let invertString = '';

//   for (const leter of leters) {
//     if (leter === leter.toLowerCase()) {
//       invertString += leter.toUpperCase();
//     } else {
//       invertString += leter.toLowerCase();
//     }
//   }

//   return invertString;
// }

// console.log(changeCase('sdFGAaa'));

//------------------------------------------------------------------------------
// конструкция (... args)
// Передается массив и произвольное кол. чисел, надо сделать новый массив из чисел, которые есть в массиве.
// разделяем параметры на переданы массив и из чисел делаем второй массив
function filterNumbers(array, ...args) {
  console.log(`Переданый массив ${array}`);
  console.log(`Массив переданых аргументов ${args}`);
  const uniqueElements = [];

  for (const value of array) {
    if (args.includes(value)) {
      console.log(`${value} есть в обоих массивах`);
      uniqueElements.push(value);
    }
  }
  return uniqueElements;
}

console.log(filterNumbers([10, 20, 33], 5, 10, 15, 20)); // 10, 20
