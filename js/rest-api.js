// Общий синтаксис
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     // Парсим ответ в формат JSON и возвр. это в следующий then, а там работаем с этим
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//Обработка запроса c БД и прорисовка этих данных при нажатии на кнопку.
const fetchUsersBtn = document.querySelector('.btn');
const userList = document.querySelector('.user-list');

fetchUsersBtn.addEventListener('click', () => {
  fetchUsers()
    .then(users => renderUserList(users))
    .catch(error => console.log(error));
});

function fetchUsers() {
  //fetch("https://jsonplaceholder.typicode.com/users") выведет все с базы
  // выведет первые 7-мь пользователей и отсортирует по имени
  return fetch('https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderUserList(users) {
  const markup = users
    .map(user => {
      return `
          <li>
            <p><b>Name</b>: ${user.name}</p>
            <p><b>Email</b>: ${user.email}</p>
            <p><b>Company</b>: ${user.company.name}</p>
          </li>
      `;
    })
    .join('');
  userList.innerHTML = markup;
}

//-----------------------------Покемон-------------------------------
// импортируем разметку
// import pokemonCard from '../temeplates/pokemon-card.hbs';

const divEl = document.querySelector('.pokemon');
const pokmonForm = document.getElementById('pokemonForm');

// Вводим id пакемона и по нему ищем в базе, значение должно быть число
pokmonForm.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(event) {
  event.preventDefault();

  const id = event.currentTarget.elements.pokemonTxt.value;
  if (!Number(id)) {
    console.log('Press enter number');
    divEl.innerHTML = '<p> Enter number!!! </p>';
    return;
  }
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => {
      return response.json();
    })
    .then(pokemon => {
      // console.log(pokemon);
      // console.log(pokemon.abilities[1].ability.name);

      const markup = markupPokemonCard(pokemon);
      divEl.innerHTML = markup;
      // console.log(markup);
    })
    .catch(error => {
      console.log(error);
    });
}

function markupPokemonCard(pokemon) {
  return `<div class='card'>
    <img src='${pokemon.sprites.front_default}' alt='${pokemon.name}' />
    <img src='${pokemon.sprites.front_shiny}' alt='${pokemon.name}' />
  </div>
  <div class='card-body'>
    <h2 class='card-titele'>Имя: ${pokemon.name}</h2>
    <p class='card-text'>Вес: ${pokemon.weight} </p>
    <p class='card-text'>Рост: ${pokemon.height} </p>

    <ul>
        <li>${pokemon.abilities[0].ability.name}</li>
        <li>${pokemon.abilities[1].ability.name}</li>
    </ul>  

</div>`;
}
//---------------------------------------------------------------------
//  Подключаем функцию которая делает запрос на API сервер
import fetchData from '../script/api.js';

const form = document.getElementById('form');
const newsWrapper = document.getElementById('newsWrapper');

// Вешаем оброботчик при отправке формы submit

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget; // эл где висит обработчик
  const value = form.elements.news.value.trim(); // значение в поле импута обезаем в начале и в конце пробелы

  fetchData(value)
    .then(({ articles }) => {
      // Если не нашли не одной статьи ошибка и переходим в блок catch
      if (articles.length === 0) {
        throw new Error();
      }
      //метод принимает массив статей берет эл. делает раметку и прибавляет к асс (это все строка)
      return articles.reduce((acc, article) => {
        return acc + createMarkup(article);
      }, '');
    })
    // мы знаем что сюда приходи только markup поэтому можно указать функцию без параметров
    // .then(updateNewsWrapper)
    .then(markup => {
      updateNewsWrapper(markup);
    })
    .catch(onError)
    .finally(() => form.reset()); // блок выполняется в любом случае промиса он очищает форму.
}

function updateNewsWrapper(markup) {
  newsWrapper.innerHTML = markup;
}
// Если фатора нет, то пишем anonymous 135 строка
function createMarkup({ author, title, description, url, urlToImage }) {
  return `
  <div class="article-card">
    <img src=${urlToImage} class="article-img" />
    <h2 class="article-title">${title}</h2>
    <h3 class="article-author">${author || 'anonymous'}</h3>
    <p  class="article-description">${description}</p>
    <a href=${url} class="article-link" target="_blank">Read more</a>
  </div>
  `;
}

// Если ничего не нашло то выводит на экран строку.
function onError(error) {
  updateNewsWrapper('<p>Articles not found</p>');
  console.log('no data');
}

// // -----------------------------GET------------------------------------
// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// // -----------------------------POST------------------------------------
// const postToAdd = {
//   author: 'Mango',
//   body: 'CRUD is awesome',
//   userId: 105,
// };

// const options = {
//   method: 'POST',
//   body: JSON.stringify(postToAdd),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then(response => response.json())
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error));

// // Функция создания статей.
// function createPost(author, userId) {
//   const postToAdd = {
//     author: author,
//     body: 'CRUD is realy awesome',
//     userId: userId,
//   };

//   const options = {
//     method: 'POST',
//     body: JSON.stringify(postToAdd),
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   };

//   fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then(response => response.json())
//     .then(posts => console.log(posts))
//     .catch(error => console.log(error));
// }

// createPost('Serj', 104);
// createPost('Serj', 103);

// // -----------------------------DELETE------------------------------------
// const postIdToDelete = 104;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: 'DELETE',
// })
//   .then(() => console.log('Post deleted'))
//   .catch(error => console.log('Error:', error));

//-----------------------------------------------------------------

const fetchUserss = async () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';
  const userIds = [1, 2, 3];

  // 1. Создаём массив промисов
  const arrayOfPromises = userIds.map(async userId => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  // 2. Запускаем все промисы параллельно и ждем их завершения
  const users = await Promise.all(arrayOfPromises);
  console.log(users);
};

fetchUserss();