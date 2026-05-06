const URL = "https://dragonball-api.com/api/characters";

async function Info() {
    const resultado = await fetch(URL)
    const data = await resultado.json()
    console.log(data)
    filtrarPersonaje(data.items)
}

Info();

function filtrarPersonaje(array){
    const contenidoPersonaje = document.getElementById("TarjetaPersonaje")
    array.forEach(personaje => {
        contenidoPersonaje.innerHTML +=`
        <div class="CardPersonaje">
             <h2>${personaje.name}</h2>
             <img src="${personaje.image}" width="150px">
             <p>${personaje.race}</p>
        </div>`
    });
}

