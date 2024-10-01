import React from 'react';
import '../components/pages.css';
import '../components/addForm.css';

const Add = () =>{
    return (
        <div className='addFormContainer'>
            <div className='header'>
                <h2>Add Contact</h2>
            </div>
            <div className='addForms'>
                <form className='addForm'>
                    <h2>Details</h2>
                    <div class="inputContainer">
                        <label>Name</label>
                        <input type='text'/>
                    </div>
                    <div class="inputContainer">
                        <label>Phone</label>
                        <input type='text' />
                    </div>
                    <div class="inputContainer">
                        <label>Email</label>
                        <input type='text' />
                    </div>
                    <button type='submit' className='logButton'>Add</button>                
                </form>
            </div>
        </div>
    );
}

export default Add;