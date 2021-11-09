const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config();

const app = express();

connectDB();

app.use(express.json());

app.use("/api/admin", require("./router/admin"));
app.use("/api/agent", require("./router/agent"));
app.use("/api/user", require("./router/user"));
app.use("/api/visiteur", require("./router/visiteur"));

const PORT = process.env.PORT;
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running in PORT : ${PORT}`);
});
