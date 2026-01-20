import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/agricultureDB")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error:", err));

const cropSchema = new mongoose.Schema({
  cropName: { type: String, required: true },
  quantity: { type: String, required: true },
  price: { type: String, required: true },
}, { timestamps: true });

const Crop = mongoose.model("Crop", cropSchema);

app.get("/", (req, res) => {
  res.send("Agriculture server is running!");
});

app.post("/add-crop", async (req, res) => {
  try {
    const { cropName, quantity, price } = req.body;
    if (!cropName || !quantity || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newCrop = new Crop({ cropName, quantity, price });
    await newCrop.save();
    res.status(201).json({ message: "Crop added successfully", crop: newCrop });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/crops", async (req, res) => {
  try {
    const crops = await Crop.find().sort({ createdAt: -1 });
    res.status(200).json(crops);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/delete-crop/:id", async (req, res) => {
  try {
    await Crop.findByIdAndDelete(req.params.id);
    res.json({ message: "Crop deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
