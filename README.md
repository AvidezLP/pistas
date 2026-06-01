# Avidez Pistas Bolivia

Proyecto web para compartir pistas instrumentales gratuitas usando GitHub Pages y MediaFire.

## Páginas

- `index.html`: página de inicio.
- `pistas.html`: biblioteca general de pistas.
- `grupos.html`: repertorios por agrupación.
- `grupo.html`: vista individual de cada grupo.
- `solicitar.html`: formulario para solicitar una pista por WhatsApp.
- `donar.html`: página de donaciones.
- `contacto.html`: contacto y aviso importante.

## Logo

El logo está guardado en:

```txt
assets/img/niño.png
```

## QR de donación

Coloca tu imagen QR en:

```txt
assets/img/qr-donacion.png
```

## Cambiar WhatsApp

Busca este número en los archivos:

```txt
59100000000
```

y reemplázalo por tu número con código de Bolivia.

Ejemplo:

```txt
59171234567
```

## Agregar un grupo

En `js/data.js`, agrega:

```js
{
    id: "nombre-del-grupo",
    nombre: "Nombre del Grupo",
    descripcion: "Descripción del repertorio.",
    generoPrincipal: "Cumbia Sureña"
}
```

## Agregar una pista

En `js/data.js`, agrega:

```js
{
    titulo: "Nombre de la canción",
    artista: "Nombre del grupo",
    grupoId: "nombre-del-grupo",
    genero: "Cumbia Sureña",
    tono: "Lam",
    bpm: "96",
    duracion: "4:12",
    demo: "LINK_DEMO_MP3",
    descarga: "LINK_MEDIAFIRE"
}
```
