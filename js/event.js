// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector('#btn');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// addListenerBtn.addEventListener('click', () => {
//   btn.addEventListener('click', handleClick);
//   console.log('click event listener was added to btn');
// });

// removeListenerBtn.addEventListener('click', () => {
//   btn.removeEventListener('click', handleClick);
//   console.log('click event listener was removed from btn');
// });


// const button = document.querySelector('#single');

// const handleClick = event => {
//   console.log('event: ', event);
//   console.log('event type: ', event.type);
//   console.log('currentTarget: ', event.currentTarget);
// };

// button.addEventListener('click', handleClick);


// document.addEventListener('keydown', event => {
//   console.log('key: ', event.key);
//   console.log('code: ', event.code);
// });

// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event);
// });

// document.addEventListener('keyup', event => {
//   console.log('Keyup: ', event);
// });

// document.addEventListener('keydown', event => {
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === 'KeyS') {
//     console.log('«Ctrl + s» or «Command + s» combo');
//   }
// });

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
