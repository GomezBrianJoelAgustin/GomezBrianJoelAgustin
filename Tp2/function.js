function getCharacters() {
    const personajeId1 = document.getElementById("personajeId1").value;
    const personajeId2 = document.getElementById("personajeId2").value;

    let generoPj1= "";
    let generoPj2= "";

    fetch(`https://rickandmortyapi.com/api/character/${personajeId1},${personajeId2}`)
    .then(res => res.json())
    .then(data => {
        
        console.log(data);

        if (personajeId1==personajeId2) {

            const containerPj1 = document.getElementById("containerPj1");

            let data1 = data[0];
            let generoPj1= data[0].gender;
    
            containerPj1.innerHTML = `
                <div id="containerImage">
                    <img src="${data1.image}" alt="">
                </div>
                <div id="infoPj">
                    <h3>Name: ${data1.name}</h3>
                    <h3>Gender: ${data1.gender} </h3>
                    <h3>Specie: ${data1.species}</h3>
                </div>
            `;
            
            
            const containerPj2 = document.getElementById("containerPj2");

            let data2 = data[0];
            let generoPj2= data[0].gender;
    
            containerPj2.innerHTML = `
                <div id="containerImage">
                    <img src="${data2.image}" alt="">
                </div>
                <div id="infoPj">
                    <h3>Name: ${data2.name}</h3>
                    <h3>Gender: ${data2.gender} </h3>
                    <h3>Specie: ${data2.species}</h3>
                </div>
            `;
            
        } else {
            const containerPj1 = document.getElementById("containerPj1");

            let data1 = data[0];
            let generoPj1= data[0].gender
    
            containerPj1.innerHTML = `
                <div id="containerImage">
                    <img src="${data1.image}" alt="">
                </div>
                <div id="infoPj">
                    <h3>Name: ${data1.name}</h3>
                    <h3>Gender: ${data1.gender} </h3>
                    <h3>Specie: ${data1.species}</h3>
                </div>
            `;
           

            const containerPj2 = document.getElementById("containerPj2");

            let data2 = data[1];
            let generoPj2= data2.gender;    
    
            containerPj2.innerHTML = `
                <div id="containerImage">
                    <img src="${data2.image}" alt="">
                </div>
                <div id="infoPj">
                    <h3>Name: ${data2.name}</h3>
                    <h3>Gender: ${data2.gender} </h3>
                    <h3>Specie: ${data2.species}</h3>
                </div>
            `;
            
        }

        const match = document.getElementById("match");
        
        if (generoPj1 == generoPj2){
            match.innerHTML = `
            <div id="resultados">
                <h2>Match</h2>
            </div>
            `
        }

        if (data[0].gender == data[1].gender){
            match.innerHTML = `
            <div id="resultados">
                <h2>Match</h2>
            </div>
            `
            
        } else {
            match.innerHTML = `
            <div id="resultados">
                <h2>Matchn't</h2>
            </div>
            `    
        }

    })
    .catch(error => {
        console.error(error);
    });
}