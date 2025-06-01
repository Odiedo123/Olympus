const text = "Zeus - Lord Of The Skies";
const speed = 150; // typing speed in ms
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("gods-name").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
// Add an overlay div to the body
const overlay = document.createElement("div");
overlay.id = "scroll-overlay";
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "black";
overlay.style.pointerEvents = "none";
overlay.style.transition = "opacity 0.2s ease"; // Smooth transitions
overlay.style.opacity = "0";
document.body.appendChild(overlay);

// Function to update overlay opacity based on scroll position
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const maxEffectHeight = window.innerHeight * 4.5; // 500vh in pixels

  let opacity = 0;
  let displayOverlay = true;

  if (scrollTop <= maxEffectHeight / 2) {
    // Fade in from 0 to 1
    opacity = scrollTop / (maxEffectHeight / 2);
  } else if (scrollTop <= maxEffectHeight) {
    // Fade out from 1 to 0
    opacity = 1 - (scrollTop - maxEffectHeight / 2) / (maxEffectHeight / 2);
  } else {
    // Hide overlay beyond 500vh
    opacity = 0;
    displayOverlay = false;
  }

  overlay.style.opacity = opacity;
  overlay.style.display = displayOverlay || opacity > 0 ? "block" : "none";
});
