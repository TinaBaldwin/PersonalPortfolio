const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');



hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open")
    nav.classList.toggle('navbar')
});




let data = ['HTML', 'CSS', 'Javascript'];

let list = document.getElementById("skillsList");

data.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    console.log(list);
    list.appendChild(li);
});
