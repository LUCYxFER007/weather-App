// document.querySelector('#button').addEventListener('click',()=>{

//     const place = document.getElementById('location').value;
    
//     function updateTemp(data){
//        const element = document.getElementById('weatherInfo');
//        element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;
//     }

//     const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=${place}&aqi=yes`)
    


//     prom
//     .then(response=>response.json())
//     .then(data=> updateTemp(data));



// })

let button = document.getElementById("button");

button.addEventListener("click", () => {
    let element = document.getElementById("weatherInfo");
    const place = document.getElementById("location").value;

    fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=${place}&aqi=yes`)
        .then(response => response.json())
        .then(data => {
            element.innerText = data.current.temp_c + "°C";
        })
        .catch(error => {
            console.error(error);
            element.innerText = "Failed to fetch weather.";
        });
});