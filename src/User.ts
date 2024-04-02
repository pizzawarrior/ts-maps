import { faker } from "@faker-js/faker";

class User {
    name: string;
    location: {
        lat: number;
        lon: number;
    };
    constructor() {
        this.name = faker.name.firstName();
        // we have to instantiate the object AND the values inside the object
        this.location = {
            // the docs show the type for latitude and longitude being strings
            // this is why we are converting them to decimals here using parseFloat
            lat: parseFloat(faker.address.latitude()),
            lon: parseFloat(faker.address.longitude())
        }
    }
}
