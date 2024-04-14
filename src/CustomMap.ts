// instructions to every other class on how they can be an arument to addMarker
interface Mappable {
    location: {
        lat: number,
        lng: number
    }
};

interface Clickable {}

export class CustomMap {
    // we put the private modifier on the property 'googleMap' so that
    // other devs can't reference this property outside of this class: We are limiting the
    // available methods so that this property can't be used in any other way than intended.
    private googleMap: google.maps.Map;

    constructor(divId: string, lattitude: number, longitude: number) {
        const position = { lat: lattitude, lng: longitude };

        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement,
        {
            zoom: 1,
            center: position
        });
    }
        addMarker(mappable: Mappable): void {
            const marker = new google.maps.Marker({
                map: this.googleMap,
                position: {
                    lat: mappable.location.lat,
                    lng: mappable.location.lng
                }
            });

            marker.addListener('click', () => {
                const infoWindow = new google.maps.InfoWindow({
                    content: 'Ahoy maytee'
                });

                infoWindow.open(this.googleMap, marker)
            })
        }
}
