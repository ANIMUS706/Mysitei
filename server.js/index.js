const express = require("express");
const app = express();

const PORT = 5000;

// این خط برای اینکه بتونیم json دریافت و ارسال کنیم
app.use(express.json());

// Route اصلی
app.get("/", (req, res) => {
  res.send("سلام! سرور بک‌اند داره کار می‌کنه 🚀");
});

// ✅ Route جدید برای پروژه‌ها
app.get("/api/projects", (req, res) => {
  const projects = [
    { id: 1, title: "پروژه اول", desc: "این اولین پروژه‌ست" },
    { id: 2, title: "پروژه دوم", desc: "این دومین پروژه‌ست" },
    { id: 3, title: "پروژه سوم", desc: "این سومین پروژه‌ست" }
  ];

  res.json(projects);
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:"+{PORT});
});