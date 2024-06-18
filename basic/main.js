// 0. 기본입출력 
// alert("Hello world!");
// var answer = confirm("공부를 시작하시겠습니까?");
// console.log(answer);
// var name1 = prompt("당신의 이름은?", "홍길동");
// console.log(name1);

// 1. Console 객체 
// console.log("Hello world!");
// console.error("에러가 발생했군요!");
// console.warn("A학점 가능합니다.");
// console.dir(document.body);

// 2. 변수: variable
// var: 같은 이름을 여러번 선언해서 사용할 수 있습니다. 
// let: 한 변수에 여러번 값을 할당할 수 있습니다.
// const: 한번만 할당할 수 있습니다. 

// var x = 10;
// x = 11;
// console.log('x = ', x);

// var x = "Hello";
// console.log('x = ', x);

// let y = 10;
// console.log('y = ', y);
// y = 'Hello';
// console.log('y = ', y);

// const z = 10;

// console.log('z = ', z);

// 3. Data type 변수형 
// let name1 = "John";
// let age = 30;
// let rating = 4.45;
// let isCoolReally = false;
// let x;
// let y = null;

// console.log(typeof y);

// 4. String 문자열 
// const name1 = "John Lennon";
// const age = 33; 
// // console.log('I am ' + name1 + ' and I am ' + age + ' years old.');
// // const sentense = 'I am ' + name1 + ' and I am ' + age + ' years old.';
// // console.log(sentense);
// // console.log(`I am ${name1} and I am ${age} years old.`);

// console.log(name1.length);
// console.log(name1.toUpperCase());
// console.log(name1.toLowerCase());
// console.log(name1.bold());
// console.log(name1.charAt(3));
// console.log(name1.substring(5,11).toUpperCase());

// const topic = 'html5, css3, javascript, bootstrap, ionic';
// console.log(topic);
// console.log(topic.split(', '));

// 5. Array, 배열 

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);
// const numbers1 = [1,2,3,4,5,6,7,8,9];
// console.log(numbers1);

// const fruits = ['apple', 'orange', 'pears', '사과', '딸기'];
// fruits[0] = 'pineapple';
// fruits[5] = '오렌지';
// fruits[6] = '어린쥐';
// fruits.push('망고');
// fruits.push('배');
// fruits.unshift('포도');
// fruits.pop();
// fruits.pop(); 

// console.log(fruits);

// 6. Object 객체 

// const person = {
//   firstName: 'John',
//   lastName: 'Lennon',
//   age: 55,
//   hobbies: ['music', 'movie', 'sports', 'kpop', 'cooking'],
//   address: {
//     street: '2055 main street',
//     city: 'Los Angeles',
//     state: 'CA'
//   }
// }
// person.address.city = 'San Francisco';
// person.email = 'john@gmail.com';

// console.log(person);

// TODO 
// const todos = [
//   {
//     id: 1,
//     text: '과제물 제출',
//     isCompleted: true
//   },
//   {
//     id: 2,
//     text: '점심식사 & 휴식',
//     isCompleted: true
//   },
//   {
//     id: 3,
//     text: '프로젝트 미팅',
//     isCompleted: false
//   },
//   {
//     id: 4,
//     text: 'Shopping',
//     isCompleted: false
//   },
//   {
//     id: 5,
//     text: 'Dinner',
//     isCompleted: false
//   }
// ];
 
// console.log(todos[0].text);

// for(let i=0; i<todos.length; i++) {
//   console.log(todos[i].text);
// }

// for(let a of todos) {
//   console.log(a.text);
// }

// todos.forEach(function(todo) {
//   console.log(todo.text);
// });

// const todoText = todos.map(function(todo) {
//   return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos.filter(function(todo) {
//   return todo.isCompleted === true;
// }).map(function(todo) {
//   return todo.text;
// });
// console.log(todoCompleted);

// 7. Function 함수 

// function addNums(n1=1, n2=2) {
//   return n1 + n2;
// }

// // Arrow function 
// const addNums = n1 => n1 + 5;

// // console.log(addNums(2,3));
// console.log(addNums(7));

// 8. OOP (Object oriented programming) 객체지향프로그래밍 

// 객체생성함수 

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); //  생일 
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
  this.getKoreanFullName = function() {
    return `${this.lastName}${this.firstName}`;
  }
  this.getBirthYear = function() {
    return this.dob.getFullYear();
  }
}

Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}
Person.prototype.getKoreanFullName = function() {
  return `${this.lastName}${this.firstName}`;
}



// Class  
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); 
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getKoreanFullName() {
    return `${this.lastName}${this.firstName}`;
  }
}

const person1 = new Person('John', 'Lennon', '1977-7-7');
const person2 = new Person('병천', '이', '2010-10-7');
const person3 = new Person('현종', '이', '2010-12-6');
console.log(person1);
console.log(person3);
console.log(person1.getFullName());
console.log(person1.getBirthYear());
console.log(person2.getKoreanFullName());