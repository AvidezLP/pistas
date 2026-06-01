const grupos = [
    {
        id: "explosion-cumbiera",
        nombre: "Explosión Cumbiera",
        descripcion: "Repertorio de ejemplo para pistas de cumbia con sabor y sureña.",
        generoPrincipal: "Cumbia con Sabor"
    },
    {
        id: "sangre-cumbiera",
        nombre: "Sangre Cumbiera",
        descripcion: "Carpeta de ejemplo para organizar instrumentales por grupo.",
        generoPrincipal: "Cumbia Sureña"
    },
    {
        id: "maroyu",
        nombre: "Maroyu",
        descripcion: "Repertorio de ejemplo para cumbia chicha y tropical.",
        generoPrincipal: "Cumbia Chicha"
    }
];

const pistas = [
    {
        titulo: "MiX Cuatro Palabras / Bebiendo Lágrimas / Para Que Quiero Un Corazón / Amor Se Escribe con Llanto",
        artista: "Explosión Cumbiera",
        grupoId: "explosion-cumbiera",
        genero: "Cumbia con Sabor",
        tono: "",
        bpm: "93",
        duracion: "8:34",
        descarga: "https://www.mediafire.com/file/dv9fkn0y1eihxjv/MiX_Cuatro_Palabras_Bebiendo_L%25C3%25A1grimas_Para_Que_Quiero_Un_Coraz%25C3%25B3n_Amor_Se_Escribe_con_Llanto_-_Explosi%25C3%25B3n_Cumbiera.mp3/file"
    },
    {
        titulo: "MiX Amor Se Escribe Con Llanto - Explosión Cumbiera",
        artista: "Explosión Cumbiera",
        grupoId: "explosion-cumbiera",
        genero: "Cumbia con Sabor",
        tono: "",
        bpm: "93",
        duracion: "1:09",
        descarga: "https://www.mediafire.com/file/2lov5l2lxdbb3om/MiX_Amor_Se_Escribe_Con_Llanto_-_Explosi%25C3%25B3n_Cumbiera.mp3/file"
    },
    {
        titulo: "MiX Bebiendo Lágrimas - Explosión Cumbiera",
        artista: "Explosión Cumbiera",
        grupoId: "explosion-cumbiera",
        genero: "Cumbia con Sabor",
        tono: "",
        bpm: "93",
        duracion: "1:44",
        descarga: "https://www.mediafire.com/file/as94jtnxnpxcupv/MiX_Bebiendo_L%25C3%25A1grimas_-_Explosi%25C3%25B3n_Cumbiera.mp3/file"
    },
    {
        titulo: "MiX Cuatro Palabras - Explosión Cumbiera",
        artista: "Explosión Cumbiera",
        grupoId: "explosion-cumbiera",
        genero: "Cumbia con Sabor",
        tono: "",
        bpm: "93",
        duracion: "1:43",
        descarga: "https://www.mediafire.com/file/u0x3k8486dq5etd/MiX_Cuatro_Palabras_-_Explosi%25C3%25B3n_Cumbiera.mp3/file"
    },
    {
        titulo: "MiX Historia De Un Amor - Explosión Cumbiera",
        artista: "Explosión Cumbiera",
        grupoId: "explosion-cumbiera",
        genero: "Cumbia con Sabor",
        tono: "",
        bpm: "93",
        duracion: "2:04",
        descarga: "https://www.mediafire.com/file/j2kw3374yz3bdj6/MiX_Historia_De_Un_Amor_-_Explosi%25C3%25B3n_Cumbiera.mp3/file"
    },
    {
        titulo: "MiX Para Que Quiero Un Corazón - Explosión Cumbiera",
        artista: "Explosión Cumbiera",
        grupoId: "explosion-cumbiera",
        genero: "Cumbia con Sabor",
        tono: "",
        bpm: "93",
        duracion: "1:53",
        descarga: "https://www.mediafire.com/file/9pj3sunhe2nqptw/MiX_Para_Que_Quiero_Un_Coraz%25C3%25B3n_-_Explosi%25C3%25B3n_Cumbiera.mp3/file"
    },
    {
        titulo: "Ejemplo - Cumbia Sureña",
        artista: "Sangre Cumbiera",
        grupoId: "sangre-cumbiera",
        genero: "Cumbia Sureña",
        tono: "Mim",
        bpm: "94",
        duracion: "4:25",
        demo: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        descarga: "https://www.mediafire.com/"
    },
    {
        titulo: "Ejemplo - Cumbia Chicha",
        artista: "Maroyu",
        grupoId: "maroyu",
        genero: "Cumbia Chicha",
        tono: "Rem",
        bpm: "100",
        duracion: "3:45",
        demo: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        descarga: "https://www.mediafire.com/"
    }
];

function crearTarjetaPista(pista) {
    return `
        <div class="track-card">
            <div class="track-cover">
                <i class="bi bi-music-note-list"></i>
            </div>

            <h3>${pista.titulo}</h3>

            <p class="text-secondary mb-0">
                Grupo/Referencia: ${pista.artista}
            </p>

            <div class="track-meta">
                <span><i class="bi bi-vinyl"></i> ${pista.genero}</span>
                <span><i class="bi bi-music-note"></i> Tono: ${pista.tono}</span>
                <span><i class="bi bi-speedometer2"></i> ${pista.bpm} BPM</span>
                <span><i class="bi bi-clock"></i> ${pista.duracion}</span>
            </div>

            <div>
                <a href="${pista.descarga}" class="btn-download" target="_blank">
               <i class="bi bi-download"></i>
                Descargar
                </a>
            </div>

            <div class="donation-mini">
                <p>
                    <i class="bi bi-heart"></i>
                    La descarga es gratis. Si gustas apoyar el proyecto, puedes hacer una donación voluntaria.
                </p>

                <a href="donar.html" class="btn-donate">
                    <i class="bi bi-qr-code"></i>
                    Donar voluntariamente
                </a>
            </div>
        </div>
    `;
}
