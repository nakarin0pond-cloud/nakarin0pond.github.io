const input = document.getElementById("taskInput")
const addBtn = document.getElementById("addTask")
const list = document.getElementById("taskList")

addBtn.onclick = () => {

const text = input.value.trim()

if(text === "") return

const li = document.createElement("li")
li.className = "task"

li.innerHTML = `
<span>${text}</span>
<button class="delete">X</button>
`

li.querySelector(".delete").onclick = () => {
li.remove()
}

list.appendChild(li)

input.value = ""

}


// sidebar toggle

const sb = document.getElementById("sb")
const open = document.getElementById("sbOpen")
const close = document.getElementById("sbClose")

open.onclick = () => {
sb.classList.remove("closed")
}

close.onclick = () => {
sb.classList.add("closed")
}
