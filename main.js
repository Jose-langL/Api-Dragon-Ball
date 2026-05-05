const URL = "https://dragonball-api.com/api/characters";

async function Info() {
    const resultado = await fetch(URL)
    const data = await resultado.json()
    console.log(data)
    filtrarPersonaje(data.items)
}

Info();

function filtrarPersonaje(array){
    array.forEach(personaje => {
        console.log(personaje.name);        
    });
}