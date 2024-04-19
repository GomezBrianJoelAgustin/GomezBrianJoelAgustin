function userSearch(){

    const urlRandomUser = 'https://randomuser.me/api/';

    fetch(urlRandomUser)
        .then (res => res.json())
        .then (data => {

            let latitudUser = data.results[0].location.coordinates.latitude;
            let longitudeUser = data.results[0].location.coordinates.longitude;

            console.log(latitudUser)
            console.log(longitudeUser)

            let map = L.map("map").setView(latitudUser,longitudeUser);
     });

}