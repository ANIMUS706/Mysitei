const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// میدل‌ورها
app.use(cors());
app.use(express.json());

// داده نمونه پروژه‌ها
const projects = [
  { id: 1, title: "پروژه ۱", desc: "توضیح کوتاه پروژه ۱", image: "images/project1.jpg" },
  { id: 2, title: "پروژه ۲", desc: "توضیح کوتاه پروژه ۲", image: "images/project2.jpg" },
  { id: 3, title: "پروژه ۳", desc: "توضیح کوتاه پروژه ۳", image: "images/project3.jpg" }
];

// روت API
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// اجرا
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

