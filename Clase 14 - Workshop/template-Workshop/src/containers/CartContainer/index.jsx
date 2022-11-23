import React, { useContext } from "react";
import CartItem from "../../components/CartItem";
import { Shop } from "../../contexts/Shop";
import generateOrderObject from "../../services/generateOrderObject";
import { doc, getDoc, updateDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const CartContainer = () => {
    const { products, calculateTotal } = useContext(Shop);

    const confirmPurchase = () => {
        //Mostrar un formulario de compra, donde el usuario ingrese sus datos
        (async () => {
            try {
                //Datos hardcodead
                const nombreComprador = "Sebas";
                const telefono = 111111111;
                const email = "sebas@live.com";

                const generatedOrder = generateOrderObject(
                    nombreComprador,
                    email,
                    telefono,
                    products,
                    calculateTotal()
                );

                const productOutOfStock = [];
                const productsInFirebase = [];
                //Chequear el stock de los productos en el carrito
                for (const productInCart of products) {
                    const docRef = doc(db, "products", productInCart.id);
                    const docSnap = await getDoc(docRef);
                    const productInFirebase = { ...docSnap.data(), id: docSnap.id };
                    productsInFirebase.push(productInFirebase);
                    if (productInCart.quantity > productInFirebase.quantity)
                        productOutOfStock.push(productInCart);
                }

                console.log(productOutOfStock);
                console.log(productsInFirebase);

                if (productOutOfStock.length === 0) {
                    //Disminuir el stock existente
                    console.log(products);

                    for (const productInCart of products) {
                        const productInFirebase = productsInFirebase.find(
                            (product) => product.id === productInCart.id
                        );
                        const productRef = doc(
                            db,
                            "products",
                            productInCart.id
                        );
                        // Actualizo el stock del producto
                        await updateDoc(productRef, {
                            quantity:
                                productInFirebase.quantity -
                                productInCart.quantity,
                        });
                    }

                    //Generar la orden
                    const docRef = await addDoc(
                        collection(db, "orders"),
                        generatedOrder
                    );
                    alert(
                        `Se generó la order correctamente con ID: ${docRef.id}`
                    );
                } else {
                    let mensaje = "";
                    for (const product of productOutOfStock) {
                        const productInFirebase = productsInFirebase.find(
                            (productFirebase) => productFirebase.id === product.id
                        );
                        console.log(productInFirebase);
                        mensaje += `${product.name}, stock disponible: ${productInFirebase.quantity}, cantidad pedida: ${product.quantity}\n`;
                    }
                    alert(`Hay producto/s fuera de stock: \n${mensaje}`);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    };
    // De no haber items debería mostrarse de manera condicional un mensaje "No hay items en el cart"
    return (
        <div>
            {products.map((product) => {
                return <CartItem key={product.id} item={product} />;
            })}
            <button className="btn btn-success p-3" onClick={confirmPurchase}>
                Confirmar compra
            </button>
        </div>
    );
};

export default CartContainer;
