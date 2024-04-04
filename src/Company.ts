import { faker } from "@faker-js/faker";

export class Company {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lon: number;
    }

constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
        lat: parseFloat(faker.address.latitude()),
        lon: parseFloat(faker.address.longitude())
    }
}
};
