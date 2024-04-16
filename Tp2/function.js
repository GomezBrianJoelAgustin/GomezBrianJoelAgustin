function getCharacters(){

    const personajeId1 = document.getElementById("personajeId1").value;
    const personajeId2 = document.getElementById("personajeId2").value;

    fetch(`https://rickandmortyapi.com/api/character/${personajeId1}, ${personajeId2}`)
    .then(res => res.json())
    .then(data =>{

        const infoPj1 = document.getElementById("infoPj1");
        infoPj1.innerHTML =  ` 

        <div class="image-container">
            <img src="${data.image}" alt="">
        </div>
        <div class="info">  
            <h3>Name: ${data.name}</h3>
            <h3>Gender: ${data.gender}</h3>
        </div>
        `
    })

    .catch(error => {
        console.error(error);

    });
}