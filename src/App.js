import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { useEffect } from 'react';
// import Home from './components/Home';
import About from './components/About';
import VirtualLab from './components/VirtualLab';
import Project from './components/Project';
import Resume from './components/Resume';
import TcsNqtPrep from './components/TcsNqtPrep';
import PBC from './components/PBC';
import DsaCp from './components/DsaCp';
import Telegram from './components/Telegram';
import Youtube from './components/Youtube';
import PageNotFound from './components/PageNotFound';
import React, { useState} from 'react';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Login from './components/Login';

function App() {

  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      localStorage.setItem('mode', 'dark');
      document.body.classList.toggle('dark');
      document.body.style.backgroundColor = '#3f404a';
    }
    else{
      setMode('light');
      localStorage.setItem('mode', 'light');
      document.body.classList.toggle('light');
      document.body.style.backgroundColor = '#eeecea';
    }
  }
  useEffect(() => {
    // console.log(mode);
    if(mode !== null && mode === 'light'){
      setMode('light');
      document.body.classList.toggle('light');
      document.body.style.backgroundColor = '#eeecea';
    }
    if(mode !== null && mode === 'dark'){
      setMode('dark');
    }
  }, [mode, setMode]);


  return (
    <>
    <div className='App'>
      <Router>
       <Navbar mode = {mode} toggleMode={toggleMode}/> 
        <Routes>
          <Route exact path="/" element={<Login mode = {mode} toggleMode={toggleMode}/>}></Route>
          <Route exact path="/about" element={<About mode={mode} />}></Route>
          <Route exact path="/virtuallab" element={<VirtualLab mode={mode} />}></Route>
          <Route exact path="/project" element={<Project mode={mode}/>}></Route>
          <Route exact path="/resume" element={<Resume mode={mode}/>}></Route>
          <Route exact path="/tcsnqtprep" element={<TcsNqtPrep mode={mode}/>}></Route>
          <Route exact path="/ProductBasedPrep" element={<PBC mode={mode}/>}></Route>
          <Route exact path="/DsaCp" element={<DsaCp mode={mode}/>}></Route>
          <Route exact path="/telegram" element={<Telegram mode={mode}/>}></Route>
          <Route exact path="/youtube" element={<Youtube mode={mode} />}></Route>
          <Route exact path="/contact" element={<Contact mode={mode} />}></Route>
          <Route path="*" element={<PageNotFound mode={mode} />}></Route>
        </Routes>
        <Footer/>
      </Router>
     </div>
    </>
  );
}

export default App;