var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  //check for empty strings
  if (!taskNameInput || !taskTypeInput) {
    alert("You wish you had nothing to do!");
    return false;
  }

  //pkg data as object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  //send object as an argument to createTaskEl
  createTaskEl(taskDataObj);

  //reset the form
  formEl.reset();
};

var createTaskEl = function(taskDataObj) {
    //create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  //create div for task, give it class, give it content
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);
  
  //add entire enchillada to the list
  tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);
