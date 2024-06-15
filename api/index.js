import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


//Connect to DB

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Mongoose is connected');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});