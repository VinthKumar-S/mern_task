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
                    {contacts.length > 0 ? (
                        contacts.map(contact =>(
                            <div className='contactCards'>
                                <h4 className='contactTitle'>{contact.name}</h4>
                                <p className='contactsubT'>{contact.phone}</p>
                                <div className='cardControler'>
                                    <button onClick={() => deleteContact(contact._id)}>Delete</button>
                                    <Link className='cardEdit' to={`/edit/${contact._id}`} >Edit</Link>
                                </div>
                            </div>
                        ))
                    ):(
                        <p>No Item</p>
                    )}
            </div>
        </div>
    );
}

export default Home;