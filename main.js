const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const error = document.querySelector(".error");
const done = document.querySelector(".list");

function AddTask(){
    if (inputBox.value === ''){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".list").style.display = "none";
    }
    else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".list").style.display = "block";
    }
    
    inputBox.value ="";
}
document.addEventListener.error.style.display = "none";
document.addEventListener.done.style.display = "none";
AddTask();