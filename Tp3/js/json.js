function userSearch(){

    const urlRandomUser = 'https://randomuser.me/api/';
    const pj = document.getElementById("pj");

    fetch(urlRandomUser)
        .then (res => res.json())
        .then (data => {

            let latitudeUser = data.results[0].location.coordinates.latitude;
            let longitudeUser = data.results[0].location.coordinates.longitude;

            console.log(latitudeUser)
            console.log(longitudeUser)

            pj.innerHTML = `
            <div class="pjImage">
                <img src="${data.results[0].picture.large}" alt="">
            </div>

            <div class="infoPj">
                <h1> ${data.results[0].name.last}, ${data.results[0].name.first}</h1>
                <h2>Gender: ${data.results[0].gender}</h2>
                <h2>Dni: ${data.results[0].id.value}</h2>
                <h2>Latitude: ${latitudeUser}</h2>
                <h2>longitude: ${longitudeUser}</h2>
            </div>
            `;

            const map = L.map('map').setView([longitudeUser, latitudeUser], 13);

            const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            })
            .addTo(map);

        });
     
}