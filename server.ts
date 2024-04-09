import express from 'express';
import path from 'path';
import { ProxyController } from './controllers/proxyController';

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Define route handler for /api/proxy
app.get('/api/proxy', ProxyController.mapsProxyHandler);

// Define route handler for the root URL to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
