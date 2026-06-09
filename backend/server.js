const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

// Login route
app.post("/login", (req, res) => {
  console.log("Request body:", req.body);

  res.json({
    success: true,
    message: "Login works!",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});