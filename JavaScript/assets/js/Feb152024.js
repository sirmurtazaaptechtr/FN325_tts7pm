window.alert("Hi There");
var ans = window.confirm("Do you wnat to continue?");
window.console.log(ans);
var fullName = window.prompt("Enter Your Full Name");

window.console.log("This is Log");
window.console.warn("This is a warning");
window.console.error("This is an Error");

window.document.getElementById('p1').innerText = "Ye likh do ...";
window.document.getElementById('p1').style.color = 'red';
window.document.getElementsByTagName('h1')[0].style.backgroundColor = 'hotpink';

window.document.getElementById('myHead1').innerText = fullName;

let a = 1;
const x = 0;

a = 2;
// x = 5;

console.log(a);
console.log(x);
window.document.getElementsByTagName('h1')[0].innerText = a;