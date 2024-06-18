import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors'; // Import cors package


dotenv.config();

//Connect to DB
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Database is connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();

app.use(cors()); // Use CORS middleware

app.use(express.json());


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500; // Default to 500 if err.statusCode is not defined
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    sucesss: false,
    statusCode,
    message
  });
});