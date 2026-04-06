// document.addEventListener("DOMContentLoaded", function () {
//   const header = document.querySelector(".site-header");

//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 100) {
//       header.classList.add("scrolled");
//     } else {
//       header.classList.remove("scrolled");
//     }
//   });
// });




const cursor = document.querySelector('.custom-cursor');

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function smoothCursor() {
  // SMOOTH FOLLOW (LERP)
  currentX += (mouseX - currentX) * 0.12;
  currentY += (mouseY - currentY) * 0.12;

  cursor.style.left = currentX + 'px';
  cursor.style.top = currentY + 'px';

  requestAnimationFrame(smoothCursor);
}

smoothCursor();