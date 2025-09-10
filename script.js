const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "☀️ Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "🌙 Dark Mode";
  }
});

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️ Light Mode";
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
  }
});
  const translations = {
  fa: {
    name: "محمد جواد میرگلو",
    job: "برنامه‌نویس و توسعه‌دهنده وب",
    about: "درباره من",
    aboutText: "عاشق برنامه‌نویسی و ساخت پروژه‌های خلاقانه‌ام.",
    projects: "پروژه‌ها",
    project1Title: "پروژه HTML و CSS",
    project1Desc: "یک وبسایت نمونه با HTML و CSS",
    project1Link: "مشاهده",
    project2Title: "پروژه جاوااسکریپت",
    project2Desc: "نمونه پروژه جاوااسکریپت",
    project2Link: "مشاهده",
    blog: "مقالات",
    blogPost1Title: "اولین مقاله من",
    blogPost1Desc: "این مقاله درباره تجربه‌های من در یادگیری برنامه‌نویسی است."
  },
  en: {
    name: "Mohammad Javad Mirgloo",
    job: "Web Developer",
    about: "About Me",
    aboutText: "I love programming and building creative projects.",
    projects: "Projects",
    project1Title: "HTML & CSS Project",
    project1Desc: "A sample website built with HTML and CSS",
    project1Link: "View",
    project2Title: "JavaScript Project",
    project2Desc: "A sample JavaScript project",
    project2Link: "View",
    blog: "Blog
