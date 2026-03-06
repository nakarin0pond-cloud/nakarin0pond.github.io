// typing animation

const text = "Junior Web Developer";
let i = 0;

function typing(){

if(i < text.length){

document.querySelector(".typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();



// scroll animation

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

let top = window.scrollY;

let offset = sec.offsetTop - 400;

if(top > offset){

sec.style.opacity = 1;
sec.style.transform = "translateY(0)";

}

})

})


// smooth scroll

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

document.querySelector(link.getAttribute("href"))
.scrollIntoView({behavior:"smooth"})

})

})
