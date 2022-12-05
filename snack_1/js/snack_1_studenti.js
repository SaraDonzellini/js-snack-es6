//? 1. Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
//? 2. Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
//? 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.



const student = {
  name : "Giuseppina",
  surname : "Fuffini",
  age: 18
};

for (const chiave in student) {
  console.log(student[chiave]);
}

const students = [
  {
    name : "Giuseppina",
    surname : "Fuffini",
    age: 18
  },
  {
    name : "Giangiacomo",
    surname : "Donati",
    age: 19
  },
  {
    name : "Sarina",
    surname : "Saretti",
    age: 18
  },
  {
    name : "Giuseppino",
    surname : "Pasquali",
    age: 17
  }
];

console.log(students);