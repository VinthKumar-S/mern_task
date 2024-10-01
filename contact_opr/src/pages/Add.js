import React, { useState } from 'react';
import '../components/pages.css';
import '../components/addForm.css';

const Add = () =>{
    const [name,setName]=useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const respons = await fetch('http://localhost:5000/add-contact',{
                method:'POST'
                ,headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    name,
                    phone,
                    email
                }),
            });

            const data = await respons.json();

            if(respons.ok){
                setMessage(data.message);
                setName('');
                setEmail('');
                setPhone('');
            }
            else{
                setMessage('Error adding item');
            }
        }
        catch(e){
            console.error('Error',e);
            setMessage('Error adding item');
        }
    }
    return (
        <div className='addFormContainer'>
            <div className='header'>
                <h2>Add Contact</h2>
            </div>
            <div className='addForms'>
                <form className='addForm' onSubmit={handleSubmit}>
                    <h2>Details</h2>
                    <div class="inputContainer">
                        <label>Name</label>
                        <input type='text'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div class="inputContainer">
                        <label>Phone</label>
                        <input type='text'
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                        />
                    </div>
                    <div class="inputContainer">
                        <label>Email</label>
                        <input type='text'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='logButton'>Add</button>                
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
}

export default Add;