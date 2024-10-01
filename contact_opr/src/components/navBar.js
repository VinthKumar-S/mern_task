import React from "react";
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
        <nav class="navBar">
            <h1>Contacts</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/edit">Edit</Link>
                </li>
                <li>
                    <Link to="/add">Ads</Link>
                </li>
            </ul>
        </nav>
    )
}