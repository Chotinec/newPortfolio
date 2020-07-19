const parralax = document.querySelector('.parallax');
const layers = parralax.children;

function moveLayersDependsOnScroll(wScroll) {
  Array.from(layers).forEach(layer => {
    
    const divider = layer.getAttribute("data-speed");
    const strafe = wScroll * divider / 10;

    layer.style.transform = `translateY(-${strafe}%)`;
  });
}

window.addEventListener('scroll', e => {
  const wScroll =  window.pageYOffset;

  moveLayersDependsOnScroll(wScroll);
});