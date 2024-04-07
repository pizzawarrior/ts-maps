import { Request, Response } from "express";
import { ApiService } from "../data/apiService";

export class ProxyController {
    private apiService: ApiService;

    constructor(mapsApiKey: string) {
        this.apiService = new ApiService(mapsApiKey);
    }

    async proxyHandler(reg: Request, res: Response): Promise<void> {
        try {
            const data = await this.apiService.fetchData();
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' })
        }
    }
}
