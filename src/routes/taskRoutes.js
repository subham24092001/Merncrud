const express = require("express");
const router = express.Router();
const Task = require("../model/task");

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.render("index", { tasks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new task
router.post("/create", async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const newTask = await task.save();
    res.redirect("/tasks");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a task
router.post("/:id/update", async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(req.body);
    const task = await Task.findById(_id);
    if (task == null) {
      return res.status(404).json({ message: "Task not found" });
    }
    if (req.body.title != null) {
      task.title = req.body.title;
    }
    if (req.body.description != null) {
      task.description = req.body.description;
    }
    if (req.body.status != null) {
      task.status = req.body.status;
    }
    task.updatedAt = Date.now();
    const updatedTask = await task.save();
    res.redirect(`/tasks?alert=update`)
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a task
router.post("/:id/delete", async (req, res) => {
  try {
    const taskId = req.params.id;

    // Find the task by ID and remove it
    const deletedTask = await Task.findByIdAndDelete(taskId);

    // Check if the task was found and deleted
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    // Redirect to the tasks list 
    res.redirect(`/tasks?alert=delete`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
