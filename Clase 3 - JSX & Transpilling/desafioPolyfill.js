//Find
const arrayDeFrutas = ["Mango", "pera", "manzana"]

/* const nombreEncontrado = arrayDeFrutas.find(nombre => nombre === "Sebastián");

console.log(nombreEncontrado); */

const findConPolyfill = (arrayOriginal, elementoAEncontrar) => {
    for (let i = 0; i < arrayOriginal.length; i++) {
        const element = arrayOriginal[i];
            if (elementoAEncontrar === element)
                return element
    }
    return undefined
}

const elementoEncontrado = findConPolyfill(arrayDeFrutas, "manzana")

console.log(elementoEncontrado);
