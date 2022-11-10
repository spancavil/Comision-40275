import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import './styles.scss';

const NavBar = () => {

    return (
        <ul
            className="ul-container" 
            // className="ul-container-dark"
        >
            <li
                className="li-list"
            >
                <Link to="/">Home</Link>
            </li>
            <li
                className="li-list"
            >
                <Link to="/category/human">Human</Link>
            </li>
            <li
                className="li-list"
            >
                <Link to="/category/alien">Alien</Link>
            </li>
            <CartWidget />
        </ul>
    );
};

export default NavBar;
