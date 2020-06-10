const express = require("express");
const dotenv = require("dotenv");

//Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

//Get routes
app.use('/api/v1/bootcamp', require('./routes/bootCamp'));

app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
