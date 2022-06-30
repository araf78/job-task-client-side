import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </div>
  );
}

export default App;
