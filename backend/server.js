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
  const { username, password } = req.body;

  console.log("Received:", username, password);

  // Hardcoded credentials
  if (username === "admin" && password === "123456") {
    return res.status(200).json({
      success: true,
      message: "Login Successful!",
    });
  }

  // Wrong credentials
  return res.status(401).json({
    success: false,
    message: " Invalid Username or Password",
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});