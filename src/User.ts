import { faker } from "@faker-js/faker";

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.name = faker.name.firstName();
        // we have to instantiate the object AND the values inside the object
        this.location = {
            // the docs show the type for latitude and longitude being strings
            // this is why we are converting them to decimals here using parseFloat
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}
