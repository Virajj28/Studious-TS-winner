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