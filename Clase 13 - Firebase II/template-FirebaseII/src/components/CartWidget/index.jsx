import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../contexts/Shop";
import CartIcon from "../CartIcon";

const CartWidget = () => {
    const navigate = useNavigate();

    const {totalItemsCart} = useContext(Shop);

    return (
        <div
            style={{
                width: 100,
                height: 35,
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                gap: "5px"
            }}
            onClick ={()=> navigate("/cart")}
        >
            <CartIcon/>
            <span>{totalItemsCart() === 0 ? null : `(${totalItemsCart()})`}</span>
        </div>
    );
};

export default CartWidget;
