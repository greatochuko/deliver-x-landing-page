const header = document.querySelector("header");
const mobileNav = document.querySelector(".mobile-nav");
const menuBtn = document.querySelector(".menu-btn");

gsap.to(header, {
  duration: 0.5,
  transform: "translateY(0%)",
});

function toggleOpenMobileNav() {
  setTimeout(() => {
    mobileNav.classList.toggle("show");
    menuBtn.classList.toggle("show");
  }, 200);
}
