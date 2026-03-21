import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Feedback from './models/Feedback.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 5000 })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
// POST /api/feedback - Save new feedback
app.post('/api/feedback', async (req, res) => {
    try {
        console.log('API hit. Mongoose readyState:', mongoose.connection.readyState);
        console.log('Feedback model DB readyState:', Feedback.db.readyState);
        const { nickname, review, rating } = req.body;
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ message: 'Failed to save feedback' });
    }
});
