class Weather
{
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        //console.log(API_KEY);
        this.init();
    }

    getCurrentLocation(){
        
    }    

    getWeather(position){
        
    }

    updateUI(){
        
    }

    init(){
        console.log('initialize');
        console.log(navigator);
        this.getCurrentLocation();
    }

}

let app = new Weather('feb187c5167915f71c0d58ae86c01760');