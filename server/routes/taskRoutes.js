const verifyToken = require('../middleware/authMiddleware');
const express = require('express');
const router = express.Router();
const {
  getTasks,
  addTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

router.get('/:userId', getTasks);
router.post('/', addTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);


router.get('/:userId', verifyToken, getTasks);
router.post('/', verifyToken, addTask);
router.put('/:id', verifyToken, updateTask);
router.delete('/:id', verifyToken, deleteTask);

module.exports = router;
