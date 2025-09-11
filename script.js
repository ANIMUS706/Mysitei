// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

// AOS init (اول مطمئن شو فایل aos.js رو قبل از این اضافه کردی)
if (typeof AOS !== "undefined") {
  AOS.init({ duration: 700, once: true });
}

// Dark/Light toggle
const toggleBtn = document.getElementById("themeToggle");
const title = document.getElementById("siteTitle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    if (title) {
      title.classList.add("rainbow-word");
      setTimeout(() => title.classList.remove("rainbow-word"), 2000);
    }

    toggleBtn.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
  });
}

// Burger menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
if (burger && navLinks) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// EmailJS
if (typeof emailjs !== "undefined") {
  (function() {
    emailjs.init("v6w6k2XTNlTDZoMIv");
  })();

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      emailjs.sendForm("service_gmail01", "template_0a98zf8", this)
        .then(() => alert("ایمیل ارسال شد!"))
        .catch(err => alert("خطا در ارسال: " + JSON.stringify(err)));
    });
  }
}
  // دریافت داده‌ها از سرور
  fetch("http://localhost:5000/api/projects")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("project-list");

      data.forEach(project => {
        const div = document.createElement("div");
        div.classList.add("project-card");

        div.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.desc}</p>
        `;

        container.appendChild(div);
      });
    })
    .catch(err => console.error("خطا در دریافت پروژه‌ها:", err));
// وقتی صفحه لود شد
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");

  // گرفتن لیست پروژه‌ها از بک‌اند
  fetch("http://localhost:5000/api/projects")  // اگه روی هاست دیگه هست آدرس رو تغییر بده
    .then(response => response.json())
    .then(projects => {
      projects.forEach(project => {
        // ساخت کارت پروژه
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <img src="${project.image}" alt="${project.title}">
          <h4>${project.title}</h4>
          <p>${project.desc}</p>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("خطا در گرفتن پروژه‌ها:", error);
      container.innerHTML = "<p>خطا در بارگذاری پروژه‌ها</p>";
    });
});
