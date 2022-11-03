import React from "react";
import CartWidget from "../CartWidget";
import './styles.css';

const NavBar = () => {

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
            <CartWidget />
        </ul>
    );
};

export default NavBar;
