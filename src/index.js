const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();



// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
const userRoute = require('./routes/usuarios')
const suRoute = require('./routes/sucursales')
const prodRoute = require('./routes/productos')
const veRoute = require('./routes/ventas')
const paRoute = require('./routes/pagos')
const roRoute = require('./routes/roles')



// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});
app.use(express.json());
app.use('/api', suRoute)
app.use('/api', prodRoute)
app.use('/api', paRoute)
app.use('/api', veRoute)
app.use('/api', roRoute)
app.use('/api', userRoute)

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));
