const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodeURL = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y`)

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let location = resp.data.results[0];
    let coor = location.geometry.location;
    //console.log(respuesta);
    //console.log(respuesta.data);
    //console.log(respuesta.status);
    /*
    console.log(respuesta.data.results[0].formatted_address);
    console.log(`Logitud ${respuesta.data.results[0].geometry.location.lng}`);
    console.log(`Lagtitud ${respuesta.data.results[0].geometry.location.lat}`);
    */
    return {
        direccion: location.formatted_address,
        lng: coor.lng,
        lat: coor.lat
    }
}

module.exports = {
    getLugarLatLng
}