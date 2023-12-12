





document.getElementById("submitt").addEventListener("click", zxc);
document.getElementById("idinpt").addEventListener("keypress", zxcc);

// 0000000000000000000000000000000000000000000000

window.onload = function() {
        
       

function geolocationSuccess(position) {

    const latitude = position.coords.latitude;

    const longitude = position.coords.longitude;

    const locationElement = document.getElementById('demo');

    // Fetch city and country using reverse geocoding (optional)

    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)

        .then(response => response.json())

        .then(data => {

            const city = data.address.city;

            const country = data.address.country;

            locationElement.textContent = `Current Location: ${city}, ${country}`;
            const cityName = document.getElementById("idinpt");
            cityName.value= `${city}, ${country}`;
            zxc();

        })

        .catch(error => {

            console.error('Error fetching location data:', error);

        });

}

// Function to handle errors in geolocation retrieval

function geolocationError(error) {

    console.error('Error getting geolocation:', error);

}

// Get user's location using Geolocation API

if ("geolocation" in navigator) {

    navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);

} else {

    console.log('Geolocation is not available in this browser.');

}

};








// 0000000000000000000000000000000000000000000000000000

// window.onload = function() {
//     cityName.value= `${city}, ${country}`
//   };


function zxcc (event){
    if(event.keyCode == 13){
        zxc();
    }else {
        console.log("Enter City Name");
    }
}    



async function zxc(){
    console.clear();
    

    const cityName = document.getElementById("idinpt").value;
    let imgg = document.getElementById("iimg");
    let temp = document.getElementsByClassName("clr")[0];
    let lrain = document.getElementById("lrain");
    let humi = document.getElementsByClassName("clr")[1];
    let tmin = document.getElementsByClassName("clr")[2];
    let tmax = document.getElementsByClassName("clr")[3];
    let press = document.getElementsByClassName("clr")[4];
    let spd = document.getElementsByClassName("clr")[5];
    let degg = document.getElementsByClassName("clr")[6];
    let visi = document.getElementsByClassName("clr")[7];
    let codd = document.getElementsByClassName("clr")[8];
    let locc = document.getElementById("locc");
    
    await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3748b413d202e873c4be8f2ee9158cf2`).then((response)=>{return response.json()}).then((response)=>{
        console.log(response);
        temp.innerHTML = Math.floor(response.main.temp-273.15)+`<span>&#8451;</span>`;
        humi.innerHTML = response.main.humidity+" %";
        tmin.innerHTML = Math.floor(response.main.temp_min-273.15)+`<span>&#8451;</span>`;
        tmax.innerHTML = Math.floor(response.main.temp_max-273.15)+`<span>&#8451;</span>`;
        press.innerHTML = response.main.pressure+ " hpa";
        spd.innerHTML = response.wind.speed +" km/s";
        degg.innerHTML = response.wind.deg;
        visi.innerHTML = response.visibility / 1000 +"km";
        codd.innerHTML = response.cod;
        lrain.innerHTML = response.weather[0].description;
        switch (response.weather[0].main) {
            case "Mist": document.getElementById("iimg").style.backgroundImage = "url('https://png.pngtree.com/png-vector/20220427/ourmid/pngtree-sea-haze-yellow-rgb-color-icon-contour-horizon-sun-vector-png-image_30143186.png')";break;
            case "Clouds": document.getElementById("iimg").style.backgroundImage = "url('/img/weather-Clouds.png')";break;
            case "Clear": document.getElementById("iimg").style.backgroundImage = "url('/img/weather-Clear.png')";break;    
            case "Rain": document.getElementById("iimg").style.backgroundImage = "url('/img/weather-raining.png')";break;
            case "Thunderstorm": document.getElementById("iimg").style.backgroundImage = "url('/img/weather-th.png')";break;           
                
            
            default: console.log("Image not found");
                break;
        }

        locc.innerHTML = response.name;

    }).catch((response)=>{console.log(response)});


    



    
}

//document.getElementById("iimg").style.background = "/img/weather-raining.png"
//
//document.getElementById("iimg").style.backgroundImage = "url('/img/weather-raining.png')";
//if(event.keyCode == 13){