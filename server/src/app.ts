import express from 'express';

// Create app
const app = express();
app.use(express.json());
app.get('/api', (_, res) => res.status(200).json({ message: 'Hello world' }));

export default app;
