import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../components/pages.css';
import '../components/displayCon.css'

const Home = () =>{
    const [contacts,setContacts] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/contacts')
            .then(res => res.json())
            .then(data => setContacts(data))
            .catch(err => console.error('Errors in Fetching Item:',err))
},[]);

const deleteContact = (id) =>{
    fetch(`http://localhost:5000/contacts/${id}`,{
        method:'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        setContacts(contacts.filter(contact => contact._id !== id));
    })
}

    return (
        <div className='container'>
            <div className='header'>
                <h2>Home Contact</h2>
            </div>
            <div className='displayContainer'>
                <ul>
                    {contacts.length > 0 ? (
                        contacts.map(contact =>(
                            <li key={contact._id}>
                                <h3>{contact.name}</h3>
                                <p>{contact.phone}</p>
                                <button onClick={() => deleteContact(contact._id)}>Delete</button>
                                <Link to={`/edit/${contact._id}`} >Edit</Link>
                            </li>
                        ))
                    ):(
                        <p>No Item</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Home;