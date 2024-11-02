// Parallax Scrolling for the Hero Background
window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;
  const heroBackground = document.querySelector("#hero::before");

  if (heroBackground) {
    heroBackground.style.transform = `translateY(${
      scrollPosition * 0.5
    }px) scale(1.5)`;
  }
});
