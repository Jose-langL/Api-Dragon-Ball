const URL = "https://dragonball-api.com/api/characters?limit=15";

async function Info() {
    try {
        const resultado = await fetch(URL);
        if (!resultado.ok) {
            throw new Error("no se encontro api");
        }
        const data = await resultado.json()
        filtrarPersonaje(data.items)
        buscar(data.items);
        console.log(data.items)
    } catch (error) {
        console.error("ocurrio un error:", error.menssage);
    }
}

Info();

function filtrarPersonaje(array) {
    const contenidoPersonaje = document.getElementById("TarjetaPersonaje")
    array.forEach(personaje => {
        contenidoPersonaje.innerHTML += `
        <div class="CardPersonaje" id="CardPersonaje-${personaje.id}">
                <h2 class="NombrePersonaje">${personaje.name}</h2>
                <img src="${personaje.image}">
                <p class="InformacionPersonaje">${personaje.race}</p>
        </div>`
    });
}

