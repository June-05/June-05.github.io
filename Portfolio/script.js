document.addEventListener("DOMContentLoaded", () => {
  // Select all images on the page (or use '.gallery img' for a specific section)
  const images = document.querySelectorAll(".carousel-item img");

  images.forEach(img => {
    // Add the visual styling cue via JS or CSS
    img.style.cursor = "zoom-in";

    img.addEventListener("click", () => {
      // Check if the browser is already in fullscreen mode
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        // Enter fullscreen
        if (img.requestFullscreen) {
          img.requestFullscreen();
        } else if (img.webkitRequestFullscreen) {
          img.webkitRequestFullscreen();
        }
      } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    });
  });
});