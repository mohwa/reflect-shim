/**
 * Created by mohwa on 2018. 2. 14..
 */


const Reflect = require('reflect-shim');

function func1(a, b, c) {
  this.sum = a + b + c;
}

const args = [1, 2, 3];
const object1 = new func1(...args);

const object2 = Reflect.construct(func1, args);

console.log(object2.sum);
// expected output: 6

console.log(object1.sum);
// expected output: 6


console.log(Reflect.apply(Math.floor, undefined, [1.75]));
// expected output: 1

console.log(Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]));
// expected output: "hello"

console.log(Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index);
// expected output: 4

console.log(Reflect.apply(''.charAt, 'ponies', [3]));
// expected output: "i"