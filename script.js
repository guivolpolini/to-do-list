const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")
const taskCount = document.getElementById("taskCount")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks))
}

function renderTasks(){

taskList.innerHTML=""

tasks.forEach((task,index)=>{

const li = document.createElement("li")

if(task.completed){
li.classList.add("completed")
}

li.innerHTML = `
<span onclick="toggleTask(${index})">${task.text}</span>
<div>
<button onclick="deleteTask(${index})" class="delete">X</button>
</div>
`

taskList.appendChild(li)

})

taskCount.innerText = `${tasks.length} tarefas`

saveTasks()

}

function addTask(){

if(taskInput.value.trim()==="") return

tasks.push({
text:taskInput.value,
completed:false
})

taskInput.value=""

renderTasks()

}

function toggleTask(index){

tasks[index].completed = !tasks[index].completed

renderTasks()

}

function deleteTask(index){

tasks.splice(index,1)

renderTasks()

}

function clearCompleted(){

tasks = tasks.filter(task => !task.completed)

renderTasks()

}

renderTasks()