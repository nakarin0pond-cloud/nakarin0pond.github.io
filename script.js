const text = [
"Junior Web Developer",
"Java Developer",
"Backend Developer",
"Spring MVC Developer"
]

let i=0
let j=0
let current=""
let isDeleting=false

function type(){

const element=document.querySelector(".typing")

if(i<text.length){

if(!isDeleting && j<=text[i].length){

current=text[i].substring(0,j++)
element.innerHTML=current

}

if(isDeleting && j>=0){

current=text[i].substring(0,j--)
element.innerHTML=current

}

if(j==text[i].length){

isDeleting=true
setTimeout(type,1000)
return

}

if(isDeleting && j==0){

isDeleting=false
i++

if(i==text.length){
i=0
}

}

}

setTimeout(type,80)

}

type()
