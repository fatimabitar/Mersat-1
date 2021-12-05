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
gsap.from(".m-grid", 1.5, {
  scrollTrigger: "m-grid",
  y: 200,
  opacity: 0,
  ease: Power3.ease,
});

//Services
gsap.from(".services", 2, {
  scrollTrigger: ".services",
  opacity: 0,
  y: 200,
  ease: Power3.ease,
});

//Carousel
gsap.from(".carousel", 2, {
  scrollTrigger: ".carousel",
  opacity: 0,
  x: 200,
  ease: Power3.ease,
});
gsap.from("#photo-view-container", 2, {
  scrollTrigger: "#photo-view-container",
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


/********** Image Gallery **********/

marginL = 0;
function leftRight(obj) {
  spaceLeft = document.getElementById("photo-container").style.marginLeft;
  spaceLeft = spaceLeft.replace("px", null);
  spaceLeft = parseInt(spaceLeft);
  step = 300;
  totalLength = document.querySelectorAll(".photo-item").length;
  totalLength *= -115;
  objId = obj.id;
  if (objId == "left") {
    if (spaceLeft >= -step) {
      marginL = 0;
    } else {
      marginL += step;
    }
  }
  if (objId == "right") {
    if (spaceLeft <= totalLength + 500 + step) {
      marginL = totalLength + 500;
    } else {
      marginL -= step;
    }
  }
  document.getElementById("photo-container").style.marginLeft = marginL + "px";
}
function viewPhoto(obj) {
  objUrl = obj.src;
  objAlt = obj.alt;
  document.getElementById("photo-display").innerHTML =
    '<img src="' + objUrl + '" id="selected-photo" alt="">';
  document.getElementById("commentary").innerHTML = objAlt;
  console.log(objAlt);
}

