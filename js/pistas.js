const listaPistas = document.getElementById("listaPistas");
const buscador = document.getElementById("buscador");
const botonesFiltro = document.querySelectorAll(".filter-btn");
const sinResultados = document.getElementById("sinResultados");
const paginaciones = document.querySelectorAll(".paginacion-pistas");
const estadisticasPistas = document.getElementById("estadisticasPistas");

let generoActual = "Todos";
let paginaActual = 1;
const pistasPorPagina = 30;

function limpiarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function mostrarPistas() {
    const texto = limpiarTexto(buscador.value.trim());

    const resultados = pistas
        .filter(pista => {
            const coincideGenero = generoActual === "Todos" || pista.genero === generoActual;

            const contenido = limpiarTexto(
                `${pista.titulo} ${pista.artista} ${pista.genero} ${pista.tono} ${pista.bpm}`
            );

            return coincideGenero && contenido.includes(texto);
        })
        .sort((a, b) => a.titulo.localeCompare(b.titulo));
        
    if (estadisticasPistas) {
    estadisticasPistas.innerHTML = `
        <span class="group-count">
            <i class="bi bi-folder2-open"></i>
            ${grupos.length} Grupos O Artistas
        </span>

        <span class="group-count">
            <i class="bi bi-music-note-list"></i>
            ${pistas.length} Temas En Total
        </span>
    `;
}

    const totalPaginas = Math.ceil(resultados.length / pistasPorPagina);

    if (paginaActual > totalPaginas) {
        paginaActual = 1;
    }

    const inicio = (paginaActual - 1) * pistasPorPagina;
    const fin = inicio + pistasPorPagina;
    const pistasPagina = resultados.slice(inicio, fin);

    listaPistas.innerHTML = "";

    pistasPagina.forEach(pista => {
        const tarjeta = document.createElement("div");

        tarjeta.className = "col-md-6 col-lg-4";
        tarjeta.innerHTML = crearTarjetaPista(pista);

        listaPistas.appendChild(tarjeta);
    });

    sinResultados.style.display = resultados.length === 0 ? "block" : "none";

    mostrarPaginacion(totalPaginas);
}

function mostrarPaginacion(totalPaginas) {
    paginaciones.forEach(paginacion => {
        paginacion.innerHTML = "";

        if (totalPaginas <= 1) return;

        if (paginaActual > 1) {
            paginacion.innerHTML += `
                <button class="filter-btn" onclick="cambiarPagina(${paginaActual - 1})">
                    Anterior
                </button>
            `;
        }

        for (let i = 1; i <= totalPaginas; i++) {
            paginacion.innerHTML += `
                <button class="filter-btn ${i === paginaActual ? "active" : ""}"
                        onclick="cambiarPagina(${i})">
                    ${i}
                </button>
            `;
        }

        if (paginaActual < totalPaginas) {
            paginacion.innerHTML += `
                <button class="filter-btn" onclick="cambiarPagina(${paginaActual + 1})">
                    Siguiente
                </button>
            `;
        }
    });
}

function cambiarPagina(numero) {
    paginaActual = numero;
    mostrarPistas();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

buscador.addEventListener("input", () => {
    paginaActual = 1;
    mostrarPistas();
});

botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        botonesFiltro.forEach(b => b.classList.remove("active"));

        boton.classList.add("active");
        generoActual = boton.dataset.genero;
        paginaActual = 1;

        mostrarPistas();
    });
});

mostrarPistas();