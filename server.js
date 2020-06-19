const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const errHandler = require('./middleware/error');
const fileUpload = require('express-fileupload');
const path = require('path');
const cookieParser = require('cookie-parser');

//Load env vars
dotenv.config({ path: './config/config.env' });

// Connect DB;
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser())

const PORT = process.env.PORT || 5000;

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// File uploading
app.use(fileUpload())

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Get routes
app.use('/api/v1/bootcamps', require('./routes/bootCamp'));
app.use('/api/v1/courses', require('./routes/course'));
app.use('/api/v1/auth', require('./routes/auth'));

//Error Handler
app.use(errHandler);

app.listen(PORT, () =>
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

// Handled unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  //  ServiceWorkerRegistration.close(() => process.exit(1));
});
