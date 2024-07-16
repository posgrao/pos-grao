import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser'; // Use import instead of require
import cors from 'cors';

dotenv.config();

// Connect to DB
// mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Database is connected');
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   });
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Database is connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5174', // Adjust origin to match your Vite development server
  credentials: true
}));
app.use(express.json()); // For parsing application/json
app.use(cookieParser()); // For parsing cookies

// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500; // Default to 500 if err.statusCode is not defined
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});

// Start Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
