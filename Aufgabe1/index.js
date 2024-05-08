function aufgabe1(text) {
  // Umkehrung des Strings
  const umgedreht = text.split("").reverse().join("");

  // Ausgabe des umgedrehten Strings in der Konsole
  console.log(umgedreht);
}

// Beispielverwendung
const meinText = "Hallo Welt!";
aufgabe1(meinText); // Ausgabe: !tleW ollaH
