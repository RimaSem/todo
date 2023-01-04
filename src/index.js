import "./style.css";
import Task, {
  content,
  formContainer,
  form,
  formTitle,
  time,
  currentTime,
  taskArray,
  currentArray,
  currentTask,
  addSamples,
  createTask,
} from "./task";
import priorityGreen from "./img/priority-circle-green.svg";
import priorityOrange from "./img/priority-circle-orange.svg";
import priorityRed from "./img/priority-circle-red.svg";

const nav = document.querySelector("nav");
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

// page navigation
const allTasksBtn = document.querySelector(".tasks-nav ul li:nth-of-type(1)");
const todayBtn = document.querySelector(".tasks-nav ul li:nth-of-type(2)");
const overdueBtn = document.querySelector(".tasks-nav ul li:nth-of-type(3)");
let allTasksOn = true;
let todayOn = false;
let overdueOn = false;
let listArray = ["Errands", "Fitness", "Work", "School"];

// save or retrieve data to/from localStorage
if (!localStorage.getItem("localListArray")) {
  localStorage.localListArray = JSON.stringify(listArray);
  console.log(localStorage.localListArray);
} else {
  listArray = JSON.parse(localStorage["localListArray"]);
  console.log(listArray);
}

// add sample tasks to the page
// localStorage.clear();
addSamples();

// display tasks on the page
function displayTasks() {
  // display lists
  document.querySelector(".projects-nav ul").innerHTML =
    '<li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="list">Chores</span></li>';
  for (let item of listArray) {
    const div = document.createElement("div");
    div.innerHTML = `<li><span class="del">X</span>&nbsp;&nbsp;<span class="list">${item}</span></li>`;
    document.querySelector(".projects-nav ul").append(div);
  }

  deleteListEvent();

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
      priorityImage.src = priorityRed;
    } else if (t.textContent === "medium") {
      priorityImage.src = priorityOrange;
    } else {
      priorityImage.src = priorityGreen;
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
  localStorage.userTasks = JSON.stringify(taskArray);
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
    localStorage.userTasks = JSON.stringify(taskArray);
    form.reset();
    formContainer.style.display = "none";
    // re-build page
    allTasksOn = false;
    todayOn = false;
    overdueOn = false;
    currentArray = [...taskArray];
    if (window.innerWidth < 650) {
      nav.style.display = "none";
    }
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
    localStorage.userTasks = JSON.stringify(taskArray);
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
  if (newListForm[0].value) {
    const input = newListForm.querySelector("input");
    // const li = document.createElement("li");
    // li.innerHTML = `<span class="del">X</span>&nbsp;&nbsp;<span class="list">${input.value}</span>`;
    // document.querySelector(".projects-nav ul").append(li);
    listArray.push(newListForm[0].value);
    localStorage.localListArray = JSON.stringify(listArray);

    const option = document.createElement("option");
    option.value = `${input.value}`;
    option.textContent = `${input.value}`;
    document.querySelector("#list").append(option);
    // deleteListEvent();

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
      listArray = listArray.filter(
        (item) =>
          item !== e.target.parentElement.querySelector(".list").textContent
      );
      localStorage.userTasks = JSON.stringify(taskArray);
      localStorage.localListArray = JSON.stringify(listArray);
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
  if (window.innerWidth > 650) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}

window.onresize = onResize;

// localStorage.clear();
