import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../components/pages.css';
import '../components/loginForm.css';

const LoginForm = ({ setIsAuthenticated })=>{
    const [user,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(user === 'admin' && password === 'admin123'){
            localStorage.setItem('user',JSON.stringify({user:'admin',role:'admin'}))
            setIsAuthenticated(true);
            navigate('/');           
        }
        else if(user === 'user' && password === 'user123'){
            localStorage.setItem('user',JSON.stringify({user:'user',role:'user'}))
           setIsAuthenticated(true)
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
                        <label>Name</label>
                        <input type='text' value={user} onChange={(e)=>setEmail(e.target.value)}/>
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