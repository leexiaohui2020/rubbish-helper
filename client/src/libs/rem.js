function resizeHandler() {
  const width = document.documentElement.offsetWidth;
  document.documentElement.style.fontSize = `${28 * width / 750}px`;
}

window.addEventListener('load', resizeHandler);
window.addEventListener('resize', resizeHandler);
window.addEventListener('orientationchange', resizeHandler);
