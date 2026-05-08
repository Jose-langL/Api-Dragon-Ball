const URL = "https://dragonball-api.com/api/characters?limit=15";

const Personajes = [];

async function Info() {

    try {

        const resultado = await fetch(URL);

        if (!resultado.ok) {
            throw new Error("No se encontro api");
        }

        const data = await resultado.json();

        Personajes.push(...data.items);

        filtrarPersonaje(Personajes);

    } catch (error) {

        console.error("Ocurrio un error:", error.message);

    }
}

function filtrarPersonaje(datos) {

    const contenidoPersonaje = document.getElementById("TarjetaPersonaje");

    contenidoPersonaje.innerHTML = "";

    datos.forEach(personaje => {

        contenidoPersonaje.innerHTML += `
        <div class="CardPersonaje" id="CardPersonaje-${personaje.id}">
            <h2 class="NombrePersonaje">${personaje.name}</h2>

            <img src="${personaje.image}">

            <p class="InformacionPersonaje">${personaje.race}</p>
        </div>
        `;
    });
}

function buscar(data) {

    const InputBuscar = document.getElementById("Buscar");

    const Valorinput = InputBuscar.value.toLowerCase();

    const personajesFiltrados = data.filter(personaje =>

        personaje.name.toLowerCase().includes(Valorinput) ||
         personaje.race.toLowerCase().includes(Valorinput) 

    );

    filtrarPersonaje(personajesFiltrados);
}

document.querySelector("#BtnBuscar").addEventListener("click", function () {

    buscar(Personajes);

});

Info();
