const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const errHandler = require('./middleware/error');

//Load env vars
dotenv.config({ path: './config/config.env' });

// Connect DB;
connectDB();

const app = express();

// Body parser
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Get routes
app.use('/api/v1/bootcamps', require('./routes/bootCamp'));
app.use('/api/v1/courses', require('./routes/course'));

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
