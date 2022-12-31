// import "./style.css";

const form = document.querySelector(".form-container");

// form open/close buttons
document
  .querySelector(".add-task img")
  .addEventListener("click", () => (form.style.display = "block"));
document
  .querySelector(".close-form-btn")
  .addEventListener("click", () => (form.style.display = "none"));

// highlight edit and delete task buttons on hover
const delTask = document.querySelectorAll(".highlight-del");
delTask.forEach((item) =>
  item.addEventListener(
    "mouseover",
    () => (item.src = "../src/img/trash-can-hover.svg")
  )
);
delTask.forEach((item) =>
  item.addEventListener(
    "mouseout",
    () => (item.src = "../src/img/trash-can.svg")
  )
);

const editTask = document.querySelectorAll(".highlight-edit");
editTask.forEach((item) =>
  item.addEventListener(
    "mouseover",
    () => (item.src = "../src/img/lead-pencil-hover.svg")
  )
);
editTask.forEach((item) =>
  item.addEventListener(
    "mouseout",
    () => (item.src = "../src/img/lead-pencil.svg")
  )
);

// Cross off task with checkbox
document.querySelectorAll("#taskCheck").forEach((item) =>
  item.addEventListener("change", (e) => {
    item.parentElement.parentElement.parentElement.querySelector(
      "p"
    ).style.display = "none";
    if (e.target.checked) {
      e.target.parentElement.style.textDecoration = "line-through";
      e.target.parentElement.style.color = "#cccccc";
    } else {
      e.target.parentElement.style.textDecoration = "none";
      e.target.parentElement.style.color = "#6c3a00";
    }
  })
);

// Expand task to view more details
document.querySelectorAll(".task").forEach((item) =>
  item.addEventListener("click", (e) => {
    let para = item.querySelector("p");
    if (window.getComputedStyle(para).display === "none") {
      para.style.display = "block";
    } else {
      para.style.display = "none";
    }
  })
);

// Delete task
document.querySelectorAll(".highlight-del").forEach((item) =>
  item.addEventListener("click", () => {
    item.parentElement.parentElement.parentElement.remove();
  })
);
