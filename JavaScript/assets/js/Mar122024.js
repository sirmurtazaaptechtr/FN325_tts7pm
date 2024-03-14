let input1 = 15;
let input2 = 5;
console.log(`input1(${input1}) > input2(${input2}) => ${input1 > input2}`);
console.log(`input1(${input1}) >= input2(${input2}) => ${input1 >= input2}`);
console.log(`input1(${input1}) < input2(${input2}) => ${input1 < input2}`);
console.log(`input1(${input1}) <= input2(${input2}) => ${input1 <= input2}`);

input1 = "5";
input2 = 5;
console.log(`input1(${input1}) == input2(${input2}) => ${input1 == input2}`);
console.log(`input1(${input1}) != input2(${input2}) => ${input1 != input2}`);

input1 = "5";
input2 = 5;
console.log(`input1(${input1}) === input2(${input2}) => ${input1 === input2}`);
console.log(`input1(${input1}) !== input2(${input2}) => ${input1 !== input2}`);


//FUNCTIONS 

function myFun () {
    console.log("Hi There!");
}
function greet (name) {
    // console.log(`Welcome ${name}`);
    console.log("Welcome " + name);
}
function squrer (number) {
    return number * number;
}

myFun();
myFun();


greet("Anas");
greet("Muzamil");
greet("Huzaifa");
greet("Abdullah");
greet("Ahmed");

console.log(squrer(5));

let x = squrer(12);
console.log(x);

let num = 16;

let rem = num % 2;

if(rem == 0) {
    console.log(`${num} is Even`);
}else {
    console.log(`${num} is Odd`);
}


let theNum = document.getElementById('num');
let resBox = document.getElementById('resBox');
let goBtn = document.getElementById('goBtn');

goBtn.addEventListener("click",function() {
    let num = Number(theNum.value);
    resBox.innerHTML = `<p id="res">The Square of ${num} is ${num*num}</p>`;       
});