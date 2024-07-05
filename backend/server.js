const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./utils/connectDB");


// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies



app.get("/", (req, res) => {
    res.send("Hello from backend");
})



connectDB().then(() => {
    app.listen(5000, () => console.log(`Server started on port http://localhost:5000`));
})
