const axios = require('axios');

const getClima = async(lat, lgn) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lgn}&cnt=10&units=metric&appid=647caefa68f89145d901b893e2af10c1`);
    if (resp.data.cod === "400") {
        throw new Error("No hay resultados");
    }
    return resp.data.list[0].main.temp;
}

module.exports = { getClima }