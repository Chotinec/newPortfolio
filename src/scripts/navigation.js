console.log('this is popup module');

const popup = document.querySelector(".popup");
const hamburger = document.querySelector(".hamburger-menu");
const scroll = document.querySelector(".scroll");

hamburger.addEventListener("click", e => {
  e.preventDefault();
  
  popup.classList.toggle("active");
  hamburger.classList.toggle("open");
});


popup.addEventListener("click", function(e) {
  const target = e.target;
  
  scrollTo(target);
});


function scrollTo(target) {
  if (target.classList.contains("navigation__link")) {
    const scroll_el = target.getAttribute("href");
    popup.classList.toggle("active");
    hamburger.classList.toggle("open");
    // const html = document.querySelector("html");
    // const section = document.querySelector(scroll_el).offsetTop;
    // animationScroll(html, section, 600);
  }
}

// function animationScroll(element, to, duration) {
//   var start = element.scrollTop,
//     change = to - start,
//     currentTime = 0,
//     increment = 20;

//   (function animateScroll() {
//     currentTime += increment;
//     var val = Math.easeInOutQuad(currentTime, start, change, duration);

//     element.scrollTop = val;
//     if (currentTime < duration) {
//       setTimeout(animateScroll, increment);
//     } else {
//       popup.classList.toggle("active");
//       hamburger.classList.toggle("open");
//     }
//   })();
// }

//t = current time
//b = start value
//c = change in value
//d = duration
// Math.easeInOutQuad = function(t, b, c, d) {
//   t /= d / 2;
//   if (t < 1) return (c / 2) * t * t + b;
//   t--;
//   return (-c / 2) * (t * (t - 2) - 1) + b;
// };