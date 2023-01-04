import "./style.css";
import pencil from "./img/lead-pencil.svg";
import pencilHover from "./img/lead-pencil-hover.svg";
import trash from "./img/trash-can.svg";
import trashHover from "./img/trash-can-hover.svg";
import priorityGreen from "./img/priority-circle-green.svg";

export const content = document.querySelector(".content-container");
export const formContainer = document.querySelector(".form-container");
export const form = document.querySelector("#myForm");
export const formTitle = document.querySelector(".form-title");
export const time = new Date().toISOString().slice(0, 10);
export const currentTime = new Date(time);
export let taskArray = [];
export let currentArray = [];
export let currentTask = {};
export let taskId = 1;

// task object class
export default class Task {
  constructor(
    title,
    description,
    list,
    dueDate = time,
    priority,
    checkbox = "unchecked",
    isOverdue = false
  ) {
    this.id = taskId++;
    this.checkbox = checkbox;
    this.title = title;
    this.description = description;
    this.list = list;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isOverdue = isOverdue;
  }
}

// add sample tasks to the page
export function addSamples() {
  if (!localStorage.getItem("userTasks")) {
    taskArray.push(
      new Task(
        "Walk the dog",
        "Make sure to use the blue leash",
        "Errands",
        "2023-01-01",
        "high"
      )
    );
    taskArray.push(
      new Task(
        "Water the plants",
        "In the kitchen and living room",
        "Chores",
        "2023-01-04",
        "medium"
      )
    );
    taskArray.push(
      new Task(
        "Watch the news",
        "if there is time",
        "Errands",
        "2022-09-01",
        "low"
      )
    );
    localStorage.userTasks = JSON.stringify(taskArray);
  } else {
    taskArray = JSON.parse(localStorage["userTasks"]);
    taskId = taskArray.length + 1;
  }
}

// create html elements for a task
export function createTask(taskObj) {
  if (!taskObj.dueDate) taskObj.dueDate = time;
  const div = document.createElement("div");
  div.classList.add("task");
  div.innerHTML = `<div class="task-info">
    <div class="task-left">
      <input type="checkbox" id="taskCheck" ${taskObj.checkbox}/>
      ${taskObj.title}
    </div>
    <div class="task-right">
    <span>${taskObj.dueDate}</span>
      <img class="priority-color" width="18px" src=${priorityGreen} />
      <img
        class="highlight-edit"
        width="18px"
        src=${pencil}
      />
      <img
        class="highlight-del"
        width="18px"
        src=${trash}
      />
    </div>
  </div>
  <p>
    <b>Details:</b> ${taskObj.description} <br /><b
      >Due Date:</b
    >
    ${taskObj.dueDate} <br /><b>Priority:</b> <span>${taskObj.priority}</span> <br /><b>List:</b>
    ${taskObj.list}
  </p>`;

  // check if task should be displayed as crossed out or not
  if (div.querySelector("#taskCheck").checked) {
    div.querySelector(".task-left").style.textDecoration = "line-through";
    div.querySelector(".task-left").style.color = "#cccccc";
  } else {
    div.querySelector(".task-left").style.textDecoration = "none";
    div.querySelector(".task-left").style.color = "#6c3a00";
  }

  // task buttons
  const deleteTaskBtn = div.querySelector(".highlight-del");
  const editTaskBtn = div.querySelector(".highlight-edit");

  // highlight edit and delete task buttons on hover
  deleteTaskBtn.addEventListener(
    "mouseover",
    (e) => (e.target.src = trashHover)
  );
  deleteTaskBtn.addEventListener("mouseout", (e) => (e.target.src = trash));

  editTaskBtn.addEventListener(
    "mouseover",
    (e) => (e.target.src = pencilHover)
  );
  editTaskBtn.addEventListener("mouseout", (e) => (e.target.src = pencil));

  // cross off task with checkbox
  div.querySelector("#taskCheck").addEventListener("change", (e) => {
    div.querySelector("p").style.display = "none";
    if (taskObj.checkbox == "unchecked") {
      taskObj.checkbox = "checked";
      e.target.checkbox = taskObj.checkbox;
      e.target.parentElement.style.textDecoration = "line-through";
      e.target.parentElement.style.color = "#cccccc";
    } else {
      taskObj.checkbox = "unchecked";
      e.target.checkbox = taskObj.checkbox;
      e.target.parentElement.style.textDecoration = "none";
      e.target.parentElement.style.color = "#6c3a00";
    }
    localStorage.userTasks = JSON.stringify(taskArray);
  });

  // expand task to view more details
  div.addEventListener("click", (e) => {
    let para = div.querySelector("p");
    if (window.getComputedStyle(para).display === "none") {
      para.style.display = "block";
    } else {
      para.style.display = "none";
    }
  });

  // delete task
  deleteTaskBtn.addEventListener("click", () => {
    taskArray = taskArray.filter((item) => item.id != taskObj.id);
    localStorage.userTasks = JSON.stringify(taskArray);
    content.removeChild(div);
  });

  // edit task
  editTaskBtn.addEventListener("click", () => {
    let pr =
      editTaskBtn.parentElement.parentElement.parentElement.querySelector("p");
    pr.style.display = "block";
    // populate form with task data
    form[0].value = taskObj.title;
    form[1].value = taskObj.description;
    form[2].value = taskObj.list;
    form[3].value = taskObj.dueDate;
    form[4].value = taskObj.priority;
    form[5].textContent = "Save";

    // this variable is used when saving the edited task
    currentTask = taskObj;
    // change form title and button
    formTitle.textContent = "Edit Task";
    formContainer.style.display = "block";
    localStorage.userTasks = JSON.stringify(taskArray);
  });

  content.appendChild(div);
}
