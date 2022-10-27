//IIFE -- función autoejecutada (no tiene que ser llamada)
 (async () => {

    //Defino la promise
    const obtenerProductos = () => {
        return new Promise((resolve, reject) => {
            console.log("Hola en promise");
            const aceptor = Math.random();
            if (aceptor > 0.5) {
                resolve({ value: "Listado de productos" })
            }
            reject({ message: "No te devuelvo nada" })
        })
    }

    //Bloque try-catch
    try {
        const response = await obtenerProductos();
        console.log(response);
    } catch (error) {
        console.log("Entra en el catch")
        console.log(error);
    }
    console.log("Continua la ejecución!");
        
})()

/* (()=> {
    console.log("Esta función se autoejecuta");
})() */