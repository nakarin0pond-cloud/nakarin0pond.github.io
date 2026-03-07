
const texts = [
"Junior Web Developer",
"Backend Developer",
"Java Developer"
]

let i = 0
let j = 0
let current = ""
let isDeleting = false

function type(){

current = texts[i]

if(!isDeleting){

document.getElementById("typing").textContent = current.substring(0,j++)
if(j > current.length){

isDeleting = true
setTimeout(type,1000)
return

}

}else{

document.getElementById("typing").textContent = current.substring(0,j--)
if(j == 0){

isDeleting = false
i = (i+1)%texts.length

}

}

setTimeout(type,100)

}

type()



/* dark mode */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeToggle.innerHTML = "☀️";
    }else{
        themeToggle.innerHTML = "🌙";
    }
});


}
