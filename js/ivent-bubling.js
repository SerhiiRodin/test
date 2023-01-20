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
