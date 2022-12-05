/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */


const zucchine = [
  {
    varietà: "zucchina",
    peso: "300g",
    lunghezza: "15cm"
  },
  {
    varietà: "zucchina",
    peso: "450g",
    lunghezza: "17cm"
  },
  {
    varietà: "zucchina",
    peso: "180g",
    lunghezza: "10cm"
  },
  {
    varietà: "zucchina",
    peso: "300g",
    lunghezza: "16cm"
  },
  {
    varietà: "zucchina",
    peso: "450g",
    lunghezza: "18cm"
  },
  {
    varietà: "zucchina",
    peso: "230g",
    lunghezza: "11cm"
  },
  {
    varietà: "zucchina",
    peso: "180g",
    lunghezza: "10cm"
  },
  {
    varietà: "zucchina",
    peso: "470g",
    lunghezza: "19cm"
  },
  {
    varietà: "zucchina",
    peso: "300g",
    lunghezza: "16cm"
  },
  {
    varietà: "zucchina",
    peso: "450g",
    lunghezza: "17cm"
  }
]

let peso = 0;
let lunghezza = 0;

for (let i = 0; i < zucchine.length; i++) {
  const zucchina = zucchine[i];
  peso += parseInt(zucchina.peso);
  lunghezza += parseInt(zucchina.lunghezza);
}

let pesoMedio = peso / 10;
let lunghezzaMedia = lunghezza / 10;

console.log(peso + " g");
console.log(pesoMedio + " g");
console.log(lunghezzaMedia + " cm");