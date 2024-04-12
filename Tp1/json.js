function getCharacters() {
    const idr = document.getElementById ("idr").value;
    fetch(`https://rickandmortyapi.com/api/character/${idr}`)
        .then(Res => Res.json())
        .then(data => {
            const infr = document.getElementById("infr");
            infr.innerHTML = `

                <div class="image-container">
                    <img src="imagen" alt="personaje">
                </div>
                <div class="InfoPersonaje">
                    <h3>Nombre = ${data.name}</h3>
                </div>

            `;
        })

        .catch(error => {
            console.error(error);

        });
}


