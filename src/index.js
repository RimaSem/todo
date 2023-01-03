// import "./style.css";

const nav = document.querySelector("nav");
const main = document.querySelector("main");
const content = document.querySelector(".content-container");
const formContainer = document.querySelector(".form-container");
const form = document.querySelector("#myForm");
const formTitle = document.querySelector(".form-title");
const addTaskBtn = document.querySelector(".add-btn");
const showFormBtn = document.querySelector(".add-task");
const closeFormBtn = document.querySelector(".close-form-btn");

const newListBtn = document.querySelector(".new-list-btn");
const newListFormContainer = document.querySelector(".new-list-form");
const newListForm = document.querySelector(".new-list-form form");
const addListBtn = document.querySelector(
  ".btn-container button:nth-of-type(1)"
);

const closeListBtn = document.querySelector(
  ".btn-container button:nth-of-type(2)"
);
const time = new Date().toISOString().slice(0, 10);
const currentTime = new Date(time);

// page navigation
const allTasksBtn = document.querySelector(".tasks-nav ul li:nth-of-type(1)");
const todayBtn = document.querySelector(".tasks-nav ul li:nth-of-type(2)");
const overdueBtn = document.querySelector(".tasks-nav ul li:nth-of-type(3)");
let allTasksOn = true;
let todayOn = false;
let overdueOn = false;

let taskArray = [];
let currentArray = [];
let currentTask = {};

// task object class
class Task {
  static counter = 1;
  constructor(
    title,
    description,
    list,
    dueDate = currentTime,
    priority,
    checkbox = "unchecked",
    isOverdue = false
  ) {
    this._id = Task.counter++;
    this.checkbox = checkbox;
    this.title = title;
    this.description = description;
    this.list = list;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isOverdue = isOverdue;

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
  new Task("Watch the news", "if there is time", "Errands", "2022-09-01", "low")
);

// create html elements for a task
function createTask(taskObj) {
  const div = document.createElement("div");
  div.classList.add("task");
  div.innerHTML = `<div class="task-info">
    <div class="task-left">
      <input type="checkbox" id="taskCheck" ${taskObj.checkbox}/>
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

  // cross off task with checkbox
  div.querySelector("#taskCheck").addEventListener("change", (e) => {
    div.querySelector("p").style.display = "none";
    if (taskObj.checkbox == "unchecked") {
      taskObj.checkbox = "checked";
      console.log(e.target.checkbox);
      e.target.checkbox = taskObj.checkbox;
      e.target.parentElement.style.textDecoration = "line-through";
      e.target.parentElement.style.color = "#cccccc";
    } else {
      taskObj.checkbox = "unchecked";
      e.target.checkbox = taskObj.checkbox;
      console.log(e.target.checkbox);
      e.target.parentElement.style.textDecoration = "none";
      e.target.parentElement.style.color = "#6c3a00";
    }
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
    taskObj.removeTask();
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
  });

  content.appendChild(div);
}

// display tasks on the page
function displayTasks() {
  content.innerHTML = "";

  // filter tasks by date
  if (todayOn) {
    currentArray = taskArray.filter((obj) => obj.dueDate === time);
  } else if (overdueOn) {
    currentArray = taskArray.filter((obj) => obj.isOverdue);
  } else if (allTasksOn) {
    currentArray = [...taskArray];
  }

  for (let item of currentArray) {
    // mark overdue tasks
    let objDate = new Date(item.dueDate);
    if (objDate.getTime() < currentTime.getTime()) {
      item.isOverdue = true;
    }

    createTask(item);
  }

  // mark tasks of today
  document.querySelectorAll(".task-right span").forEach((t) => {
    let taskDate = new Date(t.textContent.trim());
    if (t.textContent.trim() === time) {
      t.textContent = "today";
    } else if (taskDate.getTime() < currentTime.getTime()) {
      t.textContent = "overdue";
    }
  });

  // change priority color
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

  // filter tasks by list
  const listBtns = document.querySelectorAll(".projects-nav ul li .list");
  listBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      allTasksOn = false;
      todayOn = false;
      overdueOn = false;
      currentArray = taskArray.filter((obj) => obj.list === btn.textContent);
      displayTasks();
    })
  );
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

    let objDate = new Date(taskArray[index].dueDate);

    if (objDate.getTime() < currentTime.getTime()) {
      taskArray[index].isOverdue = true;
    } else {
      taskArray[index].isOverdue = false;
    }

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
  allTasksOn = true;
  todayOn = false;
  overdueOn = false;
  displayTasks();
});

todayBtn.addEventListener("click", () => {
  allTasksOn = false;
  todayOn = true;
  overdueOn = false;
  displayTasks();
});

overdueBtn.addEventListener("click", () => {
  allTasksOn = false;
  todayOn = false;
  overdueOn = true;
  displayTasks();
});

// event listeners for adding new list
newListBtn.addEventListener(
  "click",
  () => (newListFormContainer.style.display = "block")
);

closeListBtn.addEventListener(
  "click",
  () => (newListFormContainer.style.display = "none")
);

addListBtn.addEventListener("click", (e) => {
  if (newListForm.checkValidity()) {
    e.preventDefault();
    const input = newListForm.querySelector("input");
    const div1 = document.createElement("div");
    div1.innerHTML = `<li><span class="del">X</span>&nbsp;&nbsp;<span class="list">${input.value}</span></li>`;
    document.querySelector(".projects-nav ul").append(div1);

    const option = document.createElement("option");
    option.value = `${input.value}`;
    option.textContent = `${input.value}`;
    // div2.innerHTML = `<option value=${input.value}>${input.value}</option>`;
    document.querySelector("#list").append(option);
    deleteListEvent();

    newListForm.reset();
    newListFormContainer.style.display = "none";
    displayTasks();
  }
});

// delete list of tasks
function deleteListEvent() {
  document.querySelectorAll(".del").forEach((elem) =>
    elem.addEventListener("click", (e) => {
      taskArray = taskArray.filter(
        (obj) =>
          obj.list !== e.target.parentElement.querySelector(".list").textContent
      );
      document.querySelectorAll("#list option").forEach((elem) => {
        if (
          elem.value ===
          e.target.parentElement.querySelector(".list").textContent
        ) {
          elem.remove();
        }
      });
      e.target.parentElement.remove();
      displayTasks();
    })
  );
}

deleteListEvent();

// mobile device menu
document.querySelector("#dispSidebar").addEventListener("click", (e) => {
  if (nav.style.display == "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
});

function onResize() {
  if (window.innerWidth > 620) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}

window.onresize = onResize;
