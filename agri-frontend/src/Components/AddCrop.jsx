import "./AddCrop.css";
import addCropImg from "../assets/AddCrop.jpg";
import { useState } from "react";
import axios from "axios";

export default function AddCrop() {
  const [crop, setCrop] = useState({
    cropName: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    setCrop({ ...crop, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/add-crop", crop);
      alert("Crop Added Successfully!");
      setCrop({ cropName: "", quantity: "", price: "" });
    } catch (err) {
      alert(" Error adding crop");
    }
  };

  return (
    <div className="page">
      <div className="add-crop">
        <h2>
          <i className="fa-solid fa-plus"></i> Add New Crop
        </h2>

        <img src={addCropImg} alt="Add Crop" />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="cropName"
            placeholder="Crop Name"
            value={crop.cropName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={crop.quantity}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="price"
            placeholder="Price"
            value={crop.price}
            onChange={handleChange}
            required
          />

          <button type="submit">
            <i className="fa-solid fa-check"></i> Add Crop
          </button>
        </form>
      </div>
    </div>
  );
}
