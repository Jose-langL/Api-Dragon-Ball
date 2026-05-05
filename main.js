const URL = "https://dragonball-api.com/api/characters";

async function Info() {
    const resultado = await fetch(URL)
    const data = await resultado.json()
    console.log(data)
}

Info();