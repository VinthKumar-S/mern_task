import LoginForm from './pages/loginForm';
import {BrowserRouter as Router ,Route ,Routes,Navigate } from 'react-router-dom';
import Navbar from './components/navBar';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Add from './pages/Add';
import { useState } from 'react';

function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
            <Route path='/login' element={<LoginForm setIsAuthenticated={setIsAuthenticated}/>}/>
            <Route path="/" element={/*isAuthenticated ? */<Home /> /*: <Navigate to="/login" />*/ }/>
            <Route path="/edit" element={/*isAuthenticated ? */<Edit/> /*:<Navigate to="/login" />*/}/>
            <Route path="/add" element={/*isAuthenticated ? */<Add /> /*: <Navigate to="/login" />*/}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
