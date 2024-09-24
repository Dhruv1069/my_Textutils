import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    
<Navbar title="TextUtil"/>
<div className="container">
<TextForm heading="Enter your text to analyze"/>
<About/>
</div>
    </>
  )
} 

export default App
