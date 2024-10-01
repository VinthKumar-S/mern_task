import React,{useState} from 'react';

function LoginForm (){
    return (
        <div class='logContainer'>
            <form className='logForm'>
                <h2>Login</h2>
                <div class="inputContainer">
                    <label>Email</label>
                    <input type='email'/>
                </div>
                <div class="inputContainer">
                    <label>Password</label>
                    <input type='text'/>
                </div>

                <button type='submit' className='logButton'>Login</button>                
            </form>
        </div>
        
    );
}

export default LoginForm;