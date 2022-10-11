//Un comentario

/* 
Otro comentario
*/

const heroes = ["Wonderwoman", "Superman", "Aquaman", "Flash"]

// console.log(heroes[1])

// console.log(heroes[5])

//Agregar ítems al array

heroes.push("Batman")

// console.log(heroes[4]);

/* Tipos de variables primitivas*/

const number = "2" //Number
const nombre = "Alejandro" //String
const condicion = false //Boolean
const variableA = null
const varibleNoDefinida = 1

// Null 

// Undefined
// console.log(varibleNoDefinida)

// NaN => Not a number
// console.log(1 > "20") Debería arrojar false, pero en realidad arrojará NaN

//Evaluar condiciones
if (number === 2) {
    console.log("El numero es 2");
} else {
    console.log("El numero NO es 2");
}

//Tener acceso a los elementos del DOM
const showButton = document.getElementById("show")
const hideButton = document.getElementById("hide")
const searchInput = document.getElementById("search")
const lista = document.getElementById("list")

//Añadir funcionalidad para mostrar personajes
showButton.addEventListener("click", () => {
    console.log("Se hizo click en show button");
    const content = heroesList(heroes)
    lista.innerHTML = content
})

//Añadir funcionalidad para ocultar personajes
hideButton.addEventListener('click', ()=> {
    lista.innerHTML = ""
})

//Por último mostrar sólo los filtrados
searchInput.addEventListener("keyup", (e)=>{
    console.log(e.target.value)
    const filtroHeroes = heroes.filter(hero => hero.includes(e.target.value))
    lista.innerHTML = heroesList(filtroHeroes)
})

function heroesList (heroes) {
    let content = heroes
        .map(hero => {
            return `<li>${hero}</li>`
        })
        .join("")
    console.log(content)
    return content
}