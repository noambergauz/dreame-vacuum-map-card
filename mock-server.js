import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.VITE_MOCK_SERVER_PORT || 3001;

app.use(cors());
app.use(express.json());

// Load mock data
const mockData = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'mock-data.json'), 'utf-8')
);

// Mock Home Assistant states endpoint
app.get('/api/states/:entity_id', (req, res) => {
    const { entity_id } = req.params;

    if (entity_id === mockData.entity_id) {
        res.json(mockData);
    } else {
        res.status(404).json({ error: 'Entity not found' });
    }
});

// Mock Home Assistant all states endpoint
app.get('/api/states', (req, res) => {
    res.json([mockData]);
});

// Mock Home Assistant service calls
app.post('/api/services/:domain/:service', (req, res) => {
    console.log('Service called:', req.params.domain, req.params.service, req.body);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Mock server running on http://localhost:${PORT}`);
    console.log(`Entity ID: ${mockData.entity_id}`);
});
