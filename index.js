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
    console.log(arr)
      results.innerHTML=" "
      input.value=""
    if(arr.cod==404){
      alert("hello")
    }else{
        let div=document.createElement("div")
        div.innerHTML=`
        <h1 class="head">${arr.name} ${arr.sys.country}</h1>
        <p class="size">Temprature: ${arr.main.temp}  <sup>o</sup>F</p>
        <p class="size">Wind Speed: ${arr.wind.speed}  KM/H</P>
       `
        arr.weather.forEach((element)=>{
          
           let i=document.createElement("P")
           i.innerHTML=`Description:   ${element.description}`
           let image=document.createElement("img")
           image.src=`https://openweathermap.org/img/wn/${element.icon}@2x.png`
       

           
          
           div.append(i)
           div.append(image)
           
        })
       results.append(div)
        
    }
    
   

     
}
