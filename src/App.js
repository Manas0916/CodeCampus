import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from './components/Home';
import Java from './components/Java';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/java" element={<Java/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
