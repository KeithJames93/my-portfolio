// Smooth Scroll for Sidebar Links
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Highlight Active Section in Sidebar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.style.color = "";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#0b6623"; // forest green
    }
  });
});

// Dark Mode Toggle
const toggleButton = document.createElement("button");
toggleButton.innerText = "Toggle Theme";
toggleButton.style.marginTop = "20px";
toggleButton.style.padding = "8px";
toggleButton.style.backgroundColor = "#0b6623";
toggleButton.style.color = "#ffffff";
toggleButton.style.border = "none";
toggleButton.style.cursor = "pointer";
toggleButton.style.width = "100%";

document.querySelector(".sidebar").appendChild(toggleButton);

let darkMode = false;

toggleButton.addEventListener("click", () => {
  darkMode = !darkMode;

  if (darkMode) {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffffff";
  } else {
    document.body.style.backgroundColor = "#f4f4f4";
    document.body.style.color = "#111111";
  }
});
