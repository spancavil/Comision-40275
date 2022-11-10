import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Theme } from "../../contexts/Theme";
import CartWidget from "../CartWidget";
import './styles.scss';

const NavBar = () => {

    const {themeColor, setThemeColor} = useContext(Theme)

    const handleChange = (event) => {
        setThemeColor(event.target.value)
    }

    console.log(themeColor);

    return (
        <ul
            className={themeColor === "light" ? "ul-container" : "ul-container-dark"}
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
            <select value={themeColor} onChange={handleChange}>
                <option value={'light'}>Light</option>
                <option value={'dark'}> Dark</option>
            </select>
            <CartWidget />
        </ul>
    );
};

export default NavBar;
