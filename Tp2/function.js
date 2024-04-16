function getCharacters() {
    const personajeId1 = document.getElementById("personajeId1").value;
    const personajeId2 = document.getElementById("personajeId2").value;

    fetch(`https://rickandmortyapi.com/api/character/${personajeId1},${personajeId2}`)
    .then(res => res.json())
    .then(data => {
        
        console.log(data);

        const resultados = document.getElementById("resultados");
    
        data.forEach(pj =>{
            const infoPjs = document.getElementById("infoPjs")
 
            infoPjs.innerHTML =  `
                        
                <div class="info">  
                    <img src="${pj.image}" alt="">
                    <h3>Name: ${pj.name}</h3>
                    <h3>Gender: ${pj.gender}</h3>
                    <h3>Status: ${pj.status}</h3>
                    <h3>Specie: ${pj.species}</h3>
                </div>
            `;

            
            if (data[0].gender == data[0+1].gender) {
                match.innerHTML = `
                <h1>hay match</h1>
                `
            } else {
                match.innerHTML = `
                <h1>no hay match</h1>
                `
            }
        })

        


    })
    .catch(error => {
        console.error(error);
    });
}