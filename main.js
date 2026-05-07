const URL = "https://dragonball-api.com/api/characters?limit=15";

const Personajes = []

async function Info() {
    try {
        const resultado = await fetch(URL);
        if (!resultado.ok) {
            throw new Error("no se encontro api");
        }
        const data = await resultado.json()

        Personajes.push(...data.items)

        filtrarPersonaje(Personajes)

        buscar(Personajes[0])

    } catch (error) {
        console.error("ocurrio un error:", error.menssage);
    }
}
Info()



function filtrarPersonaje(datos) {
    const contenidoPersonaje = document.getElementById("TarjetaPersonaje")
    datos.forEach(personaje => {
        contenidoPersonaje.innerHTML += `
        <div class="CardPersonaje" id="CardPersonaje-${personaje.id}">
                <h2 class="NombrePersonaje">${personaje.name}</h2>
                <img src="${personaje.image}">
                <p class="InformacionPersonaje">${personaje.race}</p>
        </div>`
    });
}

function buscar(data) {
    console.log(data.name)
}
