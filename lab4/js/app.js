class Weather
{
    constructor(API_KEY_WEATHER, API_KEY_GIPHY){
        this.API_KEY_WEATHER = API_KEY_WEATHER;
        this.API_KEY_GIPHY = API_KEY_GIPHY;
        console.log(API_KEY_WEATHER, API_KEY_GIPHY);
        this.init();
    }

    init(){
        //console.log('initialize');
        console.log(navigator);
        this.getCurrentLocation();
        this.getSticker();
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
        let url = `http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY_WEATHER}/${lat},${lng}?units=si`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            let temp = document.createElement("h1");
            temp.innerHTML = `This is what the weather looks like today: ${json.currently.summary}`;
            document.querySelector("#app").appendChild(temp);
            console.log(json.currently.summary);
        })
    }

    getSticker(){
        console.log("🚀");
    }
}

let app = new Weather('feb187c5167915f71c0d58ae86c01760', 'GNAEtDyVKZCH4mCW2LxrD6omQbpmpdHO');

// https://developers.giphy.com/docs/