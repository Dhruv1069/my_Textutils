import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let name = "Dhruv";
  return (
    <>
    
<Navbar title="TextUtil"/>
    </>
  )
} 

export default App
