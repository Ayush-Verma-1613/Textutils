import React,{useState} from 'react'

export default function Textform(props){
  const handleUpClick = ()=> {
    // console.log("Uppercase was clicked"+text)
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handleLowClick = ()=> {
    // console.log("Uppercase was clicked"+text)
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  const handleClear = ()=> {
    // console.log("Uppercase was clicked"+text)<text className="toClea"></text>
    let newtext = '';
    setText(newtext);
  }
  const handleCopy = ()=> {
    var text = document.getElementById("my-box");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value)
  }

  const handleExtraSpaces= ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleOnChange= (event)=> {
    // console.log("On change");
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  // text="new text";// weong way to change the text
  // setText("new text");
  return(
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
   <p>
    {text.split(" ").length} words and {text.length} characters
   </p>
   <p>{0.008 *  text.split(" ").length} Minutes read </p>
   <h2>Preview</h2>
   <p>{text.length>0?text:"Enter to Something to preview it."}</p>
    </div>
    </>
  )
}