import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../components/pages.css';
import '../components/loginForm.css';

const LoginForm = ({ setIsAuthenticated })=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(email === 'vk@gmail.com' && password === '123'){
            setIsAuthenticated(true);
            navigate('/');
        }
        else{
            alert('Invalid email or pasword');
        }
    }
    return (
        <div className='logContainer'>
                <form className='logForm' onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div class="inputContainer">
                        <label>Email</label>
                        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div class="inputContainer">
                        <label>Password</label>
                        <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    <button type='submit' className='logButton'>Login</button>                
                </form>
        </div>
        
    );
}

export default LoginForm;