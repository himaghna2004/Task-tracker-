const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const {
  getTasks,
  addTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

router.get('/:userId', verifyToken, getTasks);
router.post('/', verifyToken, addTask);
router.put('/:id', verifyToken, updateTask);
router.delete('/:id', verifyToken, deleteTask);

module.exports = router;
