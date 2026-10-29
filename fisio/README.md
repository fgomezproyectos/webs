# Axis Fisioterapia · Web de demostración

Landing page de un centro de fisioterapia ficticio, hecha con [Astro](https://astro.build) y sin frameworks de interfaz. Sirve como ejemplo de portfolio: para adaptarla a otro centro solo hay que cambiar un fichero de datos y las fotos.

- Una sola página con todas las secciones, más las páginas legales (`/aviso-legal`, `/privacidad`, `/cookies`).
- Sin cookies, sin analítica, sin mapas incrustados y sin formularios.
- JavaScript mínimo (solo el menú del móvil). La página funciona sin JavaScript.

## Requisitos

- [Node.js](https://nodejs.org) 22.23.4 o superior (recomendado: Node 24, el que indica `.nvmrc`).

## Instalar y probar en local

```bash
cd fisio
npm install
npm run dev
```

Abre <http://localhost:4321> en el navegador. Los cambios se ven al momento.

Para comprobar la versión final, como quedará publicada:

```bash
npm run build     # genera la web en la carpeta dist/
npm run preview   # la sirve en http://localhost:4321
```

## Cambiar los datos del centro

Todo el contenido está en **`src/data/site.ts`**: nombre, dirección, teléfono, WhatsApp, email, horario, zonas de dolor, tratamientos, pasos de la primera visita, tarifas, equipo, reseñas, preguntas frecuentes, textos de cada sección y datos legales. Los componentes no llevan textos fijos.

| Qué | Dónde, en `site.ts` |
| --- | --- |
| Nombre, URL pública, rango de precios | `business` |
| Dirección y enlace al mapa | `address` |
| Teléfono, email, Instagram | `contact` (si `instagram` está vacío, no se muestra) |
| Mensajes de WhatsApp | `whatsapp` (`{motivo}` se sustituye por la zona o el tratamiento) |
| Horario | `hours` |
| Título y descripción para Google | `seo` |
| Franja de datos | `stats` |
| Zonas de dolor | `painAreas` (el icono se elige entre los de `src/components/Icon.astro`) |
| Tratamientos | `treatments` |
| Tarifas | `pricing` |
| Equipo | `team` |
| Titular, NIF, registro sanitario y colegio | `legal` (sustituye los `[DATO DE EJEMPLO]`) |

El email que se ve en la web (`emailDisplay`) puede ser distinto del que recibe los mensajes (`emailHref`).

Los datos estructurados para Google (JSON-LD de tipo `Physiotherapy`, un `MedicalBusiness`) se generan solos a partir de `site.ts`, en `src/lib/schema.ts`.

## Cambiar las fotos

Las fotos están en `src/assets/fotos/`. Para cambiar una, sustituye el fichero por otro **con el mismo nombre** (o cambia la ruta del `import` al principio de `site.ts`) y actualiza su texto alternativo (`alt`) en `site.ts`.

- Usa JPG de buena calidad (1600–2000 px de ancho). Astro las recorta, las convierte a AVIF y WebP y genera los tamaños para cada pantalla al hacer el build.
- Proporciones: portada 4:5 vertical, retratos 4:5, tratamientos 4:3, imagen para compartir 1200 × 630.
- `compartir.jpg` es una composición (foto + logo + título). Si cambias de centro, rehazla con cualquier editor de imágenes.
- Anota el origen y la licencia de cada foto en `FOTOS.md`.

El mapa de contacto es una ilustración (`src/assets/mapa.svg`) que enlaza a Google Maps. Si cambias de dirección, edita también el nombre de la calle y del centro en ese fichero.

## Cambiar la paleta y la tipografía

Están al principio de **`src/styles/global.css`**, como variables CSS (`--color-text`, `--color-accent`, `--color-block`, `--font-sans`, `--radius`, etc.).

- El verde azulado `--color-accent` (#0E7C7B) cumple el contraste AA con texto blanco (5,0:1) y sobre blanco, pero sobre el fondo de bloque #EAF4F4 se queda en 4,48:1. Por eso los textos en color de acento sobre esos bloques usan `--color-accent-strong` (#0B6B6A, 5,6:1).
- La tipografía (Plus Jakarta Sans) se sirve desde la propia web con [Fontsource](https://fontsource.org). Para cambiarla, instala otra (`npm install @fontsource-variable/nombre`), cambia los `import` de `src/layouts/BaseLayout.astro` y la variable `--font-sans`.
- Los colores del logo también están en `src/components/Logo.astro` y en `public/favicon.svg`.

## Pasar de demo a web real

En `src/data/site.ts`:

```ts
export const demo = false;
```

- Con `demo = true` (por defecto) la web lleva `<meta name="robots" content="noindex, nofollow">` y `robots.txt` bloquea el rastreo: Google no la indexa.
- Con `demo = false` se quita la etiqueta y `robots.txt` permite el rastreo e indica el sitemap.

Antes de publicarla como web real, revisa también:

- `business.url`: la dirección definitiva (se usa en el sitemap, Open Graph y datos estructurados).
- `legal`: titular, NIF, registro mercantil, registro sanitario del centro y número de colegiado de cada fisioterapeuta.
- `team`: números de colegiado reales (sustituye «Nº col. 00000 (ejemplo)»).
- `stats.note` y `reviews.label`: quita los avisos de «datos de ejemplo» y pon datos y reseñas reales.
- `footer.copyright`.

## Publicar en Cloudflare Pages

1. Sube el repositorio a GitHub.
2. En el panel de Cloudflare, ve a **Workers & Pages → Crear**. Si te propone crear un Worker, busca el enlace **«¿Quieres implementar una aplicación de Pages? Comenzar»** (flujo de Pages) y elige **Importar un repositorio de Git**.
3. Elige el repositorio y configura el build:
   - **Framework preset:** Astro
   - **Directorio raíz (Root directory):** `fisio`
   - **Comando de build:** `npm run build`
   - **Directorio de salida:** `dist`
   - **Variable de entorno:** `NODE_VERSION` = `24`
4. Pulsa **Guardar e implementar**.

Cada vez que subas cambios a la rama principal, Cloudflare publicará la web de nuevo. Cuando sepas la dirección definitiva (por ejemplo `https://axis-fisioterapia.pages.dev` o un dominio propio), ponla en `business.url` en `site.ts`.

## Estructura

```
fisio/
├── public/                 favicon y ficheros que se copian tal cual
├── src/
│   ├── assets/             fotos y mapa (se optimizan en el build)
│   ├── components/         una sección por componente, más Icon y Logo
│   ├── data/site.ts        TODO el contenido
│   ├── layouts/            plantilla base y de páginas legales
│   ├── lib/schema.ts       datos estructurados JSON-LD
│   ├── pages/              portada, páginas legales y robots.txt
│   └── styles/global.css   variables y estilos generales
├── FOTOS.md                origen y licencia de cada foto
└── astro.config.mjs
```
