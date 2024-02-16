import {NavLink} from "react-router-dom";
import React from "react";

const Appbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-bg-secondary px-5">
            <div className="container-fluid">
                <span className="navbar-brand">
                    Quotes central
                </span>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/division" className="nav-link">Division</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/resources" className="nav-link">Resources</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/prices" className="nav-link">Prices</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/quotes" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/add-quote" className="nav-link">New Quotes</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Appbar;