const dateEl1=document.getElementById('date-ele1')
const dateEl2=document.getElementById('date-ele2')
const dateEl3=document.getElementById('date-ele3')
const date= new Date()

const day =date.getDate()
const month =date.getMonth()
const year =date.getFullYear()

const finalDate=`${day} / ${month} / ${year}`
dateEl1.innerHTML=dateEl2.innerHTML=dateEl3.innerHTML=finalDate


const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "81001b0445msh2f5086ee08df230p1ce6aajsn1b9107783020",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};


const getWheather=(city)=> {
    cityName.innerHTML=city
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    tempBg= response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

}

const node = document.getElementById("inp");
node.addEventListener("keyup", function(event) {
    event.preventDefault()
    if (event.key === "Enter") {
        getWheather(node.value)
    }
})