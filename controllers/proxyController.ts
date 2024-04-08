import { Request, Response } from "express";
import { ApiService } from "../data/apiService";
import dotenv from 'dotenv';

dotenv.config();

export class ProxyController {
    static async mapsProxyHandler(req: Request, res: Response): Promise<void> {
        const mapsApiKey: string | undefined = process.env.maps_api_key;

        if (!mapsApiKey) {
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        try {
            const scriptContent = await ApiService.fetchMapScript(mapsApiKey);
            res.send(scriptContent);
            console.log(mapsApiKey)
        } catch (error) {
            console.error('Error fetching Google Maps API script', error);
            res.status(500).send('Error fetching Google Maps API script');
        }
    }
}
