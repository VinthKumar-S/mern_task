import LoginForm from './pages/loginForm';
import {BrowserRouter as Router ,Route ,Routes,Navigate,Switch } from 'react-router-dom';
import Navbar from './components/navBar';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Add from './pages/Add';
import { useEffect, useState } from 'react';


function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [message,setMessage] = useState('');

  // useEffect(()=>{
  //    fetch("http://localhost:5000/message")
  //    .then((res) =>res.json())
  //    .then((data) => setMessage(data.message))
  // },[])

  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
            <Route path='/login' element={<LoginForm setIsAuthenticated={setIsAuthenticated}/>}/>
            <Route path="/" element={/*isAuthenticated ? */<Home /> /*: <Navigate to="/login" />*/ }/>
            <Route path="/edit/:id" element={/*isAuthenticated ? */<Edit/> /*:<Navigate to="/login" />*/}/>
            <Route path="/add" element={/*isAuthenticated ? */<Add /> /*: <Navigate to="/login" />*/}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
