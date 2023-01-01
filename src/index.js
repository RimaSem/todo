// import "./style.css";

const content = document.querySelector(".content-container");
const formContainer = document.querySelector(".form-container");
const form = document.querySelector("form");
const formTitle = document.querySelector(".form-title");
const addTaskBtn = document.querySelector(".add-btn");
const showFormBtn = document.querySelector(".add-task img");
const closeFormBtn = document.querySelector(".close-form-btn");

let taskArray = [];
let currentTask = {};

// task object class
class Task {
  static counter = 1;
  constructor(title, description, list, dueDate, priority) {
    this._id = Task.counter++;
    this.title = title;
    this.description = description;
    this.list = list;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getId() {
    return this._id;
  }

  removeTask() {
    taskArray = taskArray.filter((i) => i.getId() !== this.getId());
    return taskArray;
  }
}

// add sample tasks to the page
taskArray.push(
  new Task("Walk the dog", "something something", "chores", "today", "low")
);
taskArray.push(
  new Task("Walk the dog", "something something", "chores", "today", "low")
);
taskArray.push(
  new Task("Walk the dog", "something something", "chores", "today", "low")
);

// create html elements for a task
function createTask(taskObj) {
  const div = document.createElement("div");
  div.classList.add("task");
  div.innerHTML = `<div class="task-info">
    <div class="task-left">
      <input type="checkbox" id="taskCheck" unchecked />
      ${taskObj.title}
    </div>
    <div class="task-right">
    ${taskObj.dueDate}
      <img width="18px" src="../src/img/priority-circle-green.svg" />
      <img
        class="highlight-edit"
        width="18px"
        src="../src/img/lead-pencil.svg"
      />
      <img
        class="highlight-del"
        width="18px"
        src="../src/img/trash-can.svg"
      />
    </div>
  </div>
  <p>
    <b>Details:</b> ${taskObj.description} <br /><b
      >Due Date:</b
    >
    2022-02-26 <br /><b>Priority:</b> ${taskObj.priority} <br /><b>List:</b>
    ${taskObj.list}
  </p>`;

  // task buttons
  const deleteTaskBtn = div.querySelector(".highlight-del");
  const editTaskBtn = div.querySelector(".highlight-edit");

  // highlight edit and delete task buttons on hover
  deleteTaskBtn.addEventListener(
    "mouseover",
    (e) => (e.target.src = "../src/img/trash-can-hover.svg")
  );
  deleteTaskBtn.addEventListener(
    "mouseout",
    (e) => (e.target.src = "../src/img/trash-can.svg")
  );

  editTaskBtn.addEventListener(
    "mouseover",
    (e) => (e.target.src = "../src/img/lead-pencil-hover.svg")
  );
  editTaskBtn.addEventListener(
    "mouseout",
    (e) => (e.target.src = "../src/img/lead-pencil.svg")
  );

  // Cross off task with checkbox
  div.querySelector("#taskCheck").addEventListener("change", (e) => {
    div.querySelector("p").style.display = "none";
    if (e.target.checked) {
      e.target.parentElement.style.textDecoration = "line-through";
      e.target.parentElement.style.color = "#cccccc";
    } else {
      e.target.parentElement.style.textDecoration = "none";
      e.target.parentElement.style.color = "#6c3a00";
    }
  });

  // Expand task to view more details
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
    taskObj.removeTask();
    content.removeChild(div);
  });

  // edit task
  editTaskBtn.addEventListener("click", () => {
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
  });

  content.appendChild(div);
}

// display created tasks on the page
function displayTasks() {
  content.innerHTML = "";
  for (let item of taskArray) {
    createTask(item);
  }
}

displayTasks();

addTaskBtn.addEventListener("click", (e) => {
  if (e.target.innerText === "Add" && form.checkValidity()) {
    const newTask = new Task(
      form[0].value,
      form[1].value,
      form[2].value,
      form[3].value,
      form[4].value
    );
    taskArray.push(newTask);
    form.reset();
    formContainer.style.display = "none";
    // re-build page
    displayTasks();
  } else if (e.target.innerText === "Save" && form.checkValidity()) {
    // find index of the task currently being edited
    const index = taskArray.indexOf(currentTask);
    taskArray[index].title = form[0].value;
    taskArray[index].description = form[1].value;
    taskArray[index].list = form[2].value;
    taskArray[index].dueDate = form[3].value;
    taskArray[index].priority = form[4].value;
    // re-build page
    form.reset();
    formContainer.style.display = "none";
    displayTasks();
  }
});

// show form
showFormBtn.addEventListener("click", () => {
  form.reset();
  form[5].textContent = "Add";
  formTitle.textContent = "Add a new task";
  formContainer.style.display = "block";
});

// close form
closeFormBtn.addEventListener("click", () => {
  formContainer.style.display = "none";
  form.reset();
});
