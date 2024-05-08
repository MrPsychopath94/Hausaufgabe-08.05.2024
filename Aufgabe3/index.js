function generateRandomColor() {
  const symbols = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeButtonColor() {
  const button = document.getElementById("farbwechselButton");
  const newColor = generateRandomColor();
  button.style.backgroundColor = newColor;
}

document
  .getElementById("farbwechselButton")
  .addEventListener("click", changeButtonColor);
