const grupos = [
    {
        id: "explosion-cumbiera",
        nombre: "Explosión Cumbiera",
        descripcion: "Repertorio de instrumentales",
        generoPrincipal: "Cumbia con Sabor",
        imagen: "assets/img/grupos/explosion-cumbiera.jpg"
    },

    {
        id: "sangre-cumbiera",
        nombre: "Sangre Cumbiera",
        descripcion: "Repertorio de instrumentales",
        generoPrincipal: "Cumbia con Sabor",
        imagen: "assets/img/grupos/sangre-cumbiera.jpg"
    },

    {
        id: "maroyu",
        nombre: "Maroyu",
        descripcion: "Repertorio de instrumentales",
        generoPrincipal: "Cumbia Chicha",
        imagen: "assets/img/grupos/maroyu.jpg"
    },
    {
        id: "turromantikos",
        nombre: "Turromantikos",
        descripcion: "Repertorio de instrumentales",
        generoPrincipal: "Cumbia con Sabor",
        imagen: "assets/img/grupos/turromantikos.jpeg"
    }
];

const pistas = [
    ...(typeof explosionCumbiera !== "undefined" ? explosionCumbiera : []),
    ...(typeof sangreCumbiera !== "undefined" ? sangreCumbiera : []),
    ...(typeof turromantikos !== "undefined" ? turromantikos : []),
    ...(typeof maroyu !== "undefined" ? maroyu : [])
];

function crearTarjetaPista(pista) {

    const gruposPista = pista.grupos || [pista.grupoId];

    const imagenes = gruposPista.map(id => {
        const grupo = grupos.find(g => g.id === id);
        return grupo?.imagen || "assets/img/grupos/default.jpg";
    });

    return `
        <div class="track-card">

           <div class="track-cover-images">

    ${imagenes.length === 1 ? `
        <img src="${imagenes[0]}"
             alt="${pista.artista}"
             class="track-img-single">
    ` : `
        <div class="track-img-split">
            <img src="${imagenes[0]}"
                 alt="${pista.artista}">

            <img src="${imagenes[1]}"
                 alt="${pista.artista}">
        </div>
    `}

</div>

            <h3>${pista.titulo}</h3>

            <p class="text-secondary mb-0">
                Grupo: ${pista.artista}
            </p>

            <div class="track-meta">
                <span>${pista.genero}</span>
                <span>${pista.tono}</span>
                <span>${pista.bpm} BPM</span>
            </div>

            <div class="mt-3">
                <a href="${pista.descarga}"
                   target="_blank"
                   class="btn-download">

                    <i class="bi bi-download"></i>
                    Descargar

                </a>
            </div>

            <div class="donation-mini">
                <p>
                    <i class="bi bi-heart"></i>
                    ¿Te gusta este proyecto?
                </p>

                <a href="donar.html" class="btn-donate">
                    <i class="bi bi-qr-code"></i>
                    Donar voluntariamente
                </a>
            </div>

        </div>
    `;
}