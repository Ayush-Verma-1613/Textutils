
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import switch from './react-router-dom';
import Textform from './Components/Textform';
import Alert from './Components/Alert';


function App() {
  // const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element: <><Navbar /><Textform heading="Enter the text to analyze below" mode={mode} /></>
  //   },{
  //     path: "/About",
  //     element: <><Navbar /><About/></>
  //   },
  // ])

  // const [color, setColor] = useState('light')
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=> {
    setAlert({
      msg:message,
      type: type
    })
  }
  // const changeMode =()=>{
  //   if(color === 'light'){
  //     setColor('grey');
  //     document.body.style.backgroundColor = '#363636';
  //     showAlert("grey mode is enabled","Success");
  //   }
  //   else{
  //     setColor('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("light mode is enabled","Success");
  //   }
  // }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled","Success");
      document.title ='dark mode is on now'
      // setInterval(() => {
      //  document.title ='dark mode is on now';
      // },2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabld","Success");
  }
  }
  // const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element: <><Navbar /><Textform heading="Enter the text to analyze below" mode={mode} /></>
  //   },{
  //     path: "/About",
  //     element: <><Navbar /><About/></>
  //   },
  // ])

  return (
    <>
     {/* <BrowserRouter>
        <Navbar title='TextUtils' About='About Us' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
        <Routes>
        <Route path="/" element={<Textform heading='Enter the text to analyze below' mode={mode} />} />
        <Route  path="/About" element={<About />} />
      </Routes>
        </div>
      </BrowserRouter> */}
      <Navbar title='TextUtils' About='About Us' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Textform heading='Enter the text to analyze below' mode={mode} />
    </>
  );
  }

export default App;
