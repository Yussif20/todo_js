const inputBox = document.querySelector("#input-box");
const addButton = document.querySelector(".add-btn");
const tasksContainer = document.querySelector(".tasks");

const createTask = (task)=>{
    let taskEl = `
        <li role="button" class="task">${task}</li>
    `
    return taskEl;
}

const addTaskHandler = ()=>{
    inputBox.value === "" ?
                    window.alert("You must write something!"):
                    tasksContainer.insertAdjacentHTML("afterbegin",createTask(inputBox.value));
    inputBox.value = '';
}

addButton.addEventListener("click",addTaskHandler);