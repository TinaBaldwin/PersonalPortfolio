const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');



hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open")
    nav.classList.toggle('navbar')
});


let list = document.getElementById("skillsList");

let data = ['HTML', 'CSS', 'Javascript'];

data.forEach((item)=>{
    let li = document.createElement("li");
    console.log(li);
    li.innerText = item;
    list.appendChild(li);
})
