function userSearch(){

    const urlRandomUser = 'https://randomuser.me/api/';

    fetch(urlRandomUser)
        .then (res => res.json())
        .then (data => {

            console.log(data);

            let latitudUser = data.latitud;
            let longitudeUser = data.longitude;
     });

}