export class CustomMap {
    // we put the private modifier on the property 'googleMap' so that
    // other devs can't reference this property outside of this class: We are limiting the
    // available methods so that this property can't be used in any other way than intended.
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        const position = { lat: 0, lng: 0 };
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement,
        {
            zoom: 1,
            center: position
        });
    }
}
