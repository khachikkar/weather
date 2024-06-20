
const weatherInfo = document.getElementById("weatherInfo");
const errorMessage = document.getElementById("error-message");
const search = document.getElementById("search")
const hel = document.getElementById("hel")
let cityName = document.getElementById("cityName")
let wicon = document.getElementById("wicon")


hel.addEventListener("click",()=>{
const apiKe = "e5b3f49657b2ccff409c34647081d13b";
let city = search.value
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKe}&units=metric`;

fetch(apiUrl)

    .then(response => {
        if (!response.ok) {
        throw new Error("Network response was not ok");
        }
        return response.json();
    })
.then(data => {
    const { main, weather , name, wind } = data

    let iconcode = weather[0].icon;
    let iconurl = `https://openweathermap.org/img/wn/${iconcode}@2x.png`
    wicon.src = iconurl


    cityName.textContent = name + "'s weather"

    console.log(data);
    weatherInfo.innerHTML = `
    Temperature: <span class="bold-text">${main.temp}°C</span> <br>
    Humidity: <span class="bold-text">${main.humidity}%</span> <br>
    Pressure: <span class="bold-text">${main.pressure}</span> <br>
    Status: <span class="bold-text">${weather[0].description}</span>, Cloud Condition: <span class="bold-text">${weather[0].main}</span> <br>
    Wind Deg: <span class="bold-text">${wind.deg}</span>, Wind speed: <span class="bold-text">${wind.speed}</span>
`;
    
})
.catch(err => {
errorMessage.innerHTML = "OOPS! There was an error fetching data.";
 console.error("Fetch error:", err);
 cityName.innerHTML = ""
 weatherInfo.innerHTML = ''
 setTimeout (()=>{
    errorMessage.innerHTML = ""
 }, 2000) 
});

let myPhoto = document.getElementById("myphoto")
let query = search.value

// All requests made with the client will be authenticated
let apiKey = "8mZtsnd0HrHL5hu5tOjIhhIKq3C5ccPhAtwXqQu7dik2kScksGwkZqzc"
let url = `https://api.pexels.com/v1/search?query=${query}&per_page=10}`

fetch(url,{
    headers:{
        Authorization: apiKey
    }
})
.then(resp => resp.json())
.then(data=>{
    console.log(data)

    let a = Math.floor(Math.random() * 10)  - 1
    console.log(a);

    let img = data.photos[a]

    myPhoto.src = img.src.medium
})

})






// let myPhoto = document.getElementById("myphoto")
// let query = "armenia"

// // All requests made with the client will be authenticated
// let apiKey = "8mZtsnd0HrHL5hu5tOjIhhIKq3C5ccPhAtwXqQu7dik2kScksGwkZqzc"
// let url = `https://api.pexels.com/v1/search?query=${query}&per_page=10}`

// const res = fetch(url,{
//     headers:{
//         Authorization: apiKey
//     }
// })

// const myData = res.then(resp=> resp.json())

// const fdata = myData.then( res => res)

// console.log(fdata);
