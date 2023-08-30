function typingAnimation(element, textContent, speed = 100, animationId = null) {
  if (!animationId) {
    element.textContent = '';
  }

  setTimeout(() => {
    if (element.textContent.length < textContent.length) {
      element.textContent = element.textContent + textContent.charAt(element.textContent.length);
      animationId = requestAnimationFrame(() => { typingAnimation(element, textContent, speed, animationId); });
    } else {
      cancelAnimationFrame(animationId);
      cursorAnimation(element, textContent);
    }
  }, 1000 / speed);
}

function cursorAnimation(element, textContent, speed = 1.5) {
  setTimeout(() => {
    if ((window.innerWidth || document.body.clientWidth) > 800) {
      if (element.textContent.charAt(element.textContent.length - 1) == '|') {
        element.textContent = textContent;
      } else {
        element.textContent = textContent + '|';
      }
    } else {
      if (element.textContent.charAt(element.textContent.length - 1) == '|') {
        element.textContent = textContent;
      }
    }
    requestAnimationFrame(() => { cursorAnimation(element, textContent, speed); });
  }, 1000 / speed);
}

let heading = document.querySelector('.heading.occupation');
typingAnimation(heading, heading.textContent);
