
/* ============================
   alfaQubit Dossier — JS Module
   ============================ */

/* Simple console banner */
console.log("%c alfaQubit Dossier Loaded ", "color:#00eaff; font-size:14px;");

/* Smooth scroll for internal links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* Optional: dynamic timestamp footer */
const footer = document.querySelector(".footer");
if (footer) {
  const now = new Date().toLocaleString();
  footer.innerHTML += `<br><span style="color:#333;">Last loaded: ${now}</span>`;
}
