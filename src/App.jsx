import { Routes, Route } from 'react-router-dom'

//PAGES
import Register from '../pages/Register'



import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </>
  );
}

export default App
