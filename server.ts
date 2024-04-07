import express from 'express';
import dotenv from 'dotenv';
import { ProxyController } from './controllers/proxyController';

dotenv.config();

const app = express();
const PORT = 3000;

const mapsApiKey = process.env.maps_api_key;

if (!mapsApiKey) {
    console.error('maps_api_key is not defined in envirnoment');
    process.exit(1);
}

const proxyController = new ProxyController(mapsApiKey);

app.get('/api/proxy', (req, res) => proxyController.proxyHandler(req, res));

app.listen(PORT, () => {
    console.log(`Server is running on http:localhost:${PORT}`)
});
