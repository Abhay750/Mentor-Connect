import express from 'express';

const app = express();

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Mentor Connect API is running',
    timestamp: new Date().toISOString()
  });
});

export default app;
