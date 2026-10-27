# Lumen Estética · Web de demostración

Landing page de un centro de estética ficticio, hecha con [Astro](https://astro.build) y sin frameworks de interfaz. Sirve como ejemplo de portfolio: para adaptarla a otro negocio solo hay que cambiar un fichero de datos y las fotos.

- Una sola página con todas las secciones, más las páginas legales (`/aviso-legal`, `/privacidad`, `/cookies`).
- Sin cookies, sin analítica, sin mapas incrustados y sin formularios.
- JavaScript mínimo (menú móvil y pestañas de tratamientos). La página funciona sin JavaScript.

## Requisitos

- [Node.js](https://nodejs.org) 22.23.4 o superior (recomendado: Node 24, el que indica `.nvmrc`).

## Instalar y probar en local

```bash
cd estetica
npm install
npm run dev
```

Abre <http://localhost:4321> en el navegador. Los cambios se ven al momento.

Para comprobar la versión final, como quedará publicada:

```bash
npm run build     # genera la web en la carpeta dist/
npm run preview   # la sirve en http://localhost:4321
```

## Cambiar los datos del negocio

Todo el contenido está en **`src/data/site.ts`**: nombre, dirección, teléfono, WhatsApp, email, horario, tratamientos y precios, bonos, equipo, reseñas, preguntas frecuentes, textos de cada sección y datos legales. Los componentes no llevan textos fijos.

Algunas claves útiles:

| Qué | Dónde, en `site.ts` |
| --- | --- |
| Nombre, URL pública, rango de precios | `business` |
| Dirección y enlace al mapa | `address` |
| Teléfono, email, Instagram | `contact` (si `instagram` está vacío, no se muestra) |
| Mensajes de WhatsApp | `whatsapp` (`{tratamiento}` se sustituye por el nombre del tratamiento) |
| Horario | `hours` |
| Título y descripción para Google | `seo` |
| Tratamientos y precios | `treatments` |
| Titular y NIF para las páginas legales | `legal` (sustituye los `[DATO DE EJEMPLO]`) |

El email que se ve en la web (`emailDisplay`) puede ser distinto del que recibe los mensajes (`emailHref`).

Los datos estructurados para Google (JSON-LD de tipo `BeautySalon`) se generan solos a partir de `site.ts`, en `src/lib/schema.ts`.

## Cambiar las fotos

Las fotos están en `src/assets/fotos/`. Para cambiar una, sustituye el fichero por otro **con el mismo nombre** (o cambia la ruta del `import` al principio de `site.ts`) y actualiza su texto alternativo (`alt`) en `site.ts`.

- Usa JPG de buena calidad (unos 2000 px de ancho). Astro las recorta, las convierte a AVIF y WebP y genera los tamaños para cada pantalla al hacer el build.
- Proporciones recomendadas: portada 3:2 horizontal, retratos 4:5, tratamientos 4:5, galería 4:3, imagen para compartir 1200 × 630.
- Anota el origen y la licencia de cada foto en `FOTOS.md`.

El mapa de contacto es una ilustración (`src/assets/mapa.svg`) que enlaza a Google Maps. Si cambias de dirección, edita también el nombre de la calle de ese fichero.

## Cambiar la paleta y las tipografías

Están al principio de **`src/styles/global.css`**, como variables CSS (`--color-bg`, `--color-text`, `--color-accent`, `--font-heading`, etc.).

- Los botones son oscuros con texto claro porque el texto blanco sobre el dorado no cumple el contraste mínimo AA (2,2:1). El dorado (`--color-accent`) se usa solo en detalles, y `--color-accent-text` es un dorado oscuro que sí se puede usar para textos.
- Las tipografías (Fraunces e Inter) se sirven desde la propia web con [Fontsource](https://fontsource.org). Para cambiarlas, instala otra (`npm install @fontsource-variable/nombre`), cambia los `import` de `src/layouts/BaseLayout.astro` y las variables `--font-heading` y `--font-body`.

## Pasar de demo a web real

En `src/data/site.ts`:

```ts
export const demo = false;
```

- Con `demo = true` (por defecto) la web lleva `<meta name="robots" content="noindex, nofollow">` y `robots.txt` bloquea el rastreo: Google no la indexa.
- Con `demo = false` se quita la etiqueta y `robots.txt` permite el rastreo e indica el sitemap.

Antes de publicarla como web real, revisa también:

- `business.url`: la dirección definitiva (se usa en el sitemap, Open Graph y datos estructurados).
- `legal`: titular, NIF y registro.
- `trust.note` y `reviews.label`: quita los avisos de «datos de ejemplo» y pon datos y reseñas reales.
- `footer.copyright`.

## Publicar en Cloudflare Pages

1. Sube el repositorio a GitHub.
2. En el panel de Cloudflare, ve a **Workers & Pages → Crear → Pages → Conectar a Git** y elige el repositorio.
3. Configura el build:
   - **Framework preset:** Astro
   - **Directorio raíz (Root directory):** `estetica`
   - **Comando de build:** `npm run build`
   - **Directorio de salida:** `dist`
4. Pulsa **Guardar e implementar**. Cloudflare usa la versión de Node indicada en `.nvmrc`; si diera problemas, añade la variable de entorno `NODE_VERSION` con el valor `24`.

Cada vez que subas cambios a la rama principal, Cloudflare publicará la web de nuevo. Para usar un dominio propio, añádelo en **Dominios personalizados** y actualiza `business.url` en `site.ts`.

## Estructura

```
estetica/
├── public/                 favicon y ficheros que se copian tal cual
├── src/
│   ├── assets/             fotos y mapa (se optimizan en el build)
│   ├── components/         una sección por componente
│   ├── data/site.ts        TODO el contenido
│   ├── layouts/            plantilla base y de páginas legales
│   ├── lib/schema.ts       datos estructurados JSON-LD
│   ├── pages/              portada, páginas legales y robots.txt
│   └── styles/global.css   variables y estilos generales
├── FOTOS.md                origen y licencia de cada foto
└── astro.config.mjs
```
