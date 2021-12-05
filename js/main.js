// Gsap
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".products",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    smoothChildTiming: true,
  },
  duration: 2,
});


//Services
gsap.from(".services", 2, {
  scrollTrigger: ".services",
  opacity: 0,
  y: -200,
  ease: Power3.ease,
});

//4 Box in row
gsap.from(".box-1", 2, {
  scrollTrigger: ".divs-grid",
  opacity: 0,
  x: -100,
});
gsap.from(".box-2", 2, {
  scrollTrigger: ".divs-grid",
  opacity: 0,
  x: -200,
});
gsap.from(".box-3", 2, {
  scrollTrigger: ".divs-grid",
  opacity: 0,
  x: 100,
});
gsap.from(".box-4", 2, {
  scrollTrigger: ".divs-grid",
  opacity: 0,
  x: 200,
});

gsap.from(".stagger", {
  scrollTrigger: ".grid",
  opacity: 0,
  x: -200,
  stagger: 0,
  ease: "ease",
  duration: 1.5,
});
gsap.from(".stagger2", {
  scrollTrigger: ".grid",
  opacity: 0,
  x: 200,
  stagger: 0,
  ease: "ease",
  duration: 1.5,
});

//Background Circle
gsap.from(".hero", 2, {
  scrollTrigger: "header",
  opacity: 0,
  scale: 0.2,
});
gsap.from(".content", 1.5, {
  scrollTrigger: "header",
  y: 200,
  opacity: 0,
  ease: Power3.ease,
});


//Carousel
gsap.from(".carousel", 2, {
  scrollTrigger: ".carousel",
  opacity: 0,
  x: 200,
  ease: Power3.ease,
});

//Parallax Images
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger ",
    start: "top top",
    end: "bottom bottom",
    scrub: 5,
  },
});
tl1.to(".column", 1, {
  ease: "ease",
  y: 300,
  rotation: 7,
});



var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);