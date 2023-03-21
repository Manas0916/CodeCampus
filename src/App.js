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
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "#111827";
    }
  };




  return (
    <div className="App">
      <Router>
        <Navbar mode = {mode} toggleMode={toggleMode}/>
        <Routes>
          <Route exact path="/" element={<Home mode = {mode} toggleMode={toggleMode}/>}></Route>
          <Route exact path="/virtuallab" element={<VirtualLab/>}></Route>
          <Route exact path="/project" element={<Project/>}></Route>
          <Route exact path="/resume" element={<Resume/>}></Route>
          <Route exact path="/tcsnqtprep" element={<TcsNqtPrep/>}></Route>
          <Route exact path="/ProductBasedPrep" element={<PBC/>}></Route>
          <Route exact path="/DsaCp" element={<DsaCp/>}></Route>
          <Route exact path="/telegram" element={<Telegram/>}></Route>
          <Route exact path="/youtube" element={<Youtube/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
