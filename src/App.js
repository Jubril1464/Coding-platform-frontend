import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/HomePage/Homepage';
import Nav from './Component/Nav/Nav';
import HowWeMeet from './Pages/HomePage/HowWeMeet/HowWeMeet';
import Event from './Pages/HomePage/Event/Event';

function App() {
  return (
    <div className="App">
     
        <Nav />
      <Homepage />
      <HowWeMeet />
      <Event />
      
    </div>
  );
}

export default App;
