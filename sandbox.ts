const character = 'Captain America';

console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
});


//Types:Basics
const circle = (diameter: number) => {
    return diameter*Math.PI;
}
console.log(circle(4.5));


// Arrys & Objs

let str = ['Hello', 'World'];
str.push('!');
// str.push(2); Not valid ts denial only strings

let num = [1, 2, 3];
num.push(4);
// num.push('5'); Not valid ts denial only numbers

let mixed = ['Hello', 1, 'World', 2, 3];
mixed.push(4);
mixed.push('TS Acceptance');


let ninja = {
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
    age: 40,
    // skills: ['running'],
  };