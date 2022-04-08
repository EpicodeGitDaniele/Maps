export default class PushPin{
    constructor(lat,long){
        this.lat=lat;
        this.long=long;
    }
    inserisciPunto(){
        const pushPin = {
            center: {
              latitude: this.lat,
              longitude: this.long,
            },
            options: {
              title: "Punto inserito",
            },
          }
        return(pushPin);
    }
}