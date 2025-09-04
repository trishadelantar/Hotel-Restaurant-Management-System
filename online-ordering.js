const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const menuTabs = document.querySelector(".menu-tabs");

leftBtn.addEventListener("click", () => {
  menuTabs.scrollBy({ left: -200, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  menuTabs.scrollBy({ left: 200, behavior: "smooth" });
});

const navItems = document.querySelectorAll(".menu-tabs span");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    const targetId = item.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// default: best seller active
document.querySelector('[data-target="best-sellers"]').classList.add("active");

// click navigation
navItems.forEach(item => {
  item.addEventListener("click", () => {
    const targetId = item.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    navItems.forEach(nav => nav.classList.remove("active"));
    item.classList.add("active");
  });
});

// highlight based on scroll position
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navItems.forEach(nav => {
        nav.classList.remove("active");
        if (nav.getAttribute("data-target") === id) {
          nav.classList.add("active");
        }
      });
    }
  });
}, observerOptions);

document.querySelectorAll("main > .left-side.menu > .scrollable-menu > div").forEach(section => {
  observer.observe(section);
});
