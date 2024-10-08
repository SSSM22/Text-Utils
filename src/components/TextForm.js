import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleDownClick=()=>{
        let t=text.toLowerCase();
        setText(t);
    }
const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);
    }
  const[text,setText]=useState("");
  return (
    <>
    <div className='container my-4'>
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleDownClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h3>Estimated Time to read</h3>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
