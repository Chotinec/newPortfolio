console.log('this is popup module');

const popup = document.querySelector(".popup");
const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", e => {
  e.preventDefault();
  
  popup.classList.toggle("active");
  hamburger.classList.toggle("open");
});
