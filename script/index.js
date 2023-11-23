const header = document.querySelector("header");
const headerContainer = document.querySelector("header .container");
const mobileNav = document.querySelector(".mobile-nav");
const menuBtn = document.querySelector(".menu-btn");
const stats = document.querySelectorAll(".stat");
const milestones = document.querySelectorAll(".milestone");
const partners = document.querySelectorAll(".partners .flex-item img");

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

gsap.from(".hero .text h2", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  delay: 0.4,
  scrollTrigger: {
    trigger: "#myElement",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none none",
  },
});

gsap.from(".hero .text h1", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  delay: 0.6,

  scrollTrigger: {
    trigger: "#myElement",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none none",
  },
});

gsap.from(".hero .text p", {
  opacity: 0,
  y: 50,
  duration: 0.7,
  delay: 0.8,
  scrollTrigger: {
    trigger: "#myElement",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none none",
  },
});

gsap.from(".hero .images img:first-child", {
  delay: 0.6,
  scale: 0.5,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".hero .images",
    start: "top 90%",
    end: "top 30%",
    toggleActions: "play none none none",
  },
});

gsap.from(".hero .images img:nth-child(2)", {
  delay: 0.6,
  scale: 0.5,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".hero .images",
    start: "top 90%",
    end: "top 30%",
    toggleActions: "play none none none",
  },
});

gsap.from(".hero .images img:nth-child(3)", {
  delay: 0.6,
  scale: 0.5,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".hero .images",
    start: "top 90%",
    end: "top 30%",
    toggleActions: "play none none none",
  },
});

let statDelay = 0;
stats.forEach((stat) => {
  gsap.from(stat, {
    opacity: 0,
    scale: 0.8,
    duration: 0.2,
    delay: statDelay,
    scrollTrigger: {
      trigger: stat,
      start: "top 80%",
      end: "top 30%",
      toggleActions: "play none none none",
    },
  });
  statDelay += 0.15;
});

gsap.from("section.about .image", {
  scale: 0.9,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "section.about .image",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none none",
  },
});

gsap.from("section.mission .image", {
  scale: 0.9,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "section.mission .image",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none none",
  },
});

milestones.forEach((milestone) => {
  gsap.from(milestone, {
    scale: 0.9,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: milestone,
      start: "top 80%",
      end: "top 30%",
      toggleActions: "play none none none",
    },
  });
});

partners.forEach((partner) => {
  gsap.from(partner, {
    y: 80,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: partner,
      start: "top 90%",
      end: "top 30%",
      toggleActions: "play none none none",
    },
  });
});

gsap.from(".review-articles", {
  y: 70,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".review-articles",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none none",
  },
});

gsap.from("footer .download-app", {
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "footer .download-app",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none none",
  },
});

gsap.from("footer .nav-section", {
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: "footer .nav-section",
    start: "top 80%",
    end: "top 30%",
    toggleActions: "play none none none",
  },
});

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    gsap.to(headerContainer, {
      delay: 0.2,
      top: -headerContainer.clientHeight,
      duration: 0.5,
    });
  } else {
    gsap.to(headerContainer, { delay: 0.2, top: "0px", duration: 0.5 });
  }
  lastScroll = currentScroll;
});
