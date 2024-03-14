let data;

// console.log(data);
// console.log(typeof(data));
console.log(data + " is " + typeof(data));

data = 15;
console.log(data + " is " + typeof(data));

data = 22.7;
console.log(data + " is " + typeof(data));

data = "Ahmed Ashraf";
console.log(data + " is " + typeof(data));

data = "0330-2859787";
console.log(data + " is " + typeof(data));

data = true;
console.log(data + " is " + typeof(data));

data = false;
console.log(data + " is " + typeof(data));

data = null;
console.log(data + " is " + typeof(data));

data = ["Ahmed Ashraf",20,true,null];
console.log(data);
console.log(data + " is " + typeof(data));
console.log(data[0] + " is " + typeof(data[0]));
console.log(data[1] + " is " + typeof(data[1]));
console.log(data[2] + " is " + typeof(data[2]));
console.log(data[3] + " is " + typeof(data[3]));

data = {fullname:"Ahmed Ashraf",age:20,isStudent:true,address:null};
console.log(data);
console.log(data + " is " + typeof(data));
console.log(data.fullname + " is " + typeof(data.fullname));
console.log(data.age + " is " + typeof(data.age));
console.log(data.isStudent + " is " + typeof(data.isStudent));
console.log(data.address + " is " + typeof(data.address));

data = [
    {fullname:"Ahmed Ashraf",age:20,isStudent:true,address:null},
    {fullname:"Muhammad Anas",age:20,isStudent:true,address:"DHA"},
    {fullname:"Muzamil Mansoor",age:22,isStudent:true,address:"Malir"},
    {fullname:"Abdullah Shoaib",age:18,isStudent:true,address:"Dhoraji"}
];
console.log(data);

console.log("Dear " + data[0].fullname);
console.log(data[1].fullname);
console.log(data[2].fullname);
console.log(data[3].fullname);