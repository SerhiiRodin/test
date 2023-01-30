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

startBtn.addEventListener('click', () => {
  timer.start();
});

stopBtn.addEventListener('click', () => {
  timer.stop();
});

//Функция вывода времени
function updateClockface({ hours, minutes, seconds }) {
  clockface.textContent = `${hours}:${minutes}:${seconds}`;
}

// Вывод в формате HH:MM:SS
const timer = {
  //Вводим intervalId чтоб можно было очистить таймер
  intervalId: null,
  // Водим переменую, для того чтоб нельзя было запустить более одного таймера
  isActive: false,
  start() {
    //проверка на запущенный таймер
    if (this.isActive) {
      return;
    }
    // Время запуска ф-ции
    const startTime = Date.now();
    // При первом запуске присваиваем true что таймер запущен
    this.isActive = true;

    this.intervalId = setInterval(() => {
      //Время запуска колбэк ф-ции
      const currentTime = Date.now();
      // console.log(`currentTime: ${currentTime}`);

      //Разница между временем запука и текущим временем
      const deltaTime = currentTime - startTime;
      //деструкторизируем { hours, minutes, seconds }
      const { hours, minutes, seconds } = getTimeComponents(deltaTime);
      updateClockface(getTimeComponents(deltaTime));
      console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    // при остановке таймера делаем его не активным
    this.isActive = false;
    // для сброса времени 00:00:00
    updateClockface(getTimeComponents(0));
  },
};

//Функция берет число превр. в строку и добавляет в начало нолики, если нет значения у первых
// 2 - х чисел 1 -> 01, 7 -> 07, 12 -> 12
function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const milliseconds = pad(parseInt((time % 1000) / 100));
  const seconds = pad(parseInt((time / 1000) % 60));
  const minutes = pad(parseInt((time / (1000 * 60)) % 60));
  const hours = pad(parseInt((time / (1000 * 60 * 60)) % 24));

  return { hours, minutes, seconds };
}

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
