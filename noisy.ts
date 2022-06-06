//Dynamic Any Types
let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);

// let mixed: any[] = [];

// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed);

// let ninja: { name: any, age: any };

// ninja = { name: 'yoshi', age: 25 };
// console.log(ninja);

// ninja = { name: 25, age: 'yoshi' };
// console.log(ninja);


//// Type alias
// let greet: Function = () => {
//   console.log('hello, world');
// }

// greet = 'hello';

// greet = () => {
//   console.log('hello, again');
// }

const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
  }
  
  add(5, 10, 'ninja');
  
  const minus = (a: number, b: number): number => {
    return a + b;
  }
  
  let result = minus(10,7);
  console.log(result);