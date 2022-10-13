//Destructuring de objetos
const persona = 
{
    nombre: "Bautista",
    apellido: "Lombardo",
    edad: 20,
    vacunadoCovid: true
}

console.log(persona.apellido)

const {apellido} = persona

console.log(apellido)

//Destructuring de arrays

const frutas = ["Manzana", "Frutilla", "Limón", "Ahuacate", "Bergamota", "Kiwi"]

console.log(frutas[0])

const [fruta1, fruta2, ...restoDeFrutas] = frutas

console.log(fruta1, fruta2)

console.log(restoDeFrutas);

//Spread operator (...)
const persona2 = {...persona, tier: "diamanco"}

console.log(persona2);

const frutasCopia = [...frutas]

const frutasConUnaFrutaAdicional = [...frutas, "Melocoton"];

console.log(frutasConUnaFrutaAdicional);

//Función map, find

const frutasEnParagraph = frutas.map(fruta => `<p>${fruta}</p>`)

console.log(frutasEnParagraph);

const frutaAhuacate = frutas.find(fruta => fruta === "Aguacate");
console.log(frutaAhuacate);
