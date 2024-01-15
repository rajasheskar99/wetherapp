const cityText=document.getElementById("searchInput")
console.log(cityText.value);
const searchBtn=document.getElementById("searchBtn");
const imgIcon=document.getElementById("weatherImg")

const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const key="fa35eec484258fcca7d8a0d6f21922bf"
 
async function getData(cityName){
    const response=await fetch(url+ cityName +`&appid=${key}`)
    const data=await response.json()
    console.log(data)
    const imageText=data.weather[0].main
    console.log(imageText)
     
imgIcon.setAttribute("src",`images/${imageText}.png`)


    document.getElementById('temp').textContent=Math.round(data.main.temp)+'°c'
    document.getElementById('city').textContent= data.name
    document.querySelector('.humi').textContent=data.main.humidity+"%"
    document.querySelector('.win').textContent=data.wind.speed+"km/h";
}

getData("New York")


 
searchBtn.addEventListener('click', ()=>{
    getData(cityText.value)
    
})

 
 