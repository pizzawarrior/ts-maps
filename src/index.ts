/// <reference types="@types/google.maps" />

import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap';

const user = new User();
console.log(user);

const company = new Company();
console.log(company)

// let map: google.maps.Map;

async function initMap(): Promise<void> {
    try {
        const response = await fetch('/api/proxy');
        const scriptContent = await response.text();
        eval(scriptContent);

        const position = { lat: 0, lng: 0 };

        new CustomMap('map')

    } catch (error) {
        console.error('Failed to initialize google map', error)
    }
}

initMap();
