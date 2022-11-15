import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../contexts/Shop";
import InputConError from "../InputConError";
import ItemCount from "../ItemCount";
import "./styles.scss";

const ItemDetail = ({ character }) => {

    const {addProduct} = useContext(Shop);
    const [quantityItemDetail, setQuantityItemDetail] = useState(0);

    const navigate = useNavigate();

    const confirmPurchase = (quantity) => {
        console.log(quantity);
        addProduct({...character, quantity})
        setQuantityItemDetail(quantity);
    };

    const handleNavigate = () => {
      navigate('/cart')
    }

    console.log(character);
    return (
        <div className="item-detail">
            <img src={character.image} width={450} alt="detail" />
            <div className="texts">
              <h1>{character.name}</h1>
              <button className="btn btn-danger sm-3">Bootstrap button</button>
              <InputConError/>
              {quantityItemDetail ? 
                <button onClick={handleNavigate}>Go cart</button>
              : 
                <ItemCount onAdd={confirmPurchase} initial={1} stock={20} />
              }
            </div>
        </div>
    );
};

export default ItemDetail;
