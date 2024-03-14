let data;
console.log(data);
console.log(typeof(data));


data = null;
console.log(data);
console.log(typeof(data));

data = 15;
console.log(data);
console.log(typeof(data));

data = 1.378;
console.log(data);
console.log(typeof(data));

data = true;
console.log(data);
console.log(typeof(data));

data = false;
console.log(data);
console.log(typeof(data));

data = 'Ali';
console.log(data);
console.log(typeof(data));

data = "Ali";
console.log(data);
console.log("Dear " + data);
console.log(typeof(data));

data = ["Muhammad Anas",20,"male","0330-2853326"];
console.log(data);
console.log(typeof(data));
console.log(data[0]);
console.log(data[3]);

data = {name:"Muhammad Anas",age:20,gender:"male",contact:"0330-2853326",isPTA:false};
console.log(data);
console.log(typeof(data));
console.log(data.name);

data = [
    {name:"Muhammad Anas",age:20,gender:"male",contact:"0330-2853326",isPTA:false},
    {name:"Muzamil Mansoor",age:23,gender:"male",contact:"0317-2551906",isPTA:true},
    {name:"Faizan Ali",age:23,gender:"male",contact:"0315-2922071",isPTA:true},
    {name:"Huzaifa Musani",age:21,gender:"male",contact:"0334-1686224",isPTA:true},
    {name:"Muhammad Ahmed",age:20,gender:"male",contact:"0330-2859787",isPTA:true}
];
console.log(data);
console.log(typeof(data));
console.log(data[3].name);

let num1 = 10;
let num2 = 2;

console.log(num1+num2);
console.log("Result : " + (num1+num2));
console.log(`Result : ${num1+num2}`);

console.log(num1 + " + " + num2 + " = " + (num1+num2));
console.log(`${num1} + ${num2} = ${num1+num2}`);