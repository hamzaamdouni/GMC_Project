const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config();

const app = express();

connectDB();

// app.use(express.static("./userfront/public/uploads"));
app.use(express.json());

app.use("/api/admin", require("./router/admin"));
app.use("/api/agent", require("./router/agent"));
app.use("/api/user", require("./router/user"));
app.use("/api/visiteur", require("./router/visiteur"));

// serve static assets if in production
if (process.env.NODE_ENV == "production") {
  app.use(express.static("userfront/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "userfront", "build", "index.html"));
  });
}

