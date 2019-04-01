/* GIPHY ICONS VALUES via https://www.dr-lex.be/software/darksky-icons.html
clear-day
clear-night
partly-cloudy-day
partly-cloudy-night
cloudy
rain
sleet
snow
wind
fog
*/


class Weather
{
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        //console.log(API_KEY);
        this.init();
    }

    getCurrentLocation(){
        console.log("getting current position");
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getWeather(lat, lng);
            console.log(position);
        }, err => {
            console.log("error");
        });
    }    

    getWeather(lat, lng){
        let url = `http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.AKW}/${lat},${lng}?units=si`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            let temp = document.createElement("h1");
            temp.innerHTML = json.currently.summary;
            document.querySelector(".container").appendChild(temp);
            console.log(json.currently.summary);
        })
    }

    init(){
        //console.log('initialize');
        console.log(navigator);
        this.getCurrentLocation();
    }

}

let app = new Weather('feb187c5167915f71c0d58ae86c01760');