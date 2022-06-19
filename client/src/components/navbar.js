import React from "react";
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to='/user' className="navbar-brand">Sign Up</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='/add_products' className="nav-link">Add Products</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='/profile' className="nav-link">Profile</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='/login' className="nav-link">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;