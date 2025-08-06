import { Routes, Route } from 'react-router-dom'

//PAGES
import Register from '../pages/Register'
import Login from '../pages/Login'



import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
    </>
  );
}

export default App
