const express = require("express");
const bodyParser = require("body-parser");
const serveStatic = require("serve-static");

const app = express();

app.use(bodyParser.json());
app.use(serveStatic("public"));

let tasks = [];

app.get("/tasks", (req, res) => {
  try {
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Failed to get all tasks" });
  }
});

app.get("/tasks/:id", (req, res) => {
  try {
    let id = req.params.id;
    let task = tasks.find((task) => task.id == id);
    if (!task) {
      return res.status(404).json({ message: "Failed to get task." });
    }
    res.status(200).json(task);
  } catch (err) {
    console.error(err);
  }
});

app.post("/tasks", (req, res) => {
  try {
    let newTask = {
      id: tasks.length + 1,
      title: req.body.title,
      desc: req.body.desc || "No Description",
      completed: req.body.complated || false,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: "Failed to create new task." });
  }
});

app.put("/tasks/:id", (req, res) => {
  try {
    let id = parseInt(req.params.id);
    let task = tasks.find((task) => task.id == id);
    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }
    task.title = req.body.title || task.title;
    task.desc = req.body.desc || task.desc;
    task.completed = req.body.completed || task.completed;
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Failed to update task." });
  }
});

app.delete("/tasks/:id", (req, res) => {
  try {
    let id = req.params.id;
    let index = tasks.findIndex((task) => task.id == id);
    if (index == -1) {
      return res.status(404).json({ message: "Task not found." });
    }
    tasks.splice(index, 1);
    req.status(204).send();
  } catch (err) {
    res.status(500).json({ message: "Failed to delete task." });
  }
});

app.listen(3000, () => {
  console.log("Server is live at http://localhost:3000/tasks");
});
