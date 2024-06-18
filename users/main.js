// Single Element Selector
// console.log(document);
// var form = document.getElementById('my-form');
// console.log(form);
// var container = document.querySelector('.container');
// console.log(container);
// var myForm = document.querySelector('#my-form');
// console.log(myForm);
// var h1 = document.querySelector('h1');
// console.log(h1);

// Multiple Element Selector 
// var item = document.querySelectorAll('.item')
// console.log(item[0]);
// var item1 = document.getElementsByClassName('item');
// console.log(item1);
// var item2 = document.getElementsByTagName('li');
// console.log(item2);
// item[0].textContent = "Hello world"; 

// item.forEach( (item) => {
//   console.log(item.textContent);
// });

// DOM manipulation 
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'Hello world';
ul.children[1].innerText = 'Byoungcheon Lee';
ul.children[2].innerHTML = '<h2>이병천</h2>';

// Change style 
const btn = document.querySelector('.btn');
// btn.style.background = 'red';
// btn.style.fontSize = '1.5rem';

// Event 

//btn.addEventListener('mouseover', e => {
//  console.log(e.target.className);
//  e.preventDefault();
//  document.getElementById('my-form').style.background = 'yellow';
//});
//btn.addEventListener('mouseout', e => {
//  document.getElementById('my-form').style.background = 'lightgrey';
//});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users'); 

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  //console.log(nameInput.value);
  if(nameInput.value === '' || emailInput.value === '') {
    msg.innerHTML = 'Please enter all fields';
    msg.classList.add('error');
    setTimeout(() => msg.remove(), 2000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
  }
}


