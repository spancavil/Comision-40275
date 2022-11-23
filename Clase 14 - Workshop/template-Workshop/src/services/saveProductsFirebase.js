import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import characters from '../data/rickAndMortyChars.json';

const saveProductsFirebase = async () => {

    try {    
        //
        characters.forEach(async (character) => {
            const docRef = await addDoc(collection(db, "products"), {
                name: character.name,
                price: character.price,
                species: character.species,
                image: character.image,
                quantity: character.quantity,
                status: character.status,
                gender: character.gender,
                origin: character.origin,
            });
            console.log("Document written with ID: ", docRef.id);
        })
        
    } catch (error) {
        console.log(error)
    }
}

export default saveProductsFirebase;