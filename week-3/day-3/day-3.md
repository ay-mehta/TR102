# Image Zoom with Caption on Hover

## What Was Done

- Created a hover-based **zoom-in effect** on an image using `transform: scale`.
- Overlaid a **caption** (`<p>`) that becomes visible when the container is hovered.
- Used **absolute positioning** and `z-index` to stack caption over the image.
- Applied **transition effects** for smooth zoom interaction.
- Maintained structure using **Flexbox-aligned centering**, `vw` units for responsiveness, and minimal box model interference.

---

## Highlights

- `.container img:hover` triggers a zoom (`scale(1.2)`).
- Caption appears only when the user hovers over the container.
- Utilizes `transition` and `transform` for smooth animation.
- Responsive box dimensions with `vw` units.
- Clean layout: no JS used, pure HTML & CSS.

- [View Source Code on GitHub](image-zoom.html)
