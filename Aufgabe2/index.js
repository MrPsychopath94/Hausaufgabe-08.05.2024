const zeichenvorrat = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*()_-+={}[];':\"\\|,.<>/?";

function generierePasswort() {
  const passwortlaenge = parseInt(document.getElementById("passwortlaenge").value);
  let passwort = "";

  for (let i = 0; i < passwortlaenge; i++) {
    const zufallszahl = Math.floor(Math.random() * zeichenvorrat.length);
    passwort += zeichenvorrat[zufallszahl];
  }

  document.getElementById("passwortanzeige").textContent = passwort;
}

