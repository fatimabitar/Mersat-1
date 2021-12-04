//Select All links
const allLinks = document.querySelectorAll(".navbar .navbar-nav .nav-item a");

function scroolToSomeWhere(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

scroolToSomeWhere(allLinks);

let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  if (window.pageYOffset > 1000) {
    navbar.classList.add("bg-bluee");
    
  } else {
    navbar.classList.remove("bg-bluee");
  }
};