const fullName = document.getElementById('fullName');
const age = document.getElementById('age');
const showBtn = document.getElementById('showBtn');
const d1 = document.getElementById('d1');
const myList = document.getElementById('myList');


showBtn.addEventListener("click",function() {
    let Name = fullName.value;
    let Age = age.value;
    
    myList.innerHTML += `<li>Dear ${Name}, you are ${Age} years old.</li>`;
});