# Guía: publicar un post en el blog

> **Resumen en una línea:** guardás un archivo `.md` en `content/blog/` y el post ya queda en la web. No se toca ni una línea de código.

Esta guía cubre todo: crear el post, llenar el encabezado, dónde van las imágenes (la portada y las de adentro del artículo) y cómo publicarlo.

---

## 1. Los 3 pasos (versión rápida)

| Paso | Qué hacés | Dónde |
|---|---|---|
| 1 | Creás el archivo `mi-post.md` con su encabezado | `content/blog/` |
| 2 | Guardás las imágenes del post | `public/images/blog/mi-post/` |
| 3 | Escribís el artículo en Markdown | dentro del mismo `.md` |

Guardás, y listo: el post aparece en la página **Blogs** (y en la portada de inicio) con su tarjeta, su portada y su índice **"On this page"** generado solo. Al final del artículo sale **automáticamente** el disclaimer de uso de IA (más abajo te explico).

> Ya hay una plantilla lista para copiar: **`content/blog/_plantilla.md`**.
> Duplicá ese archivo, renombralo y tenés la estructura completa servida.

---

## 2. Crear el archivo

1. Entrá a la carpeta **`content/blog/`** del proyecto.
2. Copiá `_plantilla.md` y pegalo en esa misma carpeta.
3. Renombralo con el nombre del post:
   - ✅ `mi-post-de-okta.md`
   - ✅ `laboratorio-de-saml.md`
   - ❌ `Mi Post.md` (mayúsculas y espacios)
   - ❌ `mi post.md`
   - ❌ `post.md.txt` (doble extensión)

El nombre del archivo se convierte en la "firma" del post (el *slug*). Usá **minúsculas, sin espacios, palabras separadas con guion**. No tenés que registrarlo en ningún otro lado: la web lo detecta sola.

---

## 3. El encabezado del post (frontmatter)

Abrí el archivo `.md`. Al principio, entre los dos `---`, va la info del post. Se llama *frontmatter* y es lo único que hay que "configurar":

```markdown
---
title: "Mi primer post de IAM"
excerpt: "Resumen de 1–2 líneas que sale en la tarjeta del blog."
date: "2026-11-11"
tags: ["IAM", "Okta"]
cover: "/images/blog/mi-post-de-okta/portada.png"
coverAlt: "Lo que se ve en la imagen de portada"
---
```

### Qué significa cada campo

| Campo | ¿Obligatorio? | Qué hace | Si no lo ponés |
|---|---|---|---|
| `title` | ✅ | Título grande del artículo | Sale del nombre del archivo |
| `excerpt` | ✅ | Resumen en la tarjeta | Sale del primer párrafo |
| `date` | ✅ | Fecha que se muestra (y ordena: lo más nuevo primero) | No se muestra fecha |
| `tags` | ✅ | Etiquetas de la tarjeta y del artículo | No sale etiqueta |
| `cover` | Opcional | **Imagen de portada** (tarjeta + artículo) | Portada tipográfica elegante |
| `coverAlt` | Opcional | Descripción de la portada (accesibilidad) | Usa el título |
| `frameNote` | Opcional | Nota "Why this is here" arriba del artículo | No sale nada |
| `readTime` | Opcional | El "8 min read" | Se calcula solo con la extensión |
| `order` | Opcional | Desempate entre posts del mismo mes | Nombre del archivo |
| `draft` | Opcional | `true` = borrador oculto | Se publica |
| `slug` | Opcional | Cambia la "firma" del post | Nombre del archivo |

> ✳️ Los marcados como obligatorios tienen fallback automático si faltan, pero
> ponelos siempre: así el post queda exactamente como querés.

### Sobre la fecha

- Formato recomendado: `date: "2026-11-11"` (o `"2026-11"` si solo querés el mes).
- La web la muestra como **"November 2026"** automáticamente.
- Si le pasás texto libre (`date: "Agosto 2026"`), se muestra tal cual.
- Los posts se ordenan **del más nuevo al más viejo**.

### Consejos del frontmatter

- Poné los textos entre **comillas** (`title: "así"`) — evita problemas si el texto tiene `:` o `#`.
- Las tags van entre corchetes y separadas por coma: `["IAM", "Okta"]`.

---

## 4. Escribir el artículo

Debajo del segundo `---` se escribe en **Markdown normal**:

```markdown
Intro del post: un párrafo corto que enganche.

## Sección principal

Texto…

### Subsección

- listas
- **negritas**, *cursivas*, `código`
- [links](https://ejemplo.com) — los externos abren en pestaña nueva solos
```

### Reglas de oro

1. **Empezá las secciones con `##`** (dos almohadillas), no con `#`.
   El artículo ya tiene su título arriba (el del frontmatter), así que el cuerpo
   arranca en `##` y `###`. Además, los `##` y `###` **generan solos el índice
   "On this page"** que aparece al lado del artículo — cero trabajo extra.
2. Los links externos abren en pestaña nueva automáticamente (el que lee tu post no pierde tu portafolio).
3. Podés usar tablas, citas (`>`), listas numeradas y separadores (`---`) — es Markdown estándar (GFM).

---

## 5. Las imágenes

**Todo va en `public/images/blog/`, en una carpeta con el mismo nombre del post.**

Si tu post se llama `mi-post-de-okta.md`, la estructura es:

```
public/images/blog/mi-post-de-okta/
├── portada.png        ← imagen de portada
├── diagrama.png       ← imagen de adentro del post
└── captura-okta.png    ← otra imagen de adentro
```

### 5.1 Imagen de PORTADA

1. Guardá la imagen en `public/images/blog/mi-post-de-okta/portada.png`.
2. En el encabezado del post ponés:

```yaml
cover: "/images/blog/mi-post-de-okta/portada.png"
coverAlt: "Lo que se ve en la imagen"
```

> Si no querés portada, no pongas `cover` — la web arma una portada tipográfica
> elegante con el título. Pero con foto queda mejor 😉

> La portada también puede ser una **URL externa** (`https://…`) si la imagen
> vive en internet.

### 5.2 Imágenes DENTRO del artículo

Guardás la imagen en esa misma carpeta, y en el texto escribís:

```markdown
Así se ve la configuración:

![Diagrama del flujo SAML](/images/blog/mi-post-de-okta/diagrama.png)
```

- El formato es `![texto descriptivo](ruta de la imagen)`. El texto descriptivo
  sirve para lectores de pantalla (accesibilidad) — poné siempre algo con sentido.
- La ruta **siempre empieza con `/`**:
  - ✅ `/images/blog/mi-post-de-okta/diagrama.png`
  - ❌ `images/blog/...` (sin la barra inicial)
  - ❌ `C:\Usuarios\foto.png` o rutas de tu PC

### 5.3 Reglas de las imágenes

- **Sin espacios ni tildes en los nombres**: usá `captura-okta.png`, no `Captura Oktá.png`.
- Formatos: `png`, `jpg`, `webp` (y `svg` para diagramas).
- Tamaño razonable: intentá que no pasen de ~500 KB cada una para que la web cargue rápido. Si tenés capturas enormes, exportálas a `jpg` antes de subirlas.
- La proporción ideal de la **portada** es horizontal (tipo 16:9), porque se recorta un poquito para ajustarse.

---

## 6. Publicar

### En tu máquina (para verlo en local)

Guardás el archivo → abrís `http://localhost:3000` → **refrescás** → ya está.
El servidor de desarrollo lee `content/blog/` en cada carga: **no hay que reiniciar nada**.

### En GitHub (para que salga en la web pública)

El sitio se publica solo cuando hacés **push a `main`**:

```bash
git add content/blog/mi-post-de-okta.md public/images/blog/mi-post-de-okta/
git commit -m "Nuevo post: mi primer post de IAM"
git push
```

Hacés push → GitHub Actions reconstruye la página → en 1–2 minutos el post ya está en
**https://dieg0y.github.io**

> ⚠️ Acordate de agregar **las dos cosas**: el `.md` **y** la carpeta de imágenes.
> Si te olvidás la imagen, la portada sale tipográfica — no rompe nada, pero no es lo que querías.

### Sin usar la terminal (todo desde github.com)

1. **El post:** repo → `content/blog` → **Add file → Create new file** → lo llamás `mi-post.md` → pegás el contenido → **Commit changes**.
2. **La carpeta de imágenes:** repo → `public/images/blog` → **Add file → Create new file** → en el nombre escribí `mi-post/leeme.txt` (así GitHub crea la carpeta `mi-post`) → commit.
3. **Las imágenes:** entrá a la carpeta nueva → **Add file → Upload files** → arrastrás tus imágenes → commit.
4. El Actions se dispara solo y en 1–2 min el post está en la web.

---

## 7. Extras útiles

### El disclaimer de IA (automático, no lo escribas)

Al final de **todos** los posts sale solo este aviso:

> **A note on how this article was produced**
> AI tools were used to organize and format this document. All the information, research, and investigation behind it was done by Diego Yonoff Molina.

No hay que agregar nada en el `.md` — la web lo pone siempre. Si algún día quisieras cambiar el texto, está en `src/data/portfolio.ts` (constante `AI_DISCLAIMER`).

### Borrador (post oculto)

```yaml
draft: true
```

El post no sale en la web pero queda guardado en el repo. Cuando quieras publicarlo, quitás esa línea y listo.

### Cambiar el orden de dos posts del mismo mes

```yaml
order: 1   # número menor = aparece primero
```

### Ejemplo completo (post real mínimo)

`content/blog/laboratorio-saml.md`:

```markdown
---
title: "Laboratorio: flujo SAML con Okta y SimpleSAMLphp"
excerpt: "Monté un IdP de prueba y configuré un SP para entender el flujo SAML completo."
date: "2026-12-05"
tags: ["IAM", "SAML", "Okta", "Lab"]
cover: "/images/blog/laboratorio-saml/portada.png"
coverAlt: "Diagrama del flujo de aserción SAML"
---

Monté un laboratorio completo para entender cómo viaja una aserción SAML
entre el IdP y el SP. Este post documenta el paso a paso.

## Por qué SAML sigue importando

Texto…

## Arquitectura del laboratorio

![Diagrama del laboratorio](/images/blog/laboratorio-saml/diagrama.png)

Texto…

### Configuración del IdP

Pasos…

## Conclusiones

Lo que aprendí…
```

---

## 8. Subir PDFs (CV y certificados) para verlos SIN descargar

La web tiene un **visor de PDF integrado**: la gente hace clic en "View CV" o "View certificate" y el documento se abre ahí mismo en la página (los navegadores de escritorio los muestran sin descargar; en el celular el visor ofrece el botón "New tab" para abrirlo con el visor nativo).

### Dónde va cada PDF

| Documento | Ruta exacta | Nombre sugerido |
|---|---|---|
| CV | `public/cv-diego-yonoff-iam.pdf` | ya está en uso |
| Certificado Cambridge | `public/certs/linguaskill-diego-yonoff.pdf` | ese exacto |
| Otros certificados futuros | `public/certs/<nombre>-en-minusculas.pdf` | minúsculas y guiones |

- Solo **arrastrás el PDF** a esa carpeta, hacés commit + push, y ya queda visible en el visor.
- El botón "View certificate" de Cambridge primero intenta el PDF; si todavía no existe, muestra el reporte detallado (el modal con las barras de puntaje). O sea: mientras subís el PDF no pasa nada raro, y apenas lo subás, se ve ahí mismo.
- El CV ya está funcionando con el visor (botones "View CV" en la portada, el encabezado y la página About).

## 9. Checklist final

Antes de hacer push, revisá:

- [ ] El `.md` está en `content/blog/` con nombre en minúsculas y guiones.
- [ ] El encabezado tiene `title`, `excerpt`, `date` y `tags`.
- [ ] Las imágenes están en `public/images/blog/<nombre-del-post>/`.
- [ ] Las rutas de las imágenes empiezan con `/images/blog/…`
- [ ] El cuerpo del post arranca con `##` (no `#`).
- [ ] Lo probaste en local (`bun run dev` → refrescar) y se ve bien.

¿Dudas? Mirá los posts que ya existen en `content/blog/` — funcionan exactamente así y te sirven de ejemplo real.
