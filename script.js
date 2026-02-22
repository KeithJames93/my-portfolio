// Smooth Scroll
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");
const indicator = document.querySelector(".nav-indicator");

function updateIndicator(link) {
  indicator.style.top = link.offsetTop + "px";
  indicator.style.height = link.offsetHeight + "px";
}

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    if (link.getAttribute("href") === "#" + current) {
      updateIndicator(link);
    }
  });
});

// Initialize on page load
window.addEventListener("load", () => {
  updateIndicator(navLinks[0]);
});
