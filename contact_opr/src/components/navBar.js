import React from "react";
import {Link} from 'react-router-dom';
import './navBar.css'

const Navbar=()=>{
    return(
        <nav class="navBar">
            <ul>
                <li>
                    <Link class="link" to="/">Home</Link>
                </li>
                <li>
                    <Link class="link" to="/edit">Edit</Link>
                </li>
                <li>
                    <Link class="link" to="/add">Add</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;