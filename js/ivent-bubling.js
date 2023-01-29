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
