import React, {useEffect, useState} from 'react';
import './styles.css';

export default function ItemListContainer ({greeting}) {

    const [nombre, setNombre] = useState("Oscar")
    const [fecha, setFecha] = useState("")

    const handleChangeName = () => {
        if (nombre === "Oscar") setNombre("Raul")
        else setNombre("Oscar")
        // console.log(nombre)
    }

    //Montaje
    useEffect(()=> {
        //Dentro de esta función haremos todo lo que es obtención de datos desde una API
        //o por ejemplo settear el carrito utilizando el localStorage
        console.log("Se ejecuta solamente al montaje")
    }, [])

    //Actualización
    useEffect(()=> {
        //Este effect se ejecuta únicamente al cambiar el valor del state "nombre" y también a la hora del montaje.
        console.log("Se cambia el nombre y/o se monta el componente")
        setFecha(new Date().toLocaleString())
    }, [fecha, setFecha])

    const handleUpdateDate = () => {
        setFecha(new Date().toLocaleString())
    }

    return (
        <div className='item-list-container'>
            <h2>{greeting}</h2>
            <p>{nombre}</p>
            <button onClick={handleChangeName}>Cambiar nombre</button>
            <p>{fecha}</p>
            <button onClick={handleUpdateDate}>Actualizar la fecha</button>
        </div>
    )
}