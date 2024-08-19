const inputBox = document.querySelector("#input-box");
const addButton = document.querySelector(".add-btn");
const tasksContainer = document.querySelector(".tasks");

const createTask = (task)=>{
    let taskEl = `
        <li role="button" class="task">${task}<span>\u00d7</span></li>
    `
    return taskEl;
}

const addTaskHandler = ()=>{
    inputBox.value === "" ?
                    window.alert("You must write something!"):
                    tasksContainer.insertAdjacentHTML("afterbegin",createTask(inputBox.value));
    inputBox.value = '';
    saveData();
}

addButton.addEventListener("click",addTaskHandler);
window.addEventListener("keypress",(e)=>{
    e.code === "Enter" && addButton.click();
})


tasksContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked") ;
        saveData();
    } 
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove() ;
        saveData();
    }
})

const saveData = ()=>{
    localStorage.setItem("data",tasksContainer.innerHTML)
}
const showData = ()=>{
     tasksContainer.innerHTML = localStorage.getItem("data");
}
showData();