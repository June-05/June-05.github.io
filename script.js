document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const menuToggle = document.querySelector(".menu-toggle");
  const headerLinks = document.querySelector(".header-links");

  if (header && menuToggle && headerLinks) {
    const closeMenu = () => {
      header.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      header.classList.add("menu-open");
      menuToggle.setAttribute("aria-expanded", "true");
    };

    menuToggle.addEventListener("click", () => {
      if (header.classList.contains("menu-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    headerLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (!header.contains(event.target)) {
        closeMenu();
      }
    });
  }

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