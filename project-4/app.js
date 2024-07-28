const inputtask = document.getElementById("input-task");
const taskform = document.getElementById("task-form");
const taskList = document.getElementById("task-list");


taskform.addEventListener("submit", (e)=>{
     e.preventDefault();
     const tasktitle = inputtask.value;
     console.log(tasktitle);
     if(tasktitle === ""){
        alert("please inter your task")
     }else{


     const listitem = document.createElement("li");
     listitem.innerHTML = tasktitle;
     taskList.append(listitem);
     // create element delete
     let span = document.createElement("span");
     span.innerHTML = `&times;`;
     listitem.appendChild(span)
     inputtask.value = "";
     save_Data()
    }
}) 

taskList.addEventListener("click", (e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
        save_Data()
    }

    if(e.target.tagName == "SPAN"){
        const li = e.target.parentElement;
        li.remove()
        save_Data()
    }
})

const show_data = ()=>{
    taskList.innerHTML = localStorage.getItem("listitem")
}
const save_Data = ()=>{
    localStorage.setItem("listitem", taskList.innerHTML)
}

show_data()