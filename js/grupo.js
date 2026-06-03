const params = new URLSearchParams(window.location.search);
const grupoId = params.get("grupo");

const grupo = grupos.find(g => g.id === grupoId) || grupos[0];

const nombreGrupo = document.getElementById("nombreGrupo");
const descripcionGrupo = document.getElementById("descripcionGrupo");
const contadorGrupo = document.getElementById("contadorGrupo");
const buscadorGrupo = document.getElementById("buscadorGrupo");
const listaRepertorio = document.getElementById("listaRepertorio");
const sinResultados = document.getElementById("sinResultados");

nombreGrupo.textContent = grupo.nombre;
descripcionGrupo.textContent = grupo.descripcion;

function limpiarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function mostrarRepertorio() {
    const texto = limpiarTexto(buscadorGrupo.value.trim());

    listaRepertorio.innerHTML = "";

    const repertorio = pistas
    .filter(p =>
        p.grupoId === grupo.id ||
        (p.grupos && p.grupos.includes(grupo.id))
    )
    .sort((a, b) => a.titulo.localeCompare(b.titulo));

    const resultados = repertorio.filter(pista => {
        const contenido = limpiarTexto(
            `${pista.titulo} ${pista.artista} ${pista.genero} ${pista.tono} ${pista.bpm}`
        );

        return contenido.includes(texto);
    });

    contadorGrupo.textContent = `${repertorio.length} pistas`;

    resultados.forEach(pista => {
        const tarjeta = document.createElement("div");

        tarjeta.className = "col-md-6 col-lg-4";
        tarjeta.innerHTML = crearTarjetaPista(pista);

        listaRepertorio.appendChild(tarjeta);
    });

    sinResultados.style.display = resultados.length === 0 ? "block" : "none";
}

buscadorGrupo.addEventListener("input", mostrarRepertorio);

mostrarRepertorio();