# Cambios aplicados

Reemplaza tus archivos actuales por estos (misma ruta, mismo nombre):

- `App.tsx` → raíz de `src/`
- `components/FloralCorner.tsx` → **archivo nuevo**, componente de flores reutilizable
- `components/Intro.tsx`
- `components/Hero.tsx`
- `components/VerseMusic.tsx`
- `components/LoveVerse.tsx`
- `components/CountdownLocation.tsx`
- `components/HotelLocation.tsx`
- `components/PolaroidGallery.tsx`
- `components/Timeline.tsx`
- `components/DressCode.tsx`
- `components/Gifts.tsx`
- `components/RsvpForm.tsx`

## Qué cambió

1. **Scroll snapping eliminado**: se quitaron `snap-y`, `snap-mandatory`, `snap-always`, `snap-start` de `App.tsx` y de todas las secciones. Ahora el scroll es libre y natural.

2. **Música al abrir el sobre**: el `<audio>` se movió a `App.tsx` (ya no vive dentro de `VerseMusic`). `Intro.tsx` recibe una prop `onPlayMusic` que se dispara en el mismo click con el que se abre el sobre — eso es clave, porque los navegadores solo permiten el autoplay de audio si ocurre dentro de un gesto del usuario (el click).

3. **Reproductor eliminado**: `VerseMusic.tsx` ya no tiene los controles de play/pause/skip; solo queda la foto y el versículo. Toda la sección quedó más limpia.

4. **Fecha corregida a 24 de octubre**: actualizada en `Hero.tsx`, `RsvpForm.tsx`, `HotelLocation.tsx` y en la fecha objetivo del contador en `CountdownLocation.tsx` (`2026-10-24T16:00:00`). El 24 de octubre de 2026 también cae en sábado, así que "Sabado" se mantiene correcto.

5. **Detalles florales para quitarle lo plano**: se creó `FloralCorner.tsx`, un adorno botánico en SVG (líneas + hojas + flores pequeñas) que usa `currentColor`, por lo que se adapta al color de cada sección con solo cambiar la clase de texto (`text-[#F6F1E9]/70`, `text-oliva-oscuro/25`, etc.). Se colocó en las esquinas de: Intro, Hero, VerseMusic, LoveVerse, Timeline, DressCode, Gifts y RsvpForm. No depende de ninguna imagen nueva, así que no tienes que exportar ni subir archivos extra.

6. **Hero mejorado**: overlay con degradado en vez de negro plano, separadores decorativos a los lados de la fecha, y las flores en las esquinas — para que la portada no se sienta tan vacía.

## Un ajuste opcional que te recomiendo

Si quieres subir aún más el nivel del Hero y el Intro, puedes reemplazar `FloralCorner` por una imagen PNG real de flores (acuarela, por ejemplo) con fondo transparente — el componente SVG que hice es elegante y liviano, pero una ilustración a color le da más "boda" que las líneas. Dime si quieres que te arme esa versión también.
