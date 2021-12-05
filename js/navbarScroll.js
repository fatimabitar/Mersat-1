

let navbar = document.querySelector(".navbar");
console.log(navbar);
window.onscroll = () => {
  if (window.pageYOffset > 500) {
    navbar.classList.add("bg-blue");
    
  } else {
    navbar.classList.remove("bg-blue");
  }
};