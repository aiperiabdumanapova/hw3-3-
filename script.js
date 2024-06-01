document.querySelector('form').onsubmit = (event) => {
    event.preventDefault()
    const cityName = document.querySelector('input').value
    fetch('http://api.weatherapi.com/v1/current.json?key=7013c0154c9a44a892430916230407&q='+cityName).then ((response) => {
        console.log(response);
        return response.json()

    }).then((data) => {
        console.log(data);
        document.querySelector('section').innerHTML = `
        <h1>Страна:${data.location.country}</h1>
        <h1>Город:${data.location.name}</h1>
        <h1>Температура:${data.current.temp_c}градусов</h1>
        <h1>Скорость ветра:${data.current.wind_kph}</h1>
        <img src="${data.current.condition.icon}" alt="">
        `
    })
    .catch((error) => {
        document.querySelector('section').innerHTML = "Плохая связь или такого города нет";
    });
} 
