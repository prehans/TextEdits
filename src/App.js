
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';  
/*<div className='container'>
<TextForm text="Enter the text to analyze"/>
</div>  
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";*/
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('dark');  //hooks , wheteher dark mode is enable or not
  document.body.style.backgroundColor='#042743';
  const toggleMode=()=>{
  if(mode==='light')
  {setMode('grey');
  document.body.style.backgroundColor='gainsboro';
   }
   else{
    setMode('light');
    document.body.style.backgroundColor='light';
   }
  
  }
  return (
   <> 
  
{/*<Navbar title="NavBar" aboutText="About Us" home="Home" mode={mode} toggleMode={toggleMode} />
<div className='container'> */}

      <Navbar title ="TxtEdtrs" mode={mode} toggleMode={toggleMode}/>
  
      <div className="container my-3">
    {/*}  <Routes>
        <Route path="/about" />
        <About/>
        <Route path="/" >
        <TextForm heading="Enter your text here" mode={mode}/>
        </Route>
      </Routes>
      </div>
</Router>*/}


<TextForm text="Enter the text to analyze"/>
</div>
    </>
  );
}

export default App;

