function getCharacters(){

    const pj1 = document.getElementById("pj1").value;
    const pj2 = document.getElementById("pj2").value;
    const comparacion = document.getElementById("comparacion");
    const pj1Info = document.getElementById("pj1Info");
    const pj2Info = document.getElementById("pj2Info");

    let  NamePj1 = "";
    let  genderPj1 = "";
    let  NamePj2 = "";
    let  genderPj2 = "";
    

        fetch(`https://rickandmortyapi.com/api/character`)
        .then(res => res.json())
        .then(data =>{

            data.results.forEach(function(aux){

                if(pj1 == aux.id){
                    pj1Info.innerHTML = `
                        
                        <div class="imagenPj1">
                            <img src="${aux.image}" alt="">
                        </div>

                        <div class="Info1">
                            <p>Name: ${aux.name}</p>
                            <p>Gender: ${aux.gender}</p>
                        </div>
                    `;

                    NamePj1 = aux.name;
                    genderPj1 = aux.gender;
                    console.log(NamePj1)
                    console.log(genderPj1)
                    
                };

                if(pj2 == aux.id){
                    pj2Info.innerHTML = `
                        
                        <div class="imagenPj2">
                            <img src="${aux.image}" alt="">
                        </div>

                        <div class="Info2">
                            <p>Name: ${aux.name}</p>
                            <p>Gender: ${aux.gender}</p>    
                        </div>
                    `;
                    
                    NamePj2 = aux.name;
                    genderPj2 = aux.gender;
                    console.log(NamePj2)
                    console.log(genderPj2)

                };
            });

           if (genderPj1 === genderPj2) {
                console.log("Son iguales");
                comparacion.innerHTML = `
                <h3> Match :P </h3>
                `;
            
           } else {
                console.log("No son iguales")
                comparacion.innerHTML = `
                <h3> Matchn't :/ </h3>
                `;
           };

        })

        .catch (error =>{
            console.log('Error:',error);
        });
}
