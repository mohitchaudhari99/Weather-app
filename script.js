const key = "18dfee56d95f12763f59a64286bacab5";
// const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

const city = document.querySelector(".city");
const btn = document.querySelector(".btn");
const degree = document.querySelector(".degree");
const name = document.querySelector(".name");
const humidity = document.querySelector(".humidity");
const speed = document.querySelector(".speed");
const icon = document.querySelector(".img");

function weather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    return axios.get(url)
}

btn.addEventListener("click", () => {
    const val = city.value;
    weather(val)
        .then(({ data }) => {
            degree.textContent = Math.round(data.main.temp - 273.15) + "°C";
            name.textContent = data.name;
            humidity.textContent = data.main.humidity + "%";
            speed.textContent = data.wind.speed + "km/h";

            if (data.weather[0].main == "Clouds") {
                icon.src = "public/images/clouds.png";
            }
            else if (data.weather[0].main == "Clear") {
                icon.src = "public/images/clear.png";
            }
            else if (data.weather[0].main == "Rain") {
                icon.src = "public/images/rain.png";
            }
            else if (data.weather[0].main == "Drizzle") {
                icon.src = "public/images/drizzle.png";
            }
            else if (data.weather[0].main == "Mist") {
                icon.src = "public/images/mist.png";
            }
            else if (data.weather[0].main == "Snow") {
                icon.src = "public/images/snow.png";
            }
            // console.log(data);
        })
        .catch(() => {
            alert("Invalid City")
        })




})


