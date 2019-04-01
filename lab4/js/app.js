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

ABBREVIATIONS
AKW = API key Weather
AKG = API key Giphy
*/


class Weather
{
    constructor(AKW, AKG){
        this.AKW = AKW;
        this.AKG = AKG;
        //console.log(AKW, AKG);
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

            let gif = json.currently.icon;
            switch(gif){
                case "clear-day":
                    this.getGiphy("clear day");
                    break;
                case "clear-night":
                    this.getGiphy("");
                    break;
                case "partly-cloudy-day":
                    this.getGiphy("");
                    break;
                case "partly-cloudy-night":
                    this.getGiphy("");
                    break;
                case "cloudy":
                    this.getGiphy("");
                    break;
                case "rain":
                    this.getGiphy("");
                    break;
                case "sleet":
                    this.getGiphy("");
                    break;
                case "snow":
                    this.getGiphy("");
                    break;
                case "wind":
                    this.getGiphy("");
                    break;
                case "fog":
                    this.getGiphy("");
                    break;
                default:
                    this.getGiphy(gif);
                    break;
            }
        })
    }

    getGiphy(gif){
        // https://developers.giphy.com/docs/#sticker-endpoint
        let url = `//api.giphy.com/v1/stickers/search?api_key=${this.AKG}&q=${gif}`;
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