const formSolicitud = document.getElementById("formSolicitud");

formSolicitud.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const cancion = document.getElementById("cancion").value.trim();
    const artista = document.getElementById("artista").value.trim();
    const genero = document.getElementById("genero").value;
    const observacion = document.getElementById("observacion").value.trim();

    const numeroWhatsApp = "59175830320";

    const mensaje =
        `Hola Avidez Pistas Bolivia, quiero solicitar una pista instrumental.%0A%0A` +
        `Nombre: ${encodeURIComponent(nombre)}%0A` +
        `Canción: ${encodeURIComponent(cancion)}%0A` +
        `Artista/Grupo: ${encodeURIComponent(artista)}%0A` +
        `Género: ${encodeURIComponent(genero)}%0A` +
        `Observación: ${encodeURIComponent(observacion)}`;

    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, "_blank");
});
