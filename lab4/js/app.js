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
    constructor(API_KEY_W, API_KEY_G){
        this.API_KEY_W = API_KEY_W;
        this.API_KEY_G = API_KEY_G;
        //console.log(API_KEY_W, API_KEY_G);
        this.init();
    }

    getCurrentLocation(){
        //console.log("getting current position");
        navigator.geolocation.getCurrentPosition(position =>{
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getWeather(lat, lng);
            console.log(position);
        }, err => {
            console.log("error");
        });
    }    

    getWeather(lat, lng){
        let url = `http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY_W}/${lat},${lng}?units=si`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            let temp = document.createElement("h1");
            temp.innerHTML = json.currently.summary;
            document.querySelector("#container").appendChild(temp);
            console.log(json.currently.summary);
        })
    }

    getGiphy(gif){
        let url = `//api.giphy.com/v1/gifs/search?api_key=${this.API_KEY_G}&q=${gif}`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            // GET GIPHY
        })
    }


    init(){
        //console.log('initialize');
        console.log(navigator);
        this.getCurrentLocation();
    }

}

let app = new Weather('feb187c5167915f71c0d58ae86c01760', 'GNAEtDyVKZCH4mCW2LxrD6omQbpmpdHO');