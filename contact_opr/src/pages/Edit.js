import React, { useEffect, useState } from 'react';
import '../components/pages.css';
import '../components/editForm.css';
import {useNavigate, useParams } from 'react-router-dom';

const Edit = () =>{
    const {id} = useParams();
    const navigate = useNavigate();
    const [contact,setContact] = useState({name:'',phone:'',email:''})

    useEffect(() => {
        console.log("Fetchig contact with ID:",id);
        fetch(`http://localhost:5000/contacts/${id}`)
        .then(response => {
            if(! response.ok){
                throw new Error(`Http error! status :${response.status}`)
            }
            response.json();
        })
        .then(data => setContact(data))
        .catch(error => console.error("Error in fetching data",error));
    },[id] );

    const handleSubmit =(event) =>{
        event.preventDefault();

        fetch(`http://localhost:5000/contacts/${id}`,{
            method:'PUT',
            headers:{
               'Content-Type' : 'application/json' 
            },
            body:JSON.stringify(contact),
        })
            .then(respons => respons.json())
            .then(data => {
                console.log('Item updated :', data);
                navigate('/'); 
            })
            .catch(
                error => console.error('Error in updating item ')
            )
    };

    const handleChange = (e) => {
        const { name ,value} = e.target;
        setContact({...contact,[name]:value});
    }
    return (
        <div className='editFormContainer'>
        <div className='header'>
            <h2>Edit Contact</h2>
        </div>
        <div className='editForms'>
            <form className='editForm' onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <label>Name</label>
                    <input type='text'
                        name='name'
                        value={contact.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputContainer">
                    <label>Phone</label>
                    <input type='text'
                        name='phone'
                        value={contact.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="inputContainer">
                    <label>Email</label>
                    <input type='text'
                        name='email'
                        value={contact.email}
                        onChange={handleChange}
                    />
                </div>
                <button type='submit' className='logButton'>Update</button>                
            </form>
        </div>
    </div>
    );
}

export default Edit;