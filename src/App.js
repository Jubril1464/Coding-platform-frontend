import "./App.css";
import Homepage from "./Pages/HomePage/Homepage";
import Nav from "./Component/Nav/Nav";
import HowWeMeet from "./Pages/HomePage/HowWeMeet/HowWeMeet";
import Event from "./Pages/HomePage/Event/Event";
import Moment from "./Pages/Moment/Moment";
import Engagement from "./Component/Engagement/Engagement";

function App() {
  return (
    <div className="App">
      <Nav />
      <Homepage />
      <HowWeMeet />
      <Event />
      <Moment />
      <Engagement />
    </div>
  );
}

export default App;
