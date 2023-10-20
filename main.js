const NUMCOUNTER = document.getElementById("numCounter");

const DECREMENTBUTTON = document.getElementById("decrement");
const RESETBUTTON = document.getElementById("reset");
const INCREMENTBUTTON = document.getElementById("increment");

let count = 0;
DECREMENTBUTTON.addEventListener("click", () => {
  count --;
  updateCounter();
});

RESETBUTTON.addEventListener("click", () => {
  count = 0;
  updateCounter();
});

INCREMENTBUTTON.addEventListener("click", () => {
  count ++;
  updateCounter();
});

function updateCounter() {
  NUMCOUNTER.textContent = count;
}

updateCounter();