import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Card/>
    </div>
  );
}

export default App;
