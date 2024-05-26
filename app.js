const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");
require("dotenv").config();
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD;

const app = express(); //앱을 만들고, 이앱은 익스프레스로부터 온다
app.use(bodyParser.json()); //이앱에 바디팔서(제이슨사용)를 사용한다
app.use(cors());
app.use("/api", indexRouter); // /api주소로 호출이 오면, indexRouter로 가고(index.js로)
const mongoURI = MONGODB_URI_PROD;
mongoose
  .connect(mongoURI, { useNewUrlParser: true }) //몽구스에 몽고url을 연결, useNewUrlParser는 주소를 연결하는 옵션
  .then(() => {
    console.log("mongoose connected");
  }) //연결이 잘되면 mongoose connected 출력
  .catch((err) => {
    console.log("DB connection fail", err);
  }); //연결이 안되면 fail출력하고, err값 출력

app.listen(process.env.PORT || 5000, () => {
  console.log("server on 5000");
}); //포트5000를 주시(상시듣는다)하고, 열리면 server on 출력
