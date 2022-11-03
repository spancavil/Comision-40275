import React, {useEffect, useState} from 'react';
import './styles.css';
// import rawProducts from '../../data/products';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer ({greeting}) {

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    console.log(categoryId);

    // const [nombre, setNombre] = useState("Oscar")
    // const [fecha, setFecha] = useState("")

    // const handleChangeName = () => {
    //     if (nombre === "Oscar") setNombre("Raul")
    //     else setNombre("Oscar")
    //     // console.log(nombre)
    // }

    //Montaje
    // useEffect(()=> {
    //     //Dentro de esta función haremos todo lo que es obtención de datos desde una API
    //     //o por ejemplo settear el carrito utilizando el localStorage
    //     console.log("Se ejecuta solamente al montaje")
    // }, [])

    //Actualización
    // useEffect(()=> {
    //     //Este effect se ejecuta únicamente al cambiar el valor del state "nombre" y también a la hora del montaje.
    //     console.log("Se cambia el nombre y/o se monta el componente")
    //     setFecha(new Date().toLocaleString())
    // }, [fecha, setFecha])

    // const handleUpdateDate = () => {
    //     setFecha(new Date().toLocaleString())
    // }

    /* useEffect(()=> {
        (async ()=> {

            const obtenerProductos = () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(rawProducts);
                    }, 3000);
                });
            }
            
            const response = await obtenerProductos();
            console.log(response);
            setProducts(response)
        })()
    }, []) */

    useEffect(()=> {
        ( async ()=> {
            try {
                console.log(categoryId);
                let response;
                if (categoryId) {
                    response = await fetch(`https://rickandmortyapi.com/api/character/?species=${categoryId}`);
                } else {
                    response = await fetch(`https://rickandmortyapi.com/api/character`);
                }
                console.log(response);
                const data = await response.json();
                console.log(data);
                setProducts(data.results)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [categoryId])

    return (
        <>
            {/* <div className='item-list-container'>
                <h2>{greeting}</h2>
                <p>{nombre}</p>
                <button onClick={handleChangeName}>Cambiar nombre</button>
                <p>{fecha}</p>
                <button onClick={handleUpdateDate}>Actualizar la fecha</button>
            </div> */}
            <ItemList products={products}/>
        </>
    )
}