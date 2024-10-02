import React from "react";
import {Link,useNavigate} from 'react-router-dom';
import './navBar.css'

const Navbar=({setIsAuthenticated})=>{
    const navigate = useNavigate();

    const handleLogout =()=>{
        setIsAuthenticated(false);
        navigate('/login');
    }
    return(
        <nav class="navBar">
            <ul>
                <li>
                    <Link class="link" to="/">Home</Link>
                </li>
                <li>
                    <Link class="link" to="/edit/:id">Edit</Link>
                </li>
                <li>
                    <Link class="link" to="/add">Add</Link>
                </li>
            </ul>
            <button className="logOff" onClick={handleLogout}>Logout</button>
        </nav>
    )
}

export default Navbar;