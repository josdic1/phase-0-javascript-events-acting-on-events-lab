const dodger = document.getElementById("dodger");

document.addEventListener("keydown", handleKeyDown);

let xAxis = 180;
let yAxis = 0;

function moveDodgerLeft() {
  xAxis--;
  dodger.style.left = xAxis + "px";
}

function moveDodgerRight() {
  xAxis++;
  dodger.style.left = xAxis + "px";
}

function handleKeyDown(e) {
  const { key } = e;
  switch (key) {
    case "ArrowRight":
      moveDodgerRight();
      break;
    case "ArrowLeft":
      moveDodgerLeft();
      break;
    case "ArrowUp":
      yAxis++;
      dodger.style.bottom = yAxis + "px"; 
      break;
    case "ArrowDown":
      yAxis--;
      dodger.style.bottom = yAxis + "px";
      break;
  }
}
