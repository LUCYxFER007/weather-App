let button = document.getElementById("button");

button.addEventListener("click", () => {
    let element = document.getElementById("weatherInfo");
    const place = document.getElementById("location").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=bd5e378503939ddaee76f12ad7a97608&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod != 200) {
                element.innerText = data.message;
                return;
            }

            element.innerText = data.main.temp + "°C";
        })
        .catch(error => {
            console.error(error);
            element.innerText = "Failed to fetch weather.";
        });
});