import React from "react";
import "./styles.css";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import useFirebase from "../../hoooks/useFirebase";

export default function ItemListContainer() {

    const { categoryId } = useParams();
    const [data, error, loading] = useFirebase(categoryId)

    return (
        <>
            {(data.length && !loading &&!error)
            ? <ItemList products={data} />
            : error
            ? <h1>{error}</h1>
            : loading
                ? <Loader />
                : null
            }
        </>
    );
}
