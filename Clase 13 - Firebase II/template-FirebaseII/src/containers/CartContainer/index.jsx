import React, { useContext } from 'react';
import CartItem from '../../components/CartItem';
import {Shop} from '../../contexts/Shop';
import generateOrderObject from '../../services/generateOrderObject';
import { doc, getDoc, updateDoc, collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

const CartContainer = () => {
    const {products, calculateTotal} = useContext(Shop)

    const confirmPurchase = () => {
        //Mostrar un formulario de compra, donde el usuario ingrese sus datos
        (async ()=> {

            const nombreComprador = "Sebas"
            const telefono = 111111111
            const email = "sebas@live.com"
    
            const generatedOrder = generateOrderObject(
                                            nombreComprador,
                                            email,
                                            telefono,
                                            products,
                                            calculateTotal())
            console.log(generatedOrder);
            
            let productOutOfStock = []
            //Chequear el stock de los productos en el carrito
            for (const productInCart of products) {
                const docRef = doc(db, "products", productInCart.id);
                const docSnap = await getDoc(docRef);
                console.log(docSnap);
                const productInFirebase = {...docSnap.data(), id: doc.id}
                if (productInCart.quantity > productInFirebase.quantity) productOutOfStock.push(productInCart)                
            }
    
            console.log(productOutOfStock);
    
            if (productOutOfStock.length === 0) {
                //Disminuir el stock existente
                console.log(products);
    
                for (const productInCart of products) {
                        const productRef = doc(db, "products", productInCart.id);
            
                        const docSnap = await getDoc(productRef);
                        const productInFirebase = {...docSnap.data(), id: doc.id}
            
                        // Set the "capital" field of the city 'DC'
                        await updateDoc(productRef, {
                            quantity: productInFirebase.quantity - productInCart.quantity
                        });
                    }
                
                //Generar la orden
    
                // Add a new document with a generated id
                try {
                    const docRef = await addDoc(collection(db, "orders"), generatedOrder);
                    alert(`Se generó la order correctamente con ID: ${docRef.id}`)
                } catch (error) {
                    console.log(error)
                }
            }
            else {
                alert("Hay algún producto fuera de stock")
            }
        })()

    }

    console.log(products);
    // De no haber items debería mostrarse de manera condicional un mensaje "No hay items en el cart"
    return (
        <div>
            {products.map(product => {
                return <CartItem key={product.id} item={product}/>
            })}
            <button className='btn btn-success p-3' onClick={confirmPurchase}>Confirmar compra</button>
        </div>
    )
}

export default CartContainer