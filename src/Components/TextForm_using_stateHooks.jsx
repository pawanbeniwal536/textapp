import {  useState } from 'react'
import "./Textform.css"
function TextForm_using_stateHooks(props) {
const[text, setText]=useState("");
const Update=()=>{
const upperText=text.toUpperCase();
setText(upperText);
props.showAlert("Converted into uppercase ","Success")
}
const copyTextOnClipBoard=()=>{

window.navigator.clipboard.writeText(text)
  
}
const LowerUpdate=()=>{
    const LowerText=text.toLowerCase();
    setText(LowerText);
    props.showAlert("Converted into lowercase ","Success")
    }
const AfterUpdate=(event)=>{// jo user value change kar raha hai vo value as a event aayegi 
    setText(event.target.value )
  }
const clearText=()=>{
    setText('');
    props.showAlert("Clear text here","Success");
}
  return (
    <>
    <div className="container">
<div className="container mb-3">
  <label htmlFor="myBox" className="form-label"><h2>{props.heading}</h2></label>
<textarea className='txt-cls form-control '  style={{backgroundColor:props.mode==='dark'?props.bgChanger:'white',color:props.mode==='dark'?'white':'black'}}value={text} onChange={AfterUpdate}id="exampleFormControlTextarea1"

  // in upper line value of the text area will be a text that is given and when we will do change that value than the onChange function will fire and it will do change the value of the textArea 
  rows="5"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-dark' style={{color:props.mode==='dark'?'dark':'btn btn-primary'}} onClick={Update}>
Convert to UpperCase
</button> 
<button disabled={text.length===0} className='btn btn-dark mx-3' onClick={LowerUpdate}>
Convert to LowerCase
</button>
<button disabled={text.length===0} onClick={copyTextOnClipBoard} className='btn btn-dark ' >
Copy
</button>
<button disabled={text.length===0} className='btn btn-dark mx-3' onClick={clearText}>
    Clear Text
</button>
<div className="container my-3">
    <h1>It is the summary</h1>
    <p>Word in the Textform are {text.split(/\s/).filter((element)=>{return element.length !== 0}).length} and Characters are {text.length}</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes will consume read the Textform</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Write something here for preview the text"}</p>
</div>
</div>
</>
  )
}

export default TextForm_using_stateHooks
