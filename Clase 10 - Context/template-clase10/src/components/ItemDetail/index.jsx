import React, { useState } from "react";
import InputConError from "../InputConError";
import ItemCount from "../ItemCount";
import "./styles.scss";

const ItemDetail = ({ character }) => {
    const [quantityItemDetail, setQuantityItemDetail] = useState(0);

    const confirmPurchase = (quantity) => {
        console.log(quantity);
        setQuantityItemDetail(quantity);
    };

    console.log(character);
    return (
        <div className="item-detail">
            <img src={character.image} width={450} alt="detail" />
            <h1>{character.name}</h1>
            <button className="btn btn-danger sm-3">Bootstrap button</button>
            <InputConError/>
            {quantityItemDetail ? 
              <button>Go cart</button>
            : 
              <ItemCount onAdd={confirmPurchase} initial={1} stock={20} />
            }
        </div>
    );
};

export default ItemDetail;
