const personaje = 
{"id":333,
"name":"Stair Goblin",
"status":"Vivo",
"species":"Mythological Creature",
"type":"Stair goblin",
"gender":"Genderless","origin":{"name":"unknown","url":""},
"location":{"name":"Fantasy World",
"url":"https://rickandmortyapi.com/api/location/48"},
"image":"https://rickandmortyapi.com/api/character/avatar/333.jpeg",
"episode":["https://rickandmortyapi.com/api/episode/5",
"https://rickandmortyapi.com/api/episode/11",
"https://rickandmortyapi.com/api/episode/25"],
"url":"https://rickandmortyapi.com/api/character/333",
"created":"2018-01-10T16:34:19.420Z"}

document.getElementById ("result").innerHTML = "El personaje: " + personaje.name + ", Estado:" + personaje.status;