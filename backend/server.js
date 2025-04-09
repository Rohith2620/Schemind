import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/schemind';

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ DB Connection Error:", err));

app.use(express.json());
app.use(cors());

// Auth check placeholder
app.get('/api/auth/status', (req, res) => {
  res.json({ authenticated: false });
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

// Validation helpers extracted