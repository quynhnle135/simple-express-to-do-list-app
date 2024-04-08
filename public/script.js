const API_URL = "http://localhost:3000/tasks";

let todoForm = document.getElementById("todo-form");
let todoInput = document.getElementById("todo-input");
let todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = todoInput.value.trim();
  if (title) {
    const task = { title };
    await createTask(task);
    todoInput.value = "";
    loadTasks();
  } else {
    alert("Please enter valid task's title.");
  }
});

async function loadTasks() {
  const tasks = await fetchTasks();
  renderTasks(tasks);
}

async function fetchTasks() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

async function renderTasks(tasks) {
  todoList.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    todoList.appendChild(taskElement);
  });
}

function createTaskElement(task) {
  let div = document.createElement("div");
  div.classList.add("todo");
  div.innerHTML = `
    <span class="${task.completed ? "completed" : ""}">${task.title}</span>
    <div>
        <button onclick="toggleCompleted(${task.id})">${
    task.completed ? "Uncomplete" : "Complete"
  }</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
    </div>
    `;
  return div;
}

async function createTask(task) {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
}

async function toggleCompleted(taskID) {
  const task = await getTask(taskID);
  const updatedTask = { ...task, completed: !task.completed };
  await updateTask(updatedTask);
  loadTasks();
}

async function getTask(taskID) {
  const response = await fetch(`${API_URL}/${taskID}`);
  const task = await response.json();
  return task;
}

async function updateTask(task) {
  await fetch(`${API_URL}/${task.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
}

async function deleteTask(taskID) {
  await fetch(`${API_URL}/${taskID}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  loadTasks();
}

loadTasks;
