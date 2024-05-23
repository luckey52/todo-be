const express = require("express");
const router = express.Router(); //router는 express의 Router에서 온다
const taskApi = require("./task.api"); //taskApi를 ./task.api주소로부터 갖고온다

router.use("/tasks", taskApi); //라우터는 taskApi를 사용한다(/tasks주소가 불릴때)

module.exports = router;
