const button = document.getElementById("search-btn");
const input = document.getElementById("city-input");

const cityName = document.getElementById('city-name');
const citytime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData (cityName){
   const promis = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=0e80df52a2c04564b6250135242606&q=${cityName}&aqi=yes`
)

   return await promis.json()
}


button.addEventListener("click", async()=>{
//  console.log(input.value)

const value = input.value;
const result = await  getData(value)
console.log(result);

cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
citytime.innerText = result.location.localtime;
cityTemp.innerText = result.current.temp_c;

})

