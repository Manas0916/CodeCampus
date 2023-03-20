import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from './components/Home';
import Project from './components/Project';
import Resume from './components/Resume';
import TcsNqtPrep from './components/TcsNqtPrep';
import PBC from './components/PBC';
import DsaCp from './components/DsaCp';
import Telegram from './components/Telegram';
import Youtube from './components/Youtube';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
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
