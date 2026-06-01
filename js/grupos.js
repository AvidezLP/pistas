const listaGrupos = document.getElementById("listaGrupos");
const buscadorGrupos = document.getElementById("buscadorGrupos");

function mostrarGrupos() {
    const texto = buscadorGrupos.value.toLowerCase().trim();

    listaGrupos.innerHTML = "";

    grupos
        .filter(grupo => {
            const contenido = `${grupo.nombre} ${grupo.descripcion} ${grupo.generoPrincipal}`.toLowerCase();
            return contenido.includes(texto);
        })
        .forEach(grupo => {
            const total = pistas.filter(p => p.grupoId === grupo.id).length;
            const item = document.createElement("div");

            item.className = "col-md-6 col-lg-4";

            item.innerHTML = `
                <div class="group-card">
                    <div class="group-cover">
                        <i class="bi bi-folder2-open"></i>
                    </div>

                    <h3>${grupo.nombre}</h3>

                    <p>${grupo.descripcion}</p>

                    <div class="track-meta">
                        <span><i class="bi bi-vinyl"></i> ${grupo.generoPrincipal}</span>
                        <span><i class="bi bi-music-note-list"></i> ${total} pistas</span>
                    </div>

                    <a href="grupo.html?grupo=${grupo.id}" class="btn-main">
                        <i class="bi bi-eye"></i>
                        Ver repertorio
                    </a>
                </div>
            `;

            listaGrupos.appendChild(item);
        });
}

buscadorGrupos.addEventListener("input", mostrarGrupos);

mostrarGrupos();
