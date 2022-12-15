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

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  startId: 0,
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    return {
      amount,
      type,
      id: account.generateID(),
    };
  },

  generateID() {
    return (account.startId += 1);
  },

  deposit(amount) {
    account.transactions.push(account.createTransaction(amount, Transaction.DEPOSIT));
    account.balance += amount;
  },

  withdraw(amount) {
    if (account.balance >= amount) {
      account.transactions.push(account.createTransaction(amount, Transaction.WITHDRAW));
      account.balance -= amount;
    } else {
      console.log('Не можливо зняти таку сумму, ваш баланс ', account.balance);
    }
  },

  getTransactions() {
    console.log(account.transactions);
  },
};

console.log(account);
account.deposit(5000);
console.log(account);
account.deposit(1000);
console.log(account);
account.withdraw(20000);
account.withdraw(1000);
console.log(account);
account.getTransactions();
