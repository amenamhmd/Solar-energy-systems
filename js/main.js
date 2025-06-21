// تفعيل الروابط حسب السحب
const sections = document.querySelectorAll("section,header");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
  let scrollY = window.pageYOffset;
  let currentSectionId = "";

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 120; 
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
    if (
      index === sections.length - 1 &&
      window.innerHeight + scrollY >= document.body.scrollHeight
    ) {
      currentSectionId = section.getAttribute("id");
    }
  });

  if (scrollY < 100) {
    currentSectionId = sections[0].getAttribute("id");
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSectionId) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

// تغيير لون خلفية النافبار عند السحب
const navbar = document.querySelector(".navbar");
const homeSection = document.querySelector("#home");

function toggleNavbarBackground() {
  const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;

  if (window.scrollY >= homeBottom - 150) {
    navbar.classList.remove("navbar-transparent");
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.add("navbar-transparent");
    navbar.classList.remove("bg-dark");
  }
}

window.addEventListener("scroll", toggleNavbarBackground);
window.addEventListener("load", toggleNavbarBackground);

// الأنميشن عند التمرير (Fade In Down)
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInDown");
        entry.target.addEventListener("animationend", () => {
          entry.target.classList.remove("animate__animated", "animate__fadeInDown");
        });
      }
    });
  });

  const elements = document.querySelectorAll(".animate-on-scrolls");
  elements.forEach(el => observer.observe(el));
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    rtl: true,            
    loop: true,       
    margin: 10,
    nav: false,          
    dots: true,           
    autoplay: true,        
    autoplayTimeout: 1500,
    autoplayHoverPause: false,
    responsive:{
      0:{ items: 1 },
      600:{ items: 2 },
      1000:{ items: 3 }
    }
  });
});



