/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */


const persone = [
  {
    nome : "Leone",
    cognome : "Pernacchi",
    età: "18"
  },
  {
    nome : "Giovanna",
    cognome : "Fustigoni",
    età: "15"
  },
  {
    nome : "Maria",
    cognome : "Giusvalla",
    età: "17"
  },
  {
    nome : "Pippo",
    cognome : "Franco",
    età: "21"
  },
  {
    nome : "Ciccia",
    cognome : "Ingrassia",
    età: "24"
  },
  {
    nome : "Gino",
    cognome : "Paoli",
    età: "14"
  },
  {
    nome : "Renato",
    cognome : "Frisinga",
    età: "13"
  },
  {
    nome : "Giovanna",
    cognome : "D'arco",
    età: "19"
  },
  {
    nome : "Ivan",
    cognome : "Crostata",
    età: "15"
  },
  {
    nome : "Catena",
    cognome : "Biscotti",
    età: "16"
  },
]


const nuovePersone = persone.map((persona) => {
  if (persona.età >= 18){
    return `${persona.nome} ${persona.cognome} ha ${persona.età} anni, può guidare`
  } else {
    return `${persona.nome} ${persona.cognome} ha ${persona.età} anni, non può guidare`
  }

})

  console.log(nuovePersone)