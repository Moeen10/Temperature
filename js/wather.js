const ApiKey = `f0a6632597975c9c240497b83eedb315`;
searchTemperature = () => {
    const CityName = document.getElementById('city-name').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${ApiKey}`)
        .then(res => res.json())
        .then(data => displayTemperature(data, ));
}

const displayTemperature = temp => {
    console.log(temp);
    document.getElementById('city').innerText = temp.name;
    if (temp.weather[0].main == 'Haze') {
        document.getElementById('body').style.cssText = `
        background: url(images/haze1.jpg) no-repeat;
        background-size: cover;
        height: 100vh;`
    } else if (temp.weather[0].main == 'Clouds') {
        document.getElementById('body').style.cssText = `
        background: url(images/cloudO.jpg) no-repeat;
        background-size: cover;
        height: 100vh;`

    } else if (temp.weather[0].main == 'Rain') {
        document.getElementById('body').style.cssText = `
        background: url(images/rain.jpg) no-repeat;
        background-size: cover;
        height: 100vh;`
    } else if (temp.weather[0].main == 'Drizzle') {
        document.getElementById('body').style.cssText = `
        background: url(images/drizzle.png) no-repeat;
        background-size: cover;
        height: 100vh;`
    } else if (temp.weather[0].main == 'Clear') {
        document.getElementById('body').style.cssText = `
        background: url(images/clear.PNG) no-repeat;
        background-size: cover;
        height: 100vh;
        `
    }
    document.getElementById('condition').innerText = temp.weather[0].main;
    document.getElementById('temperature').innerText = (temp.main.temp - 273.15).toFixed(2);
    document.getElementById('weather-icon').setAttribute('src', `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`)

}