import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    let newText =text.toUpperCase();
     setText(newText);
  }

  const handleLwClick =()=>{
    let newText =text.toLocaleLowerCase();
     setText(newText);
  }

 const handleClearClick =()=>{
    let newText ='';
     setText(newText);
  }
  
  const handleCopy =()=>{
    var text =document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleRemoveSpaces =()=>{
    var trimtext =text.replace(/\s+/g, ' ').trim();
    setText(trimtext);
  }

  

  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  const[text ,setText]= useState("Enter text here");
  
  return (
    <>
    <div className="container">`
    
      <div className="mb-3">
            <textarea
              className="form-control"  id="my-box"  value={ text} onChange={handleOnChange} rows="8"
            ></textarea>
          </div>
          <button className='btn btn-primary ' onClick={handleUpClick}>Convert to UpperCase</button>
          <button className='btn btn-success mx-2' onClick={handleLwClick}>Convert to LowerCase</button>
          <button className='btn btn-secondary mx-1' onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
          <button className='btn btn-warning mx-1' onClick={handleCopy}>Copy Text</button>
          <button className='btn btn-danger mx-1' onClick={handleClearClick}>Clear Text</button>
       </div>
       <div className="container">`
        <h1>Your text summary</h1>
        {/* <p>{this.text.split(" ").lenth} words and {text.length} characters</p> */}
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length  }Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
       </div>
    </>
  );
}
