/**
  Crea un array composto da 10 automobili.
  Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

  Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
  Infine stampa separatamente i 3 array.
*/

const automobiles = [
  {
    marca: "mercedes",
    modello: "fuoriserie",
    alimentazione: "benzina"
  },
  {
    marca: "hyundai",
    modello: "berlina",
    alimentazione: "diesel"
  },
  {
    marca: "opel",
    modello: "utilitaria",
    alimentazione: "metano"
  },
  {
    marca: "honda",
    modello: "utilitaria",
    alimentazione: "benzina"
  },
  {
    marca: "chevrolet",
    modello: "fuoriserie",
    alimentazione: "diesel"
  },
  {
    marca: "renault",
    modello: "berlina",
    alimentazione: "elettrica"
  },
  {
    marca: "toyota",
    modello: "utilitaria",
    alimentazione: "benzina"
  },
  {
    marca: "citroen",
    modello: "berlina",
    alimentazione: "elettrica"
  },
  {
    marca: "bmw",
    modello: "fuoriserie",
    alimentazione: "gpl"
  },
  {
    marca: "audi",
    modello: "fuoriserie",
    alimentazione: "metano"
  }
];

const benzina = [];
const diesel = [];
const others = [];

for (let i = 0; i < automobiles.length; i++) {
  const currentAuto = automobiles[i];
  if (currentAuto.alimentazione === "benzina") {
    benzina.push(currentAuto);
  } else if (currentAuto.alimentazione === "diesel"){
    diesel.push(currentAuto);
  } else {
    others.push(currentAuto);
  }
}

console.log(benzina)
console.log(diesel)
console.log(others)

