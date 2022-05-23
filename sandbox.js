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
