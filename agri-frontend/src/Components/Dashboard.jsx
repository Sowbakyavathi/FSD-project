import "./Dashboard.css";
import dashboardImg from "../assets/Dashboard.jpg";

export default function Dashboard() {
  return (
    <div className="page">
      <div className="dashboard">
        <h1>
          <i className="fa-solid fa-seedling"></i> Dashboard
        </h1>

        <img src={dashboardImg} alt="Dashboard" />

        <p>
         ... ✨ Welcome!🌼 Manage crops🌾 efficiently, add🌱 new crops and 🌽 view crop details ✨ ...
        </p>
      </div>
    </div>
  );
}
