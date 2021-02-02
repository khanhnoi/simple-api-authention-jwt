const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

dotenv.config();
// app.use(bodyParser.json());
app.use(express.json());

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connect to DB")
);

//Import Routes
const authRoute = require("./routes/auth");

//Router middlewares
app.use("/api/user", authRoute);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

//auth
//RAMxQkL2QtLwoyKv
