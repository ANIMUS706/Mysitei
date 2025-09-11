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
