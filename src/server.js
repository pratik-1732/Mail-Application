const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Consider using CORS for cross-origin requests

const mailRoutes = require("./routes/mail"); // Assuming mail routes are defined in another file

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/mail-sender", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Middleware
app.use(cors()); // Consider enabling CORS based on your needs
app.use(bodyParser.json());

// Routes
app.use("/api/mail", mailRoutes);

app.listen(port, () => console.log(`Server listening on port ${port}`));
