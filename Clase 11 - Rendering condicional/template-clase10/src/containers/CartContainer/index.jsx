import React, { useContext } from 'react';
import CartItem from '../../components/CartItem';
import {Shop} from '../../contexts/Shop';

const CartContainer = () => {
    const {products} = useContext(Shop)

    console.log(products);

    return (
        <div>
            {products.map(product => {
                return <CartItem item={product}/>
            })}
        </div>
    )
}

export default CartContainer