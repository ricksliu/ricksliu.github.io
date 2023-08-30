function fadeIn(element, speed = 0.0075, animationId = null) {
  if (!animationId) {
    element.style.opacity = 0;
  }

  if (+element.style.opacity < 1) {
    element.style.opacity = +element.style.opacity + speed;
    animationId = requestAnimationFrame(() => { fadeIn(element, speed, animationId); });
  } else {
    cancelAnimationFrame(animationId);
  }
}

let photo = document.querySelector('.photo');
fadeIn(photo);
