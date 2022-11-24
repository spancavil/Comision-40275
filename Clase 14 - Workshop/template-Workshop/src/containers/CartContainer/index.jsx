import React, { useContext } from "react";
import CartItem from "../../components/CartItem";
import { Shop } from "../../contexts/Shop";
import { saveOrder } from "../../services/saveOrder";

const CartContainer = () => {
    const { products, calculateTotal } = useContext(Shop);

    const confirmPurchase = () => {
        //Mostrar un formulario de compra, donde el usuario ingrese sus datos
        (async () => {
           await saveOrder(
            "Sebas",
            11111122222,
            "sebas@live.com",
            products,
            calculateTotal()
           )
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
