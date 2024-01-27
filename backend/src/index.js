const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const connection = require("./db/connection");

const userRouter = require("./routes/user.route");
const authRouter = require("./routes/auth.route");
app.use(express.json());

app.use(userRouter);
app.use(authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

connection();
