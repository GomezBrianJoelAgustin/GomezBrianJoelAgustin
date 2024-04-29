const pjs = [];

function agregarPj(){

    const pjId = document.getElementById("pjId").value;

    pjs.push(pjId)
    
    const result1= Math.max(...pjs)

    console.log(pjs);
    console.log(result1)

    fetch (`https://rickandmortyapi.com/api/character/${result1}`)
    .then (res => res.json())
    .then (data =>{

        console.log(data);

        const containerPj = document.getElementById("containerPj");
        containerPj.innerHTML = `
        <img src="${data.image}" alt="">
        <h1>${data.name}</h1>
        <h1>${data.species}</h1>
        `;
    })

}