import React, { useContext, useState } from "react";
import { Theme } from "../../contexts/Theme";
import "./styles.scss";

const ItemCount = ({onAdd, stock, initial}) => {

    const [count, setCount] = useState(initial);
    const {themeColor} = useContext(Theme)

    const onPlus = () => {
        if (count < stock) setCount(count + 1)
    }

    const onDecrement = () => {
        if (count > initial) setCount(count - 1)
    }
    return <div className={themeColor === "dark" ? "item-count-container-dark" : "item-count-container"}>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onPlus}>+</button>
        <button onClick={()=>onAdd(count)}>Confirm purchase</button>
    </div>;
};

export default ItemCount;
