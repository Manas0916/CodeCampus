import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from './components/Home';
import Java from './components/Java';
import Project from './components/Project';
import Resume from './components/Resume';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/java" element={<Java/>}></Route>
          <Route exact path="/project" element={<Project/>}></Route>
          <Route exact path="/resume" element={<Resume/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
