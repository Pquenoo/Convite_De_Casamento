

const timeline = document.getElementById('timeline');
let scrollAmount = 0;
const scrollStep = 1; // pixels por frame
const scrollDelay = 8; // milissegundos por frame

function autoScroll() {
  scrollAmount += scrollStep;
  if (scrollAmount >= timeline.scrollWidth / 2) {
    scrollAmount = 0;
  }
  timeline.scrollLeft = scrollAmount;
}

setInterval(autoScroll, scrollDelay);
