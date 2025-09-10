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
      project1Link: "مشاهده"
    },
    en: {
      name: "Mohammad Javad Mirgloo",
      job: "Web Developer",
      about: "About Me",
      aboutText: "I love programming and building creative projects.",
      projects: "Projects",
      project1Title: "HTML & CSS Project",
      project1Desc: "A sample website built with HTML and CSS",
      project1Link: "View"
    }
  };

  function setLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.getAttribute("data-translate");
      el.innerText = translations[lang][key];
    });
  }
