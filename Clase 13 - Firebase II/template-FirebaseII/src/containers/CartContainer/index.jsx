import React, { useContext } from 'react';
import CartItem from '../../components/CartItem';
import {Shop} from '../../contexts/Shop';

const CartContainer = () => {
    const {products} = useContext(Shop)

    console.log(products);
    // De no haber items debería mostrarse de manera condicional un mensaje "No hay items en el cart"
    return (
        <div>
            {products.map(product => {
                return <CartItem key={product.id} item={product}/>
            })}
        </div>
    )
}

export default CartContainer