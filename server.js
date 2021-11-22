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
if (process.env.NODE_ENV === "production") {
  app.use(express.static("userfront/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "userfront", "build", "index.html"));
  });
} 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.get('*', (req, res) => {
  request(
    { url: 'https://taktak-service.herokuapp.com/' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});


  const PORT = process.env.PORT;
  app.listen(PORT, (error) => {
    error
      ? console.log(error)
      : console.log(`server is running in PORT : ${PORT}`);
  });
