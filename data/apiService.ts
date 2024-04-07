import axios from 'axios';

export class ApiService {
    private mapsApiKey: string;

    constructor(mapsApiKey: string) {
        this.mapsApiKey = mapsApiKey;
    }

    async fetchData(): Promise<any> {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/js?key=${this.mapsApiKey}`);
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch data from the maps API')
        }
    }
}
