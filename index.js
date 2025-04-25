let input = document.querySelector("input");

let button = document.querySelector("button");
let results=document.querySelector("#results")
const API_KEY = "dcd44db29990e0b4de20f37e49ce213a";

button.addEventListener("click", async () => {
  let CITY = input.value;
  console.log(CITY);
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&APPID=${API_KEY}`;

  let response = await fetch(URL);
  let results = await response.json();
  console.log(results);
  getdata (results)  
});
function getdata(arr){
      results.innerHTML=" "
     let div=document.createElement("div")
     div.innerHTML=`
     <h1 class="head">${arr.name} ${arr.sys.country}</h1>
     <p class="size">Temprature: ${arr.main.temp}  <sup>.</sup>C</p>
     <p class="size">Wind Speed: ${arr.wind.speed}  m/s</P>
    `
     arr.weather.forEach((element)=>{
       
        let i=document.createElement("P")
        i.innerHTML=`Description:   ${element.description}`
        div.append(i)
        
     })
    results.append(div)
     
     
     
}
