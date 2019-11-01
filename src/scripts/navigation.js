const popup = document.querySelector(".popup");
const hamburger = document.querySelector(".hamburger-menu");
const scroll = document.querySelector(".scroll");

const links = document.querySelectorAll("[href^='#']");
const V = 0.5;

for (const link of links) {
  link.addEventListener("click", e => {
    e.preventDefault();
    const anchor = document.querySelector(link.getAttribute("href"));
    const coordAnchor = anchor.getBoundingClientRect().top;
    const windowY = window.pageYOffset;

    let start = null;

    requestAnimationFrame(step);

    function step(time) {
      
      if (start === null) start = time;
      let progress = time - start;

      let coordY =
        coordAnchor < 0
          ? Math.max(windowY - progress / V, windowY + coordAnchor)
          : Math.min(windowY + progress / V, windowY + coordAnchor);

      window.scrollTo(0, coordY);
      
      if (coordY != windowY + coordAnchor) {
        requestAnimationFrame(step);
      } else {
        if (popup.classList.contains("active-popup")) {
          popup.classList.toggle("active-popup");
          hamburger.classList.toggle("open");
        }
      }
    }
  });
}

hamburger.addEventListener("click", e => {
  e.preventDefault();
  
  popup.classList.toggle("active-popup");
  hamburger.classList.toggle("open");
});