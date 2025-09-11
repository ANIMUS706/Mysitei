// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// AOS init
AOS.init({ duration: 700, once: true });

// Dark/Light toggle
const toggleBtn = document.getElementById("themeToggle");
const title = document.getElementById("siteTitle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  // rainbow animation
  title.classList.add("rainbow-word");
  setTimeout(() => title.classList.remove("rainbow-word"), 2000);
  // change icon
  toggleBtn.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
});

// Burger menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// EmailJS
(function() {
  emailjs.init("EMAILJS_USER_ID"); // 👈 یوزر آیدی EmailJS رو اینجا بذار
})();
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm("EMAILJS_SERVICE_ID", "EMAILJS_TEMPLATE_ID", this)
    .then(() => alert("ایمیل ارسال شد!"))
    .catch(err => alert("خطا در ارسال: " + JSON.stringify(err)));
});
// Dark/Light toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  toggleBtn.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
});
