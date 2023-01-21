import Dashboard from "./components/Dashboard"
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEvent from "./components/AddEvent";
import Description from "./components/Description";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path ="/event" element ={<AddEvent/>}/>
          <Route path="/addevent" element ={<AddEvent/>}/>
          <Route path="/description" element ={<Description/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
