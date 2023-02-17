const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const descendant = document.querySelector('#descendant');

parent.addEventListener('click', () => {
  alert('Parent click handler');
});

child.addEventListener('click', event => {
  // event.stopPropagation();

  alert('Child click handler');
});

descendant.addEventListener('click', event => {
  alert('Descendant click handler');
});

//----------------------------------------------------------------------------------------------------

// const parent = document.querySelector('#parent');

// parent.addEventListener('click', event => {
//   console.log('event.target: ', event.target);
//   console.log('event.currentTarget: ', event.currentTarget);
// });

// const result = _.add(2, 3);
// console.log(result); // 5

const form = document.getElementById('form');
const inputPassword = document.getElementById('inputPassword');

const classes = {
  wrong: 'wrong',
  correct: 'correct',
};

// вешаем обработчика событий на отца импутов (на форму) делаем делегирование.
// делаем деструкторизацию const target = event.target
form.addEventListener(
  'input',
  _.debounce(({ target }) => {
    console.log(target);
    // делаем разные условия в зависимости в каком импуте вводим (targrt)
    if (target === inputPassword) {
      if (target.value.length <= 5 || target.value.length >= 10) {
        target.classList.add(classes.wrong);
        target.classList.remove(classes.correct);
      } else {
        target.classList.remove(classes.wrong);
        target.classList.add(classes.correct);
      }
    } else {
      if (target.value.length <= 2 || target.value.length >= 6) {
        target.classList.add(classes.wrong);
        target.classList.remove(classes.correct);
      } else {
        target.classList.remove(classes.wrong);
        target.classList.add(classes.correct);
      }
    }
  }, 1000)
);

const button = document.querySelector('button');
button.addEventListener('click', onClick);
// -------- Функциональное выражение (function expression) -------
// const onClick = () => {
//   setTimeout(() => {
//     alert("I love async JS!");
//   }, 2000);
// };

// Two seconds after clicking the button,
// alert specified inside the setTimeout callback will appear.

//--------- Объявление функции (function declaration) --------
function onClick() {
  setTimeout(() => {
    alert('I love async JS!');
  }, 2000);
}

//----------Отмена вызова функции-----------
// function onClick() {
//   const timerId = setTimeout(() => {
//     alert('I love async JS!');
//   }, 2000);

//   clearTimeout(timerId);
// }

// ------------- Надоедалка ---------------------

// const DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 5;

// let promptCounter = 0;
// let hasSubscribed = false;

// // Запускаем интервал для функциии message(), задаем для него intervalId,
// // чтоб по нему можно было сбросить исполнение ф-ции.
// const intervalId = setInterval(message, DELAY);

// function message() {
//   // условие появление надоедалки 5 раз или подписался hasSubscribed = true
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('End interval or hasSubscribed');
//     clearInterval(intervalId);
//     return;
//   }
//   console.log('Подпишись на рассылку' + Date.now());
//   // С каждым запуском ф-ции увеличивается счетчик.
//   promptCounter += 1;
//   // console.log(promptCounter);
// }

//  ------------- Таймер ---------------------
const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.js-clockface');

// ----------------- Класс------------------------------------------------------
class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;

    this.init(); // запускаем функцию чтоб сразу отрисовало 00:00:00
  }
  // Функция вывод 00:00:00 при начале работы
  init() {
    this.onTick(this.getTimeComponents(0));
  }

  start() {
    if (this.isActive) {
      return;
    }

    const startTime = Date.now();

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const { hours, minutes, seconds } = this.getTimeComponents(deltaTime);

      this.onTick(this.getTimeComponents(deltaTime));

      console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    this.onTick(this.getTimeComponents(0));
  }

  getTimeComponents(time) {
    const milliseconds = this.pad(parseInt((time % 1000) / 100));
    const seconds = this.pad(parseInt((time / 1000) % 60));
    const minutes = this.pad(parseInt((time / (1000 * 60)) % 60));
    const hours = this.pad(parseInt((time / (1000 * 60 * 60)) % 24));

    return { hours, minutes, seconds };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({
  onTick: updateClockface,
});

// Если не поставить вызов ф-ций в контексте bind(timer), то они будут ссылаться на контекст кнопки startBtn, stopBtn.
startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface({ hours, minutes, seconds }) {
  clockface.textContent = `${hours}:${minutes}:${seconds}`;
}

// Вывод в формате HH:MM:SS
//-----------------Объект-----------------------------------------------------------

// startBtn.addEventListener('click', () => {
//   timer.start();
// });
// stopBtn.addEventListener('click', () => {
//   timer.stop();
// });

//Функция вывода времени
// function updateClockface({ hours, minutes, seconds }) {
//   clockface.textContent = `${hours}:${minutes}:${seconds}`;
// }

// const timer = {
//   //Вводим intervalId чтоб можно было очистить таймер
//   intervalId: null,
//   // Водим переменую, для того чтоб нельзя было запустить более одного таймера
//   isActive: false,
//   start() {
//     //проверка на запущенный таймер
//     if (this.isActive) {
//       return;
//     }
//     // Время запуска ф-ции
//     const startTime = Date.now();
//     // При первом запуске присваиваем true что таймер запущен
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       //Время запуска колбэк ф-ции
//       const currentTime = Date.now();
//       // console.log(`currentTime: ${currentTime}`);

//       //Разница между временем запука и текущим временем
//       const deltaTime = currentTime - startTime;
//       //деструкторизируем { hours, minutes, seconds }
//       const { hours, minutes, seconds } = getTimeComponents(deltaTime);
//       updateClockface(getTimeComponents(deltaTime));
//       console.log(`${hours}:${minutes}:${seconds}`);
//     }, 1000);
//   },

//   stop() {
//     clearInterval(this.intervalId);
//     // при остановке таймера делаем его не активным
//     this.isActive = false;
//     // для сброса времени 00:00:00
//     updateClockface(getTimeComponents(0));
//   },
// };
//--------------------------------------------------------------------------------

//Функция берет число превр. в строку и добавляет в начало нолики, если нет значения у первых
// 2 - х чисел 1 -> 01, 7 -> 07, 12 -> 12
// function pad(value) {
//   return String(value).padStart(2, '0');
// }

//Функция берет число в мсек и выдает сколько в нем часов, минут, сек, мсек
// function getTimeComponents(time) {
//   const milliseconds = pad(parseInt((time % 1000) / 100));
//   const seconds = pad(parseInt((time / 1000) % 60));
//   const minutes = pad(parseInt((time / (1000 * 60)) % 60));
//   const hours = pad(parseInt((time / (1000 * 60 * 60)) % 24));

//   return { hours, minutes, seconds };
// }

// timer.start();
//-----------------Функция для преобразования миллисекунд в часы, минуты, сек, мсек------------
// function msToTime(duration) {
//   var milliseconds = parseInt((duration % 1000) / 100),
//     seconds = parseInt((duration / 1000) % 60),
//     minutes = parseInt((duration / (1000 * 60)) % 60),
//     hours = parseInt((duration / (1000 * 60 * 60)) % 24);

//   hours = hours < 10 ? '0' + hours : hours;
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   seconds = seconds < 10 ? '0' + seconds : seconds;

//   return hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
// }
// console.log(msToTime(3000000));

// const fff = setInterval(log, 1000);

// function log() {
// console.log(Math.random());
// }

// ----------------Промисс------------------+

// const promise = new Promise((resolve, reject) => {
//   const resultPromise = Math.random() > 0.5; //имитация результата промиса
//   console.log(resultPromise);

//   setTimeout(() => {
//     if (resultPromise) {
//       resolve('Промис выполнен успешно');
//     }
//     reject('Промис выполнен с ошибкой');
//   }, 2000);
// });

// promise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(result => {
//     console.log(result);
//   });

//-----------------Цепочка----------------------
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Final task');
//   });

//--------------------Официант----------------------------------

// const makeOrder = dish => {
//   const DELAY = 3000;

//   const promise = new Promise((resolve, reject) => {
//     const resultPromise = Math.random() > 0.5;
//     console.log(resultPromise);

//     setTimeout(() => {
//       if (resultPromise) {
//         resolve('Вот ваше блюдо');
//       }
//       reject('Закончились продукты');
//     }, DELAY);
//   });

//   return promise;
// };

// function onmakeOrderSuccess(result) {
//   console.log('Success');
//   console.log(result);
// }

// function onmakeOrderError(result) {
//   console.log('Error');
//   console.log(result);
// }

// makeOrder('пирожок').then(onmakeOrderSuccess).catch(onmakeOrderError);

//------------------------------------------------------------------------------------
// new Promise(resolve => resolve('success value')).then(value => console.log(value));
// // Promise.resolve('success value').then(value => console.log(value));

// new Promise((resolve, reject) => reject('error')).catch(error => console.error(error));
// // Promise.reject('error').catch(error => console.error(error));
//------------------------------------------------------------------------------------
//---------------Эподром----------------------------------------

const horses = ['Лошадь1', 'Лошадь2', 'Лошадь3', 'Лошадь4', 'Лошадь5'];

// Функция запуска одного коня.
// Результат промиса будат объект { horse, time }.

function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomeTime(2000, 4000);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

console.log('Заезд начался');

// Для дзпуска всех лошадей создаем массив промисов
const promises = horses.map(horse => run(horse));
console.log(promises);
// Метод Promise.race из коллекции промисов берет только самый быстрый.
Promise.race(promises).then(({ horse, time }) =>
  console.log(`%c Победила лошадь ${horse} с временем ${time}`, `color: red; font-size: 15px`)
);

// Метод Promise.all выводит резкультат исполнения всех промисов.
Promise.all(promises).then(value => console.log(value));

// Функция случайного числа от Мин до Макс
function getRandomeTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

