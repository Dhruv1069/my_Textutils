import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log('Uppercase was clicked');
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const clearText=()=>{
    let newText = '';
    setText(newText);
  }
  const handleOnChange =(event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className="btn btn-success" onClick={handleUpClick}>Convert to UPPERCASE</button>
  <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to lowercase</button>
  <button className="btn btn-success mx-2" onClick={clearText}>Clear Text</button>
  </div>
  <div className="container my-3">
    <h1>Your text here</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>
  )
}
