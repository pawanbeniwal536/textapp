import React, { useState} from "react";
import Navbar from "./Components/Navbar_using_props";
import TextForm from "./Components/TextForm_using_stateHooks";
// import About from "./Components/About"
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

const App=()=>{
  const[mode,setMode]=useState("light")
  const[alert,setAlert]=useState("null")
  const[bgChanger,setBgChanger]=useState("null")
  const[aboutChanger,setAboutChanger]=useState("null")

  const showAlert=(message,type)=>{
  setAlert(
    {
      msg:message,
      type:type
    }
  )
  setTimeout(()=>{
    showAlert(null)
  },2000)
  }
  const toggleMode=(cls)=>{
    if (cls==='Primary'){
      document.body.style.backgroundColor='#0d6efd';
      document.body.style.color='white'
      setBgChanger("#0d6efd")
      setAboutChanger("#0d6efd")
      setMode("dark")
    }
    else if(cls==='Success'){
      document.body.style.backgroundColor="green"
      document.body.style.color='white'
      setBgChanger("green")
      setAboutChanger("green")
      setMode("dark")
    }
    else if(cls==='Danger'){
      document.body.style.backgroundColor="#ff0e0e"
      document.body.style.color='white'
      setBgChanger("#ff0e0e")
      setAboutChanger("#ff0e0e")
      setMode("dark")
    }
    else if(cls==='Warning'){
      document.body.style.backgroundColor="#f0ad4e"
      document.body.style.color='white'
      setBgChanger("#f0ad4e")
      setAboutChanger("#f0ad4e")
      setMode("dark")
    }
    else if(cls==='Info'){
      document.body.style.backgroundColor="#5bc0de"
      document.body.style.color='white'
      setBgChanger("#5bc0de")
      setAboutChanger("#5bc0de")
      setMode("dark")
    }
    else if(mode==='dark'){
      setMode("light")
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      setAboutChanger("null")
      showAlert("Light mode is enabled ","Success")
      // document.title ="Textutils - Lightmode Enable"
    }
    else {
      setMode("dark");
      setBgChanger("gray")
      document.body.style.backgroundColor='gray'
      document.body.style.color='white'
      setAboutChanger("gray")
      showAlert("dark mode is enabled ","Success")
      // document.title ="Textutils - Darkmode Enable"
    }
  }
return(
  <>
 
 <Navbar tittle="TextUtils" navbg={mode} togglemode={toggleMode} colorChanger={aboutChanger}/>
 <Alert alert={alert}/>
<TextForm bgChanger={bgChanger} showAlert={showAlert} mode={mode}/>
{/* <Router> */}
{/* <Navbar tittle="TextUtils" navbg={mode} togglemode={toggleMode} colorChanger={aboutChanger}/> */}
{/* <Navbar/>  */}
{/* <Alert alert={alert}/> */}
   {/* <Routes> */}
        {/* <Route path="/about" element={<About bgChanger={aboutChanger}/>} /> */}
        {/* <Route path="/"element={<TextForm bgChanger={bgChanger} showAlert={showAlert} mode={mode}/>}/> */}
      {/* </Routes> */}
      {/* </Router> */}
      
</>
)
}
export default App;