import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import AddCrop from "./Components/AddCrop";
import CropList from "./Components/CropList";
import "./App.css";

function App() {
  return (
    <Router>
      
      <nav className="app-nav">
        
        <div className="app-logo">
          <i className="fa-solid fa-leaf"></i> Agriculture App
        </div>

      
        <div className="app-nav-items">
          <Link to="/" className="app-nav-item">
            <i className="fa-solid fa-seedling"></i> Dashboard
          </Link>
          <Link to="/add" className="app-nav-item">
            <i className="fa-solid fa-plus"></i> Add Crop
          </Link>
          <Link to="/list" className="app-nav-item">
            <i className="fa-solid fa-list"></i> Crop List
          </Link>
        </div>
      </nav>

     
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddCrop />} />
        <Route path="/list" element={<CropList />} />
      </Routes>
    </Router>
  );
}

export default App;
