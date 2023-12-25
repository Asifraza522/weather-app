const apiKey="0f4d2a22d4579632967d30755d5aa7a3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(city){
    const response= await fetch(apiUrl  + city + `&appid=${apiKey}`)
    var data=await response.json();
    console.log(data);

document.querySelector(".temperature").innerHTML=Math.round(data.main.temp) + "°C";
document.querySelector(".city").innerHTML= data.name;
document.querySelector(".speed").innerHTML= data.wind.speed;
document.querySelector(".percentage").innerHTML= data.main.humidity + "%";
}
searchBtn.addEventListener("click", ()=>{
    console.clear();
    checkWeather(searchBox.value);
})



