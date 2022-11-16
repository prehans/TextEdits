import React ,{useState}from 'react'
export default function TextForm(props) {
  const handleUpclick=()=>{
    //console.log("uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleToLower=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const clear=()=>{
    let newText="";
    setText(newText);
  }
  const [text , setText]=useState("Enter text here");
const handleOnchange =(event)=>{
   // console.log("On change"); 
    setText(event.target.value)
  }
  
  return (
    <>
    <div className="container" >
      <h1>{props.heading}</h1>
<div className="mb-3">
     <label for ="myBox" class="form-label"><h1 style={{color: 'white'} }><b>Text-Area</b></h1>  </label> 
  <textarea className="form-control"value={text} onChange={handleOnchange} style={{backgroundColor: 'grey'} } id="myBox" rows="8"></textarea>
</div>   
<button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to UpperCase</button>  
<button className="btn btn-primary mx-2" onClick={handleToLower}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
    </div>


<div className="container my-1">
<h2 style={{color: 'white'} }>Your Text Summary</h2>
<p style={{color: 'white'} }>{text.split(" ").length} words and {text.length} characters and {text.split(/\r\n|\r|\n/).length} Lines</p>
<h2 style={{color: 'white'} }>Preview</h2>
<p style={{color: 'white'} }>{text}</p>
</div>
</>
  )
  }

