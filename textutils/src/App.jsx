import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
// import './App.css'

function App() {

  const enabledarkmode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = "#1a1625"
      document.body.style.color = "white"
    }else{
      setmode('light');
      document.body.style.backgroundColor = "white"
      document.body.style.color = "#1a1625"
    }
  }

  const [mode, setmode] = useState('light');
  const [count, setCount] = useState(0)
  return (
    <>
    
<Navbar title="TextUtil" mode={mode} enabledarkmode={enabledarkmode}/>
<div className="container">
<TextForm heading="Enter your text to analyze" mode={mode} enabledarkmode={enabledarkmode}/>
{/* <About  /> */}
</div>
    </>
  )
} 

export default App
