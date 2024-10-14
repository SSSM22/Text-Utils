import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("success","Converted to Uppercase");
    }
    const handleDownClick=()=>{
        let t=text.toLowerCase();
        setText(t);
        props.showAlert("success","Converted to Lowercase");
    }
    const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value);
    }
    const handleClear=()=>{
        setText("");
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        alert("Text copied");
    }
    const handleToggle=()=>{
        let str=text.split('');
        for (let i = 0; i < str.length; i++)
            {
                if (str[i] >= 'A' && str[i] <= 'Z')
                    str[i] =  String.fromCharCode(str[i].charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));
                else if (str[i] >= 'a' && str[i] <= 'z')
                    str[i] =  String.fromCharCode(str[i].charCodeAt(0) + 'A'.charCodeAt(0) - 'a'.charCodeAt(0));
            }
        setText(str.join(''));
        props.showAlert("success","Converted to Toggle Case");
    } 
    const toggleSpeak=()=>{
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }
    const[text,setText]=useState("");
    return (
    <>
    <div style={{color:props.mode==='light'?'black':'white'}}>
        <div className='container my-4'>
            <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#042743', color:props.mode==='light'?'black':'white'}}value={text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-1' onClick={handleToggle}>Toggle</button>
            <button className='btn btn-warning  mx-1' onClick={toggleSpeak}>Speak</button>
        </div>
        <div className="container my-3"  >
            <h2>Text Summary+{props.mode}</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h3>Estimated Time to read</h3>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter your text in textbox to preview'}</p>
        </div>
    </div>  
        </>
    )
}
