import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
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
    <Navbar title="TextUtils" textAbout="About us" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    {/* <About/> */}
    <TextForm heading="Enter your text below" mode={mode} showAlert={showAlert}/>
    </> 
  );
}

export default App;
