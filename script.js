const adjectives = ["Funky", "Loud", "Silent", "Electric", "Wicked", "Groovy"];

const nouns = ["Penguins", "Wizards", "Socks", "Robots", "Bananas", "Crows"];

function getAdjective(adjectives) {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
}

function getNoun(nouns) {
  return nouns[Math.floor(Math.random() * nouns.length)];
}

// TODO: use getAdjective() and getNoun() to build a band name
// Format: "The Adjective Noun"
// Then update the DOM to show the band name inside #band-name

function generateBandName(adjectives, nouns) {
  let adjective = getAdjective(adjectives);
  let noun = getNoun(nouns);
  return `The ${adjective} ${noun}`;
}

// let bandName = document.getElementById("band-name")

document
  .getElementById("generate-btn")
  .addEventListener("click", handleBandBtn);

function handleBandBtn(e) {
  e.preventDefault();
  const bandName = generateBandName(adjectives, nouns);
  document.getElementById("band-name").textContent = bandName;
}
