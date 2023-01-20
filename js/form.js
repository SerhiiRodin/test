// Вводим ссылки на все элементы формы

const inputEl = document.querySelector('.js-imput');
const lisenseCheckboxEl = document.querySelector('.js-lisense');
const buttonEl = document.querySelector('.js-button');
const nameLabelEl = document.querySelector('.js-button  span');
/*
// Слушаетль на событие фокуса импута
inputEl.addEventListener('focus', onImputFocus);
// Слушаетль на событие потери фокуса
inputEl.addEventListener('blur', onImputBlur);
// Слушаетль на событие ввода текста в поле imput
inputEl.addEventListener('input', onImputChange);
// Слушаетль на событие отметки чекбокса
lisenseEl.addEventListener('change', onCheckboxChange);

function onImputFocus() {
  console.log('Получил фокус');
}

function onImputBlur() {
  console.log('Потерял фокус');
}

function onImputChange() {
  console.log('Саобытие ImputChange');
  console.log(event.currentTarget.value);
}

function onCheckboxChange() {
  console.log('Саобытие CheckboxChange');
}
*/

// --------------------------Все что введем в импут отобразится в спане.--------------------------

inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
  console.log(event.currentTarget.value);
  nameLabelEl.textContent = event.currentTarget.value;
}

// ------------------------Кнопка активная только когда чекнутый чекбокс.------------------------

lisenseCheckboxEl.addEventListener('change', onCheckboxChange);
function onCheckboxChange(event) {
  console.log(event.currentTarget.checked); // чекнутый чекбокс
  console.log(buttonEl.disabled); // активность кнопки
  buttonEl.disabled = !event.currentTarget.checked; // если чекбокс не чекнутый, то кнопка не актична, если чекнутый то активна
}
