const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./utils/connectDB");
const router = require("./router/auth-router");

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Routes
app.use("/api/auth", router);

// Connect to DB
connectDB().then(() => {
    app.listen(5000, () => console.log(`Server started on port http://localhost:5000`));
})
