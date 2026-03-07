

const roles = [
"Junior Web Developer",
"Backend Developer",
"Java Developer",
"Spring MVC Developer"
]

let i=0
let j=0
let current=""
let deleting=false

function type(){

const element=document.getElementById("typing")

if(i<roles.length){

if(!deleting && j<=roles[i].length){

current=roles[i].substring(0,j++)
element.innerHTML=current

}

if(deleting && j>=0){

current=roles[i].substring(0,j--)
element.innerHTML=current

}

if(j==roles[i].length){

deleting=true
setTimeout(type,1000)
return

}

if(deleting && j==0){

deleting=false
i++

if(i==roles.length){
i=0
}

}

}

setTimeout(type,100)

}

type()



const profile=document.getElementById("profile")

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/30
const y=(window.innerHeight/2-e.pageY)/30

profile.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`

})
