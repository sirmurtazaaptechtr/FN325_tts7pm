//JavaScript Arithmetic
let num1 = 14;
let num2 = 2;

let res = num1 + num2;
console.log(`${num1} + ${num2} = ${res}`);

res = num1 - num2;
console.log(`${num1} - ${num2} = ${res}`);

res = num1 * num2;
console.log(`${num1} x ${num2} = ${res}`);

res = num1 / num2;
console.log(`${num1} / ${num2} = ${res}`);

res = num1 ** num2;
console.log(`${num1} ^ ${num2} = ${res}`);

res = num1 % num2;

console.log(num1);
num1++;
console.log(num1);
num1--;
console.log(num1);
num1 += 2;
console.log(num1);
num1 -= 2;
console.log(num1);
res = 0;

console.log(`${res}, ${num1}`);//(0,14)

res = ++num1 + 5;
console.log(`${res}, ${num1}`);//(20,15)

res = num1++ + 5;
console.log(`${res}, ${num1}`);//(20,16)

res = --num1 + 5;
console.log(`${res}, ${num1}`);//(20,15)

res = num1-- + 5;
console.log(`${res}, ${num1}`);//(20,14)

