const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  const { userId } = req.params;
  const tasks = await Task.find({ userId });
  res.json(tasks);
};

exports.addTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
};
