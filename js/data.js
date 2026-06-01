const grupos = [
    {
        id: "explosion-cumbiera",
        nombre: "Explosión Cumbiera",
        descripcion: "Repertorio de ejemplo para pistas de cumbia con sabor.",
        generoPrincipal: "Cumbia con Sabor",
        imagen: "assets/img/grupos/explosion-cumbiera.jpg"
    },

    {
        id: "sangre-cumbiera",
        nombre: "Sangre Cumbiera",
        descripcion: "Repertorio de ejemplo para pistas de cumbia sureña.",
        generoPrincipal: "Cumbia Sureña",
        imagen: "assets/img/grupos/sangre-cumbiera.jpg"
    },

    {
        id: "maroyu",
        nombre: "Maroyu",
        descripcion: "Repertorio de ejemplo para cumbia chicha.",
        generoPrincipal: "Cumbia Chicha",
        imagen: "assets/img/grupos/maroyu.jpg"
    }
];

const pistas = [
    ...(typeof explosionCumbiera !== "undefined" ? explosionCumbiera : []),
    ...(typeof sangreCumbiera !== "undefined" ? sangreCumbiera : []),
    ...(typeof maroyu !== "undefined" ? maroyu : [])
];

function crearTarjetaPista(pista) {

    const grupo = grupos.find(g => g.id === pista.grupoId);

    return `
        <div class="track-card">

            <img src="${grupo?.imagen || 'assets/img/grupos/default.jpg'}"
                 alt="${pista.artista}"
                 class="track-img">

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