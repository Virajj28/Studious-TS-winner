var character = 'Captain America';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
//Types:Basics
var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle(4.5));
// Arrys & Objs
var str = ['Hello', 'World'];
str.push('!');
// str.push(2); Not valid ts denial only strings
var num = [1, 2, 3];
num.push(4);
// num.push('5'); Not valid ts denial only numbers
var mixed = ['Hello', 1, 'World', 2, 3];
mixed.push(4);
mixed.push('TS Acceptance');
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};


// Lesson 10
// let greet: Function;

// example 1
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}


