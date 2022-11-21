//Función auxiliar para generar la orden.
const generateOrderObject = (nombre, email, telefono, cart, total) => {
    return {
        buyer: {
            nombre: nombre,
            email: email,
            telefono: telefono,
        },
        items: cart
        ,
        total: total,
        createdAt: new Date().toLocaleString()
    }
}

export default generateOrderObject;