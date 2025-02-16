// backend/app.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(`${process.env.MONGO_URI}/crud-app`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Server running on port ${PORT}`));
