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
    // وقتی صفحه لود شد
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");

  // گرفتن لیست پروژه‌ها از بک‌اند
  fetch("https://animus706-github-io-3.onrender.com/api/projects")
    .then(res => res.json())
    .then(data => {
      console.log(data);

      // ساخت کارت برای هر پروژه
      data.forEach(project => {
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
