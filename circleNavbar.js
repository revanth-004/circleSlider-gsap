var active = 3;
var mncircles = document.querySelectorAll(".mncircle");
var second = document.querySelectorAll(".second");

gsap.to(mncircles[active - 1], {
  opacity: 0.5,
});

gsap.to(second[active - 1], {
  opacity: 1,
});

gsap.to("#circle", {
  rotate: 0,
  ease: Expo.easeInOut,
  duration: 2,
});

mncircles.forEach(function (val, index) {
  val.addEventListener("click", function () {
    gsap.to("#circle", {
      rotate: (3 - (index + 1)) * 10,
      ease: Back.easeInOut,
      duration: 1,
    });
    greyout();
    gsap.to(this, {
      opacity: 0.5,
    });
    gsap.to(second[index], {
      opacity: 1,
    });
  });
});

function greyout() {
  gsap.to(mncircles, {
    opacity: 0.2,
  });
  gsap.to(second, {
    opacity: 0.4,
  });
}
