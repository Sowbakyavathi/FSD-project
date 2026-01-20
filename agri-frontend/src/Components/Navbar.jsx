import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <i className="fa-solid fa-leaf"></i> Agriculture App
      </h1>

      <div className="nav-links">
        <Link to="/">
          <i className="fa-solid fa-seedling"></i> Dashboard
        </Link>

        <Link to="/add">
          <i className="fa-solid fa-plus"></i> Add Crop
        </Link>

        <Link to="/list">
          <i className="fa-solid fa-list"></i> Crop List
        </Link>
      </div>
    </nav>
  );
}
