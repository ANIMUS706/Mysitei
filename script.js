// حالت تاریک/روشن
const toggleButton = document.getElementById("toggle-dark-mode");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "🌞 Light Mode";
  } else {
    toggleButton.textContent = "🌙 Dark Mode";
  }
});

// ترجمه متن‌ها
const translations = {
  fa: {
    name: "محمد جواد میرگلو",
    job: "برنامه‌نویس و توسعه‌دهنده وب",
    about: "درباره من",
    aboutText: "برنامه‌نویسی و ساخت پروژه‌های خلاقانه‌ام",
    projects: "پروژه‌ها",
    project1Title: "پروژه HTML و CSS",
    project1Desc: "یک وبسایت نمونه با HTML و CSS",
    project1Link: "مشاهده",
    project2Title: "پروژه جاوااسکریپت",
    project2Desc: "نمونه پروژه جاوااسکریپت",
    project2Link: "مشاهده",
    blog: "مقالات",
    blogPost1Title: "اولین مقاله من",
    blogPost1Desc: "این یک توضیح نمونه برای مقاله من است"
  },
  en: {
    name: "Mohammad Javad Mirgloo",
    job: "Web Developer",
    about: "About Me",
    aboutText: "I love programming and building creative projects",
    projects: "Projects",
    project1Title: "HTML & CSS Project",
    project1Desc: "A sample website built with HTML & CSS",
    project1Link: "View",
    project2Title: "JavaScript Project",
    project2Desc: "A sample JavaScript project",
    project2Link: "View",
    blog: "Blog",
    blogPost1Title: "My First Blog Post",
    blogPost1Desc: "This is a sample description for my blog post"  
  }
};

// تابع تغییر زبان
function setLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// دکمه‌های تغییر زبان
document.getElementById("btn-fa").addEventListener("click", () => setLanguage("fa"));
document.getElementById("btn-en").addEventListener("click", () => setLanguage("en"));
    
// --- برای منوی موبایل ---
const menuToggle = document.getElementById("menu-toggle");
const navbarUl = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", () => {
  navbarUl.classList.toggle("show");
});


// --- برای پر شدن دایره‌های مهارت ---
document.querySelectorAll(".circle-skill").forEach(circleSkill => {
  const percentElement = circleSkill.querySelector(".percent");
  const circle = circleSkill.querySelector("circle:last-child");

  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;

  // درصد از data-percent خونده میشه
  const percent = percentElement.dataset.percent;
  const offset = circumference - (percent / 100) * circumference;

  circle.style.transition = "stroke-dashoffset 2s ease";
  circle.style.strokeDashoffset = offset;
});
  (function(){
    emailjs.init("v6w6k2XTNlTDZoMIv"); // اینجا Public Key خودتو بذار
  })();

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_gmail01', 'template_0a98zf8', this)
      .then(() => {
        alert("پیام شما با موفقیت ارسال شد ✅");
      }, (error) => {
        alert("خطا در ارسال ❌", error);
      });
  });
window.addEventListener("load", () => {
  const loader = document.getElementById("loading");
  if (loader) {
    loader.style.display = "none";
  }
});
// فعال‌سازی انیمیشن‌ها
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1200, // سرعت انیمیشن (میلی‌ثانیه)
    once: true      // فقط یکبار انیمیشن اجرا بشه
  });
});
