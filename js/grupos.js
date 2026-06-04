const listaGrupos = document.getElementById("listaGrupos");
const buscadorGrupos = document.getElementById("buscadorGrupos");

function limpiarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function mostrarGrupos() {
    const texto = limpiarTexto(buscadorGrupos.value.trim());

    listaGrupos.innerHTML = "";

    grupos
        .filter(grupo => {
            const contenido = limpiarTexto(
                `${grupo.nombre} ${grupo.descripcion} ${grupo.generoPrincipal}`
            );

            return contenido.includes(texto);
        })
        .sort((a, b) => a.nombre.localeCompare(b.nombre))
        .forEach(grupo => {
            const total = pistas.filter(p =>
    p.grupoId === grupo.id ||
    (p.grupos && p.grupos.includes(grupo.id))
).length;

            const item = document.createElement("div");
            item.className = "col-md-6 col-lg-4";

            item.innerHTML = `
                <div class="group-card">

                    <img src="${grupo.imagen}"
                         alt="${grupo.nombre}"
                         class="group-img"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">

                    <div class="group-cover" style="display:none;">
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