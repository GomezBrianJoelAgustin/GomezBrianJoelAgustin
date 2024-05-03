const pjs1 = [];
const pjs2 = [];

function buscarPersonajes1(){

    const id1 = document.getElementById("id1").value;
    const btn1 = document.getElementById("btn1");

    if (id1 >= 1 && id1 <=826) {
            
        pjs1.push(id1)

        if (pjs1.length == 3 ) {

            btn1.Disable = true;

            alert("Ya se ingresaron 3 numeros")

        };

        console.log("Los datos del primer array son: " + pjs1)
        pasajeDeDatos(pjs1)

    } else{
        alert("Numero no valido")
    }
}

function buscarPersonajes2(){

    const id2 = document.getElementById("id2").value;
    const btn2 = document.getElementById("btn2");

    if (id2 >= 1 && id2 <=826) {

        pjs2.push(id2)

        if (pjs2.length == 3 ) {

            btn2.Disable = true;
            alert("Ya se ingresaron 3 numeros")

        };

        console.log("Los datos del segundo array son: " + pjs2)
        pasajeDeDatos(pjs2)

    } else {
        alert("Numero no valido")
    }
}

function pasajeDeDatos(pjs1,pjs2){

    let personajes = pjs1.concat(pjs2) 
    mostrarPjs(personajes)
}

function mostrarPjs(personajes){
        
    fetch(`https://rickandmortyapi.com/api/character/${personajes}`)
    .then (res => res.json())
    .then (data => {

        console.log(data)

        for (let i = 0; i < 7; i++) {
            
            containerPersonajes.innerHTML = `
            <div id="containerPhotos">
                <img src="${data[i].image}" alt="">
                <img src="${data[i+1].image}" alt="">
                <img src="${data[i+2].image}" alt="">
            </div>
            `
        }        
    })

}
