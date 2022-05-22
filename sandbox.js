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
