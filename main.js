//hamburger //

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');



hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open")
    nav.classList.toggle('navbar')
});


// Array for skills list //

let data = ['HTML', 'CSS', 'Javascript'];

let list = document.getElementById("skillsList");

data.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    console.log(list);
    list.appendChild(li);
});

// Accordion for h2 sections of page //

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
     this.classList.toggle("active");

    var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
    });
}
