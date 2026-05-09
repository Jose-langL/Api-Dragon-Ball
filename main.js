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

    //Recorrido del array y filtrando informacion del los mismos
    //Creacion del modal que filtra informacion del los personajes tambien
    datos.forEach(personaje => {
        contenidoPersonaje.innerHTML += `
        <div class="CardPersonaje" id="CardPersonaje-${personaje.id}">
            <h2 class="NombrePersonaje">${personaje.name}</h2>
            <img src="${personaje.image}">


             <button class="openModal">Ver mas</button>
            <div class="modal"> 
                <div class="modal-content">
                    <h1>Descripcion</h1>
                    <p class="InformacionModal">${personaje.description}</p>
                    <h4>ki</h4>
                    <p class="InformacionModal">${personaje.ki}</p>
                    <h4>Maximo ki</h4>
                    <p class="InformacionModal">${personaje.maxKi}</p>
                    <h4>Raza</h4>
                    <p class="InformacionModal">${personaje.race}</p>
                    <span class="close">X</span>
                </div>
            </div> 
        </div>
        `;

    });

    const openmodal = document.getElementsByClassName("openModal");
    const modals = document.getElementsByClassName("modal");
    const closeBtns = document.getElementsByClassName("close");

    //Para abrir modal
    let borrar = "none"
    let mostrar = "flex"
    let abierto = false;
    for(let i = 0; i < openmodal.length; i++){
        openmodal[i].addEventListener('click', function(){
            modals[i].style.display = abierto? borrar : mostrar;
            abierto = !abierto;
        });
    }

    // Cerrar modal
    for(let i = 0; i < closeBtns.length; i++){
        closeBtns[i].addEventListener('click', function(){
            modals[i].style.display = 'none';
        });
    }
}


//Funcion para activar el buscador y muestre la informacion
function buscar(data) {
    const InputBuscar = document.getElementById("Buscar");
    const Valorinput = InputBuscar.value.toLowerCase();

    const personajesFiltrados = data.filter(personaje =>
        personaje.name.toLowerCase().includes(Valorinput) ||
        personaje.race.toLowerCase().includes(Valorinput)
    );

    //mensaje no se encontro personaje
       if (personajesFiltrados.length === 0) {
        const contenidoPersonaje = document.getElementById("TarjetaPersonaje");
        contenidoPersonaje.innerHTML = `
            <h2 class="mensajeError">
                No se encontro ningun personaje
            </h2>
        `;
        return;
        }

    filtrarPersonaje(personajesFiltrados);
}

document.querySelector("#BtnBuscar").addEventListener("click", function () {
    buscar(Personajes);
});

console.log(Personajes)
Info();
