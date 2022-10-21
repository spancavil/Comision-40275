import React from "react";
import './styles.css';

const NavBar = ({message, temp = 18, nfts}) => {

    console.log(message);
    console.log(temp);
    console.log(nfts);

    return (
        <ul>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#news">News</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <span>{message}, la temperatura es de {temp}°C</span>
        </ul>
    );
};

export default NavBar;
