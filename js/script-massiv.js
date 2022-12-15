// Переопределение эл. в массиве
// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log("Было", clients);
// clients[0] = 'Kiwi';
// clients[1] = 'Pango';
// console.log('Стало', clients);

//--------------------------------------------------------------------
// Перебор массива с помощью FOR
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

//--------------------------------------------------------------------
// Цикл FOR ... OF
// const string = 'javascript';
// for (const character of string) {
//   console.log(character);
// }
// // Замена для цикла с FOR
// const strings = 'javascript';
// for (let i = 0; i < strings.length; i += 1) {
//   console.log(strings[i]);
// }

// // Перебор массива
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

//--------------------------------------------------------------------
// Перебор массива с break
// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poаly';
// let message;

// for (const client of clients) {
//   // На каждой итерации будем проверять совпадает ли элемент массива с
//   // именем клиента. Если совпадает то мы записываем в message сообщение
//   // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message);

//--------------------------------------------------------------------
// Перебор массива с continue
// const numbers = [21, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// // и управление передаётся на следующую итерацию.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

//--------------------------------------------------------------------
// Удаление эл. в массиве
// const scores = [1, 2, 3, 4, 5];
// console.log(scores);

// const deletedScores = scores.splice(1, 3);
// console.log(deletedScores);  // [2, 3, 4]
// console.log(scores);    // [1, 5]

//--------------------------------------------------------------------
// Добавление эл. в массиве
// const scores = [1, 2, 3, 4, 5];
// console.log(scores);
// scores.splice(2, 0, 7, 8, 9);
// console.log(scores);

//--------------------------------------------------------------------
// Замена эл. в массиве
const scores = [1, 2, 3, 4, 5];
console.log(scores);
scores.splice(2, 2, 7, 8, 9);
console.log(scores);

//--------------------------------------------------------------------
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];
// const newClients1 = ['Monkong', 'Singu'];

// const allClientsWithOldFirst = oldClients.concat(newClients, newClients1);
// console.log(allClientsWithOldFirst);

//--------------------------------------------------------------------

