import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from './components/Home';
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

function App() {
  // const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [mode, setMode] = useState('light');
  // const [darkMode, setDarkMode] = useState(storedDarkMode);


  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#3f404a';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#eeecea';
    }
    // setDarkMode(!darkMode);
  }

  // useEffect(() => {
  //   localStorage.setItem("DARK_MODE", darkMode);
  //   // console.log(`Is in dark mode? ${darkMode}`);
  // }, [darkMode]);

  return (
    <div className="App">
      <Router>
        <Navbar mode = {mode} toggleMode={toggleMode}/>
        <Routes>
          <Route exact path="/" element={<Home mode = {mode} toggleMode={toggleMode}/>}></Route>
          <Route exact path="/virtuallab" element={<VirtualLab mode={mode} />}></Route>
          <Route exact path="/project" element={<Project mode={mode}/>}></Route>
          <Route exact path="/resume" element={<Resume mode={mode}/>}></Route>
          <Route exact path="/tcsnqtprep" element={<TcsNqtPrep mode={mode}/>}></Route>
          <Route exact path="/ProductBasedPrep" element={<PBC mode={mode}/>}></Route>
          <Route exact path="/DsaCp" element={<DsaCp mode={mode}/>}></Route>
          <Route exact path="/telegram" element={<Telegram mode={mode}/>}></Route>
          <Route exact path="/youtube" element={<Youtube mode={mode} />}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
