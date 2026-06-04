const grupos = [
    {
        id: "divinas",
        nombre: "Divinas",
        descripcion: "Repertorio de instrumentales",
        generoPrincipal: "Cumbia con Sabor",
        imagen: "assets/img/grupos/divinas.jpg"
    },
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
        id: "desolasol",
        nombre: "De Sol A Sol",
        descripcion: "Repertorio de instrumentales",
        generoPrincipal: "Cumbia con Sabor",
        imagen: "assets/img/grupos/desolasol.jpg"
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
    },
    {
        id: "davidcastro",
        nombre: "David Castro",
        descripcion: "Repertorio de instrumentales",
        generoPrincipal: "Cumbia Tropical",
        imagen: "assets/img/grupos/david-castro.jpg"
    },
    {
        id: "cartelcumbiero",
        nombre: "El New Cartel Cumbiero",
        descripcion: "Repertorio de instrumentales",
        generoPrincipal: "Cumbia con Sabor",
        imagen: "assets/img/grupos/cartelcumbiero.png"
    },
    {
        id: "grupoclaros",
        nombre: "Jhonny Y Su Agrupación Claros",
        descripcion: "Repertorio de instrumentales",
        generoPrincipal: "Cumbia Chicha",
        imagen: "assets/img/grupos/grupoclaros.jpg"
    },
    {
        id: "superauto",
        nombre: "Super Auto",
        descripcion: "Repertorio de instrumentales",
        generoPrincipal: "Cumbia Mexicana",
        imagen: "assets/img/grupos/superauto.jpg"
    },
    {
        id: "bonnylovy",
        nombre: "Bonny Lovy",
        descripcion: "Repertorio de instrumentales",
        generoPrincipal: "Cumbia Boliviana",
        imagen: "assets/img/artistas/bonnylovy.jpg"
    },
    {
        id: "thelaplanta",
        nombre: "The La Planta",
        descripcion: "Repertorio de instrumentales",
        generoPrincipal: "Cumbia Uruguaya",
        imagen: "assets/img/artistas/thelaplanta.jpg"
    },
    {
        id: "willycampero",
        nombre: "Willy Campero",
        descripcion: "Repertorio de instrumentales",
        generoPrincipal: "Cumbia Argentina",
        imagen: "assets/img/artistas/willycampero.png"
    }
];

const pistas = [
    ...(typeof divinas !== "undefined" ? divinas : []),
    ...(typeof explosionCumbiera !== "undefined" ? explosionCumbiera : []),
    ...(typeof sangreCumbiera !== "undefined" ? sangreCumbiera : []),
    ...(typeof desolasol !== "undefined" ? desolasol : []),
    ...(typeof turromantikos !== "undefined" ? turromantikos : []),
    ...(typeof davidcastro !== "undefined" ? davidcastro : []),
    ...(typeof cartelcumbiero !== "undefined" ? cartelcumbiero : []),
    ...(typeof grupoclaros !== "undefined" ? grupoclaros : []),
    ...(typeof superauto !== "undefined" ? superauto : []),
    ...(typeof bonnylovy !== "undefined" ? bonnylovy: []),
    ...(typeof thelaplanta !== "undefined" ? thelaplanta: []),
    ...(typeof willycampero !== "undefined" ? willycampero: []),
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
    ` : imagenes.length === 2 ? `
        <div class="track-img-split">
            <img src="${imagenes[0]}" alt="${pista.artista}">
            <img src="${imagenes[1]}" alt="${pista.artista}">
        </div>
    ` : imagenes.length === 3 ? `
        <div class="track-img-grid-3">
            <img src="${imagenes[0]}" alt="${pista.artista}">
            <img src="${imagenes[1]}" alt="${pista.artista}">
            <img src="${imagenes[2]}" alt="${pista.artista}">
        </div>
    ` : `
        <div class="track-img-grid-4">
            <img src="${imagenes[0]}" alt="${pista.artista}">
            <img src="${imagenes[1]}" alt="${pista.artista}">
            <img src="${imagenes[2]}" alt="${pista.artista}">
            <img src="${imagenes[3]}" alt="${pista.artista}">
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