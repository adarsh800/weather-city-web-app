const weatherDisplay = document.querySelector('.weather')
const weatherForm = document.querySelector('#weather-form')
const cityInput = document.querySelector('#city-input')
let country = '';
let weatherCondition = '';
let geoRegion = '';
let feelslike = 0;
let description = '';
let icon = '';

// Fetch weather data from API
const fetchWeather = async (city) => {
  const url = `/api?q=${city}`

  const res = await fetch(url)
  const data = await res.json()

  if (data.cod === '404') {
    alert('City not found')
    return
  }

  if (data.cod === 401) {
    alert('Invalid API Key')
    return
  }

  const displayData = {
    city: data.name,
    temp: kelvinToFahrenheit(data.main.temp),
    feelslike: kelvinToFahrenheit(data.main.feels_like),
    country: data.sys.country,
    weather: data.weather[0].main,
    description: data.weather[0].description,
    icon : data.weather[0].icon,
    
  }
  country=displayData.country;
  weatherCondition=displayData.weather;
  feelslike = displayData.feelslike;
  description = displayData.description;
  icon = displayData.icon;
  addWeatherToDOM(displayData)
}

// Add display data to DOM
const addWeatherToDOM = (data) => {
  weatherDisplay.innerHTML = `
    <h1>${data.city}, ${country}</h1>
    <h2 style="margin : 0; display: inline-block;">
    <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${weatherCondition}"></img>
    ${data.temp} &deg;C</h2>
    <h3>Feels like ${feelslike}&deg;C , ${weatherCondition}</br> It is currently ${description} in ${data.city}</h3>
  `
  cityInput.value = ''
}

// Convert Kelvin to Fahrenheit
const kelvinToFahrenheit = (temp) => {
  return Math.ceil(temp - 274.15)
}

// Event listener for form submission
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  if (cityInput.value === '') {
    alert('Please enter a city')
  } else {
    fetchWeather(cityInput.value)
  }
})


// Initial fetch
fetchWeather('Delhi');

function myFunction() {
  switch(weatherCondition){
  case 'Thunderstorm':
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/08/04/20/53/lightning-5463845_960_720.jpg')";
    break;
  case 'Drizzle':
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2019/10/30/21/53/gods-gift-4590648_960_720.jpg')";
    break;

  case 'Rain':
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/06/05/20/41/girl-1438138_960_720.jpg')";
    break;
  
  case 'Snow':
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/02/19/10/47/street-1209401_960_720.jpg')";
    break;
  case 'Mist':
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/11/09/18/52/gondola-1035684_960_720.jpg')";
    break;
  case 'Smoke':
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2019/03/11/12/03/landscape-4048473_960_720.jpg')";
    break;
  case 'Haze':
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/02/07/09/45/city-2045453_960_720.jpg')";
    break;
  case 'Dust':
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2014/10/10/01/22/monument-valley-482726_960_720.jpg')";
    break;
  case 'Fog':
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/07/19/01/40/city-2517650_960_720.jpg')";
    break;
  case 'Sand':
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2019/08/28/12/20/landscape-4436637_960_720.jpg')";
    break;
  case 'Ash':
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2019/12/22/10/25/city-4712201_960_720.jpg')";
    break;
  case 'Squall':
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/03/07/19/16/thunderstorm-3206860_960_720.jpg')";
    break;
  case 'Tornado':
    document.body.style.backgroundImage = "url('httcdn.pixabay.com/photo/2018/02/28/23/02/tornado-3189351_960_720.jpg')";
    break;
  case 'Clear':
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/10/31/02/47/city-1784769_960_720.jpg')";
    break;
  case 'Clouds':
    document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2021/08/28/15/38/cityscape-6581262_960_720.jpg')";
    break;
}
}