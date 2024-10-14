import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState("light")
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("warning","Dark mode has been enabled")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white '
      showAlert("success","Light mode has been enabled")
    }
  }
  const [alert,setAlert]=useState(null);
  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      msg:message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" textAbout="About us" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/> }/>
        <Route exact path="/about" element={<About/>}/>
      </Routes> 
    </BrowserRouter>
    </> 
  );
}

export default App;
