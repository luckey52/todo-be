const express = require("express");
const taskController = require("../controller/task.controller");
const router = express.Router(); //router는 express의 Router에서 온다

router.post("/", taskController.createTask);

router.get("/", taskController.getTask);

router.put("/:id", taskController.updateTask);

router.delete("/:id", taskController.deleteTask);

module.exports = router;
