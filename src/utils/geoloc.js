export const getLatLongAsync = async () => {
    return new Promise(async (resolve, reject) => {
        function success(position) {
            const lat = position.coords.latitude;
            const longt = position.coords.longitude;
            //console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            return resolve([lat, longt])
        }
        function error() {
            return reject("Unable to retrieve your location");
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            return reject("Geolocation not supported");
        }
    }
    )
};