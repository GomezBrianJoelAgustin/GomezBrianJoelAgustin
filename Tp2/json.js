function getCharacter(){
    const pj1 = document.getElementById("pj1").value;
    fetch(`https://rickandmortyapi.com/api/character/${pj1}`)
    .then (res => res.json())
    .then (data => {
        const infopj1 = document.getElementById("infopj1");
        infopj1.innerHTML = `

            <div class="imagenContainer">
                <img src="https://rickandmortyapi.com/api/character/avatar/${pj1}.jpeg" alt="">
            </div>
            <div class="infopj1">
                <h3>Name: ${data.name}</h3>
                <h3>Gender: ${data.gender}</h3>
            </div>
        `
    })
}