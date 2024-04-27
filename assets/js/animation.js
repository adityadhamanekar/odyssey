function animations(
  element,
  duration = 800,
  origin = "bottom",
  distance = "20",
  reset = "false"
) {
  ScrollReveal().reveal("." + element, {
    duration: duration,
    origin: origin, // Change to 'right', 'bottom', or 'left' for different directions
    distance: distance + "px", // Distance from the direction
    easing: "ease-out",
    delay: 300,
    reset: false, // Reveal animation every time element enters viewport
    once: true,
  });
}

// animations("animate-element", 800, "top");

animations("card1", 1500, "left", 500);

animations("banner", 1500, "bottom", 500);

animations("card2", 1500, "bottom", 500);

animations("card3", 1500, "right", 500);

animations("blog", 1500, "bottom", 500);

animations("footer", 1500, "bottom", 500);

// countdown animations
animations("days", 1500, "left", 500);
animations("hours", 1500, "top", 500);
animations("min", 1500, "bottom", 500);
animations("sec", 1500, "right", 500);
