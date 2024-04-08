import axios from 'axios';

export class ApiService {
    static async fetchMapScript(mapsApiKey: string): Promise<string> {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/js?key=${mapsApiKey}`, {
                params: {
                    api_key: mapsApiKey
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch data from the Google Maps API')
        }
    }
}
