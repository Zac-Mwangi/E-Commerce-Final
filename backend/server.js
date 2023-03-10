require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");

// express app
const app = express();

// cors
const cors= require('cors');

// middleware
app.use(express.json());

// Allow Cross-Origin Requests from all
app.use(cors({
  origin: '*'
}));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.send("We're up and running ✈🌍");
});

app.use("/api/products", productRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });


// Export the Express API
module.exports = app;