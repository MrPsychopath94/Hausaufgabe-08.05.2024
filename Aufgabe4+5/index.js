function berechneDurchmesser() {
  const radiusEingabe = document.getElementById("radiusEingabe");
  const radius = parseInt(radiusEingabe.value);

  if (isNaN(radius) || radius <= 0) {
    alert("Ungültiger Radius!");
    return;
  }

  const durchmesser = radius * 2;
  document.getElementById(
    "durchmesserAnzeige"
  ).textContent = `Durchmesser: ${durchmesser}`;

  const kreis = document.getElementById("kreis");
  kreis.style.width = `${durchmesser}px`;
  kreis.style.height = `${durchmesser}px`;
}
