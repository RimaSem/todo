import mobileMenu from "./img/mobile-menu.svg";
import headerIcon from "./img/clipboard-text-outline.svg";
import addtaskIcon from "./img/plus-thick.svg";
import allTasksIcon from "./img/all-tasks.svg";
import todayTasksIcon from "./img/today-clock.svg";
import overdueTasksIcon from "./img/alert-circle.svg";
import favicon from "./img/favicon.ico";

export default function renderStructure() {
  const faviLink = document.createElement("link");
  faviLink.rel = "icon";
  faviLink.type = "image/x-icon";
  faviLink.href = favicon;
  document.querySelector("head").appendChild(faviLink);

  const forMobile = document.createElement("div");
  forMobile.id = "forMobile";
  forMobile.innerHTML = `<img id="dispSidebar" class="icon" src=${mobileMenu}
    alt="menu icon"/><p>To-Do</p>`;

  const pageContainer = document.createElement("div");
  pageContainer.classList.add("container");
  pageContainer.innerHTML = `<nav>
  <div class="icon">
    <img
      src=${headerIcon}
      alt="To-do header icon"
    />
    <h1>To-Do</h1>
    </div>
    <div class="add-task">
    <img src=${addtaskIcon} alt="add task button" />
    </div>
    <div class="tasks-nav">
    <ul>
      <li><img src=${allTasksIcon} /> All Tasks</li>
      <li><img src=${todayTasksIcon} /> Today</li>
      <li><img src=${overdueTasksIcon} /> Overdue</li>
    </ul>
    </div>
    <div class="projects-nav">
    <ul></ul>

    <div class="new-list-btn">+ new list</div>
    </div>
    </nav>
    <main>
    <div class="content-container"></div>
    <div class="new-list-form">
    <form action="post">
      <input
        type="text"
        id="list-input"
        name="listInput"
        placeholder="List title"
        minlength="1"
        maxlength="10"
      />
      <div class="btn-container">
        <button type="button">Add list</button
        ><button type="reset">Cancel</button>
      </div>
    </form>
    </div>
    <div class="form-container">
    <div class="form-header">
      <div class="form-title">Add a new task</div>
      <div class="close-form-btn">X</div>
    </div>
    <form action="#" method="post" id="myForm">
      <label for="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        maxlength="50"
      />
      <label for="description">Description:</label>
      <textarea
        id="description"
        name="description"
        rows="6"
        cols="35"
      ></textarea>
      <label for="list">List:</label>
      <select id="list" name="list"></select>
      <label for="dueDate">Due date:</label>
      <input type="date" id="dueDate" name="dueDate" />
      <label for="priority">Priority:</label>
      <select id="priority" name="priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="button" class="add-btn">Add</button>
    </form>
  </div>
  </main>`;

  document.querySelector("body").appendChild(forMobile);
  document.querySelector("body").appendChild(pageContainer);
}
