import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home, Login } from "../pages";
import './App.css';

const App = () => {

  let user = false;

  const navigate = useNavigate();
  
  useEffect(() => {
    if(!user) navigate('/login')
  }, [])

  return (
    <Routes>
      <Route path='login' element={<Login user={user}/>}/>
      <Route path='/*' element={<Home />}/>
    </Routes>
  )
}

export default App;