const pjs = [];
const result1 = 0;

function buscarMayor(){

    const pjId = document.getElementById("pjId").value;

    pjs.push(pjId)
    
    if (pjs.length === 10) {
  
        const result1= Math.max(...pjs)
        console.log(pjs);
        console.log(result1);
    }return
   
    console.log(result1)
};

function containerPj(result1){
    alert(result1)

    fetch (`https://rickandmortyapi.com/api/character/${result1}`)
    .then (res => res.json())
    .then (data =>{

        console.log(result1);

        const containerPj = document.getElementById("containerPj");
        containerPj.innerHTML = `
        <img src="${data.image}" alt="">
        <h1>${data.name}</h1>
        <h1>${data.species}</h1>
        `;
    })
}
