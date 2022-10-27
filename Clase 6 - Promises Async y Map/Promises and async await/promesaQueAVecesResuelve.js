const promesa = new Promise((accept, reject) => {
    const aceptor = Math.round(Math.random() * 100); //Valores entre 0 y 100
    console.log(aceptor);
    if (aceptor > 50) {
        accept({ value: "Se acepta la promesa" });
    }
    reject({ value: "Se rechaza la promesa" });
});

promesa.then(
    result => console.log(`Se resolvió bien: ${result.value}`),
    error => console.log(`Hubo un error: ${error.value}`)
)

//Otra forma
/* promesa
    .then((result) => console.log(result))
    .catch((error) => console.log(error)); */
