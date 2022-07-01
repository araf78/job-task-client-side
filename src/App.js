import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Calender from "./Pages/Calender";
import ToDo from "./Pages/ToDo";
import Form from "./Pages/ToDo/Form";

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/form" element={<Form />} />
       <Route path="/calender" element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  );
}

export default App;
