import "./CropList.css";
import cropListImg from "../assets/CropList.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CropList() {
  const [crops, setCrops] = useState([]);

 
  const fetchCrops = () => {
    axios
      .get("http://localhost:5000/crops")
      .then((res) => setCrops(res.data))
      .catch(() => setCrops([]));
  };

  useEffect(() => {
    fetchCrops();
  }, []);

 
  const deleteCrop = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/delete-crop/${id}`);
      fetchCrops(); 
    } catch (err) {
      alert("Error deleting crop");
    }
  };

  return (
    <div className="page">
      <div className="crop-list">
        <h2>
          <i className="fa-solid fa-list"></i> Crop List
        </h2>

        <img src={cropListImg} alt="Crop List" />

        {crops.length === 0 ? (
          <p>No crops available</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Crop Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {crops.map((c) => (
                <tr key={c._id}>
                  <td>{c.cropName}</td>
                  <td>{c.quantity}</td>
                  <td>{c.price}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteCrop(c._id)}
                    >
                      <i className="fa-solid fa-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
