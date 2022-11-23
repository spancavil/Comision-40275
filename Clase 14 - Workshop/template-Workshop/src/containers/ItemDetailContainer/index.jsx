import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import Loader from "../../components/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [character, setCharacter] = useState(null)

    useEffect(() => {

        const getCharacterDetail = async () => {
            
            /* const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const character = await response.json();
            setCharacter(character) */

            //Viene de la docu de firebase
            //1ero generamos la referencia al documento. Tercer parámetro: es el ID del documento a consultar
            const docRef = doc(db, "products", id);

            //2do generar la petición
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setCharacter({...docSnap.data(), id: docSnap.id})
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }

        getCharacterDetail()
        //hacer el fetch del detalle del producto
    }, [id])

    return (character ? <ItemDetail character={character}/> : <Loader/> )
};

export default ItemDetailContainer;
