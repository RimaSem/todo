// import "./style.css";

const content = document.querySelector(".content-container");
const formContainer = document.querySelector(".form-container");
const form = document.querySelector("form");
const formTitle = document.querySelector(".form-title");
const addTaskBtn = document.querySelector(".add-btn");
const showFormBtn = document.querySelector(".add-task img");
const closeFormBtn = document.querySelector(".close-form-btn");
const time = new Date().toISOString().slice(0, 10);
const currentTime = new Date(time);

// page navigation
const allTasksBtn = document.querySelector(".tasks-nav ul li:nth-of-type(1)");
const todayBtn = document.querySelector(".tasks-nav ul li:nth-of-type(2)");
const overdueBtn = document.querySelector(".tasks-nav ul li:nth-of-type(3)");
let todayOn = false;
let overdueOn = false;

let taskArray = [];
let currentTask = {};

// task object class
class Task {
  static counter = 1;
  constructor(title, description, list, dueDate = currentTime, priority) {
    this._id = Task.counter++;
    this.title = title;
    this.description = description;
    this.list = list;
    this.dueDate = dueDate;
    this.priority = priority;

    if (!this.dueDate) this.dueDate = time;
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
  new Task("Watch the news", "if there is time", "Other", "2022-09-01", "low")
);

// Create html elements for a task
function createTask(taskObj) {
  const div = document.createElement("div");
  div.classList.add("task");
  div.innerHTML = `<div class="task-info">
    <div class="task-left">
      <input type="checkbox" id="taskCheck" unchecked />
      ${taskObj.title}
    </div>
    <div class="task-right">
    <span>${taskObj.dueDate}</span>
      <img class="priority-color" width="18px" src="../src/img/priority-circle-green.svg" />
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
    ${taskObj.dueDate} <br /><b>Priority:</b> <span>${taskObj.priority}</span> <br /><b>List:</b>
    ${taskObj.list}
  </p>`;

  // Task buttons
  const deleteTaskBtn = div.querySelector(".highlight-del");
  const editTaskBtn = div.querySelector(".highlight-edit");

  // Highlight edit and delete task buttons on hover
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

  // Delete task
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

// display tasks on the page
function displayTasks() {
  content.innerHTML = "";
  let currentArray = [];

  // filter tasks
  if (todayOn) {
    currentArray = taskArray.filter((obj) => obj.dueDate === time);
  } else if (overdueOn) {
    for (let obj of taskArray) {
      let overdueDate = new Date(obj.dueDate);
      if (
        overdueDate.getTime() < currentTime.getTime() ||
        obj.dueDate == "overdue"
      ) {
        currentArray.push(obj);
      }
    }
  } else {
    currentArray = [...taskArray];
  }

  for (let item of currentArray) {
    // Mark overdue tasks
    let objDate = new Date(item.dueDate);
    if (objDate.getTime() < currentTime.getTime()) {
      item.dueDate = "overdue";
    }
    createTask(item);
  }
  // Mark tasks of today
  document.querySelectorAll(".task-right span").forEach((t) => {
    if (t.textContent.trim() === time) {
      t.textContent = "today";
    }
  });
  // Change priority color
  document.querySelectorAll(".task p span").forEach((t) => {
    let priorityImage =
      t.parentElement.parentElement.querySelector(".priority-color");
    if (t.textContent === "high") {
      priorityImage.src = "../src/img/priority-circle-red.svg";
    } else if (t.textContent === "medium") {
      priorityImage.src = "../src/img/priority-circle-orange.svg";
    } else {
      priorityImage.src = "../src/img/priority-circle-green.svg";
    }
  });
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

// flag selected page navigation button
allTasksBtn.addEventListener("click", () => {
  todayOn = false;
  overdueOn = false;
  displayTasks();
});

todayBtn.addEventListener("click", () => {
  todayOn = true;
  overdueOn = false;
  displayTasks();
});

overdueBtn.addEventListener("click", () => {
  todayOn = false;
  overdueOn = true;
  displayTasks();
});
