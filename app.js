const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: "d",
        desc: "Disección de la ciudad",
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// clima.getClima(9.9280694, -84.0907246).
// then(temp => console.log(temp))
//     .catch(e => console.log(e));

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de  ${temp}`
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));