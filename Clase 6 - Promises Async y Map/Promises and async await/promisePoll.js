const promise = new Promise((acc, rej) => {
    setTimeout(() => {
        rej("Valor devuelto");
    }, 0);
});

promise
    .then((result) => {
        console.log("Todo ok");
        console.log(result);
    })
    .catch((error) => {
        console.log("Hubo un error");
        console.log(error);
    })
    .finally(() => {
        console.log("Finalmente");
    });
