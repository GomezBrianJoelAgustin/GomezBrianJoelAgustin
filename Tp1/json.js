function getCharacters() {
    const idr = document.getElementById ("idr").value;
    fetch(`https://rickandmortyapi.com/api/character/${idr}`)
        .then(Res => Res.json())
        .then(data => {
            const infr = document.getElementById("infr");
            infr.innerHTML = `

                <div class="image-container">
                    <img src="https://rickandmortyapi.com/api/character/avatar/${idr}.jpeg" alt="">
                </div>
                <div class="info">  
                    <h3>Name: ${data.name}</h3>
                    <h3>Gender: ${data.gender}</h3>
                </div>

            `;
        })

        .catch(error => {
            console.error(error);

        });
}


