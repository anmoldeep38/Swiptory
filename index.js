const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");
const app = express();

// Import routes
const connectDB = require("./config/connectDB");
const userRoutes = require("./routes/userRoutes");
const storyRoutes = require("./routes/storyRoutes.js");

dotenv.config();

// Connect to Database
connectDB();

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parsing middleware
app.use(cookieParser());

const corsOptions = {
  credentials: true,
  origin: "*",
};
app.use(cors(corsOptions));

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Swiptory web app</h1>");
});

app.get("/api/health", (req, res) => {
  console.log("hey health");
  res.json({
    service: "Swiptory server",
    status: "active",
    time: new Date(),
  });
});

app.use("/api/user", userRoutes);
app.use("/api/story", storyRoutes);

app.post("/api/v1/hi", (req, res) => {
  res.json({ message: "hi" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
