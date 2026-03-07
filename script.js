const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = () => {

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
themeToggle.innerHTML="☀️";
}else{
themeToggle.innerHTML="🌙";
}

}

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach(el=>{
observer.observe(el);
});
