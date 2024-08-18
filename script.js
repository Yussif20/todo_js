const tasks = [];

const inputBox = document.querySelector("#input-box");
const addButton = document.querySelector(".add-btn");
const tasksContainer = document.querySelector(".tasks")

const displayTask = (task)=>{
    let taskEl = `
        <h3>${task}</h3>
    `
    return taskEl;
}

const tasksHandler = (tasks)=>{
    tasks.forEach((task)=>{
        tasksContainer.insertAdjacentHTML("afterend",displayTask(task))
    })
}

const clickHandler = ()=>{
    tasks.push(inputBox.value);
    tasksHandler(tasks);
    inputBox.value = '';
}

addButton.addEventListener("click",clickHandler)