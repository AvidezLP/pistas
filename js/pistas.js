const listaPistas = document.getElementById("listaPistas");
const buscador = document.getElementById("buscador");
const botonesFiltro = document.querySelectorAll(".filter-btn");
const sinResultados = document.getElementById("sinResultados");

let generoActual = "Todos";

function mostrarPistas() {
    const texto = buscador.value.toLowerCase().trim();

    listaPistas.innerHTML = "";

    const resultados = pistas.filter(pista => {
        const coincideGenero = generoActual === "Todos" || pista.genero === generoActual;
        const contenido = `${pista.titulo} ${pista.artista} ${pista.genero} ${pista.tono} ${pista.bpm}`.toLowerCase();

        return coincideGenero && contenido.includes(texto);
    });

    resultados.forEach(pista => {
        const tarjeta = document.createElement("div");

        tarjeta.className = "col-md-6 col-lg-4";
        tarjeta.innerHTML = crearTarjetaPista(pista);

        listaPistas.appendChild(tarjeta);
    });

    sinResultados.style.display = resultados.length === 0 ? "block" : "none";
}

buscador.addEventListener("input", mostrarPistas);

botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        botonesFiltro.forEach(b => b.classList.remove("active"));

        boton.classList.add("active");
        generoActual = boton.dataset.genero;

        mostrarPistas();
    });
});

mostrarPistas();
