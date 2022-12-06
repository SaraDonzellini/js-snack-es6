// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI


const animali = [
  {
    nome : "leone",
    famiglia : "felidi",
    classe: "mammiferi"
  },
  {
    nome : "cane",
    famiglia : "canidi",
    classe: "mammiferi"
  },
  {
    nome : "gallina",
    famiglia : "fasianidi",
    classe: "uccelli"
  },
  {
    nome : "leone",
    famiglia : "felidi",
    classe: "mammiferi"
  },
  {
    nome : "cane",
    famiglia : "canidi",
    classe: "mammiferi"
  },
  {
    nome : "gallina",
    famiglia : "fasianidi",
    classe: "uccelli"
  },
  {
    nome : "leone",
    famiglia : "felidi",
    classe: "mammiferi"
  },
  {
    nome : "cane",
    famiglia : "canidi",
    classe: "mammiferi"
  },
  {
    nome : "gallina",
    famiglia : "fasianidi",
    classe: "uccelli"
  },
  {
    nome : "leone",
    famiglia : "felidi",
    classe: "mammiferi"
  },
  {
    nome : "cane",
    famiglia : "canidi",
    classe: "mammiferi"
  },
  {
    nome : "gallina",
    famiglia : "fasianidi",
    classe: "uccelli"
  },
]

const mammiferiArray = animali.filter((animale) => animale.classe === "mammiferi");

console.log(mammiferiArray);

const nuoviMammiferi = mammiferiArray.map ( (mammifero) => {
  mammifero.nome  = mammifero.nome.charAt(0) + mammifero.nome.substring(1).toUpperCase();

  return mammifero;
})

console.log(nuoviMammiferi)