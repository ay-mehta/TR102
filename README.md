# Web Development — 4-Week Industrial Training Daily Diary

**Name:** Ayush Mehta  
**URN:** 2302489  
**Institute:** Academic Advancement of Information Technology (A2IT), Mohali  
**Duration:** 4 weeks (intensive practical training)

---

## Summary
This document is a concise, professional daily log of the 4-week web development training program. Each entry records the objective, core work done, key takeaways, and deliverables for the day. The diary focuses on practical skills, semantic markup, responsive layout techniques, and foundational JavaScript — all written to be clear and presentable for a GitHub repository.

---

## Table of contents
- [Week 1 — Foundations: HTML & Basic CSS](#week-1---foundations-html--basic-css)  
- [Week 2 — Layouts & Responsive Design](#week-2---layouts--responsive-design)  
- [Week 3 — Interactive UI & Intro to JavaScript](#week-3---interactive-ui--intro-to-javascript)  
- [Week 4 — JavaScript, DOM and Component Design](#week-4---javascript-dom-and-component-design)  
- [Skills Acquired](#skills-acquired)  
- [Repository & Deliverable Suggestions](#repository--deliverable-suggestions)  
- [Next Steps & Recommendations](#next-steps--recommendations)

---

## Week 1 - Foundations: HTML & Basic CSS

**Focus:** Semantic HTML, multimedia, tables, basic CSS structure and units.

### Day 1 — HTML: Nested Lists & Semantics
- **Objective:** Learn correct semantic list markup and nesting for structured content.
- **Work completed:**
  - Built ordered (`<ol>`) and unordered (`<ul>`) lists using different list types (roman, alphabetic, circle/square/disc bullets).
  - Implemented nested lists up to four levels with correct indentation and valid markup.
  - Ensured accessibility (clear semantics, readable structure).
- **Key takeaways:** Use semantic HTML to represent document structure; separate content (HTML) from presentation (CSS).
- **Deliverable:** `list-example.html` — structured demonstration of nested lists.

### Day 2 — HTML Audio & Tables
- **Objective:** Understand embedding audio and building tabular data with correct semantics.
- **Work completed:**
  - Used `<audio>` element with controls and fallbacks.
  - Implemented tables using `<table>`, `<tr>`, `<th>`, `<td>`; practiced `rowspan` and `colspan`.
  - Applied basic styling to enhance readability (padding, borders, alignment).
- **Key takeaways:** Reserve tables for tabular data; use captions and headers for clarity.
- **Deliverable:** `tables-audio-demo.html`

### Day 3 — Embeds & Composite Pages
- **Objective:** Embed external content and combine features into a prototype page.
- **Work completed:**
  - Used `<embed>` / `<iframe>` to add video and map content safely.
  - Built a small prototype introductory site combining links, embeds and table-based content layout.
- **Key takeaways:** Prefer responsive containers for embeds; always provide accessible captions/alt text.
- **Deliverable:** `gndec-prototype.html`

### Day 4 — CSS Basics
- **Objective:** Establish base styling and box model understanding.
- **Work completed:**
  - Covered External/Internal/Inline CSS and selector specificity.
  - Practiced `margin`, `padding`, `box-sizing`, class and id selectors.
  - Built simple layout containers using `<div>` and class-based styling.
- **Key takeaways:** Use external CSS for maintainability; `box-sizing: border-box` simplifies layout math.
- **Deliverable:** `css-basics-demo.html` + `styles.css`

### Day 5 — Icons, Selectors & Units
- **Objective:** Integrate icons and learn unit choices for layout.
- **Work completed:**
  - Integrated icon fonts (Font Awesome) for UI affordances.
  - Practiced descendant selectors and combinators.
  - Compared sizing units: `px`, `%`, `vh` and best use-cases.
- **Key takeaways:** Choose units for intent (absolute vs relative); use icons for clarity not decoration.
- **Deliverable:** `icons-and-units-demo.html`

---

## Week 2 - Layouts & Responsive Design

**Focus:** Background images, Flexbox, responsive patterns, navigation and hero sections.

### Day 1 — Background Image Layouts
- **Objective:** Create full-page backgrounds with accessible overlay content.
- **Work completed:**
  - Built several single-page layouts with full-bleed background images and overlay containers.
  - Positioned headings, CTAs and overlay boxes with attention to contrast and accessibility.
  - Implemented hover states and simple transitions.
- **Key takeaways:** Ensure readable contrast on image overlays; use `background-size: cover` and responsive positioning.
- **Deliverables:** `cupcake-landing.html`, `counseling-service.html`, `dog-sitting.html`

### Day 2 — Flexbox & Responsive Foundations
- **Objective:** Learn Flexbox for modern layout and make pages responsive with media queries.
- **Work completed:**
  - Used `display: flex`, `justify-content`, `align-items`, `flex-wrap`.
  - Styled form inputs with focus/hover states; ensured semantic HTML for forms.
  - Wrote media queries for breakpoints and responsive rearrangement.
- **Key takeaways:** Flexbox simplifies alignment; mobile-first queries are recommended.
- **Deliverables:** `banker-marketing.html`, `amortization-info.html`, `bombastic-burger.html`

### Day 3 — Flexbox Practice & Responsive Card Grid
- **Objective:** Reinforce responsive flows and card-based design.
- **Work completed:**
  - Built responsive two-column and card grid layouts that collapse to single column on small screens.
  - Used `flex-direction` changes in media queries and `flex-wrap` for dynamic grids.
- **Key takeaways:** Design for flexible content widths; test at common breakpoints (≤ 800px, ≤ 500px).
- **Deliverables:** `banker-responsive.html`, `college-cards.html`

### Day 4 — Header & Navigation Clone (Vegefoods)
- **Objective:** Implement a professional header + responsive navigation.
- **Work completed:**
  - Built top banner with contact info and a responsive nav with hamburger toggle.
  - Integrated icons and adjusted visibility for mobile/desktop.
  - Ensured accessible navigation (semantic nav, aria attributes where appropriate).
- **Key takeaways:** Keep navigation simple and test keyboard navigation.
- **Deliverable:** `vegefoods-header.html`

### Day 5 — Hero Section & Animated Background
- **Objective:** Build a polished hero area with subtle animation and typography.
- **Work completed:**
  - Implemented sticky navigation and a hero container with background animation using `@keyframes`.
  - Applied web fonts for brand typography and refined button interactions.
- **Key takeaways:** Use animations sparingly and ensure they don't reduce readability or accessibility.
- **Deliverable:** `vegefoods-hero.html`

---

## Week 3 - Interactive UI & Intro to JavaScript

**Focus:** Visual UI components, hover interactions and initial JavaScript setup.

### Day 1 — Transport Services Card Layout
- **Objective:** Design reusable card components for service listings.
- **Work completed:**
  - Built three-card layout for freight services with icon badges and CTA buttons.
  - Demonstrated absolute/relative positioning along with responsive spacing.
- **Key takeaways:** Create components that can be reused and styled consistently.
- **Deliverable:** `transport-cards.html`

### Day 2 — Image Hover Reveal
- **Objective:** Create interactive hover reveals without JavaScript.
- **Work completed:**
  - Used CSS sibling selectors and opacity transitions to reveal overlay text on hover.
  - Ensured smooth transitions and centered alignment using Flexbox.
- **Key takeaways:** Many interactions are possible purely with CSS for performance and simplicity.
- **Deliverable:** `hover-reveal.html`

### Day 3 — Image Zoom + Caption on Hover
- **Objective:** Implement a zoom and caption reveal for portfolio-style UI.
- **Work completed:**
  - Applied `transform: scale()` with transition for zoom effect; overlaid captions with opacity transitions.
  - Kept layout responsive via `vw`/`vh` and max-width constraints.
- **Key takeaways:** Use `will-change` and sensible transitions to avoid janky animations.
- **Deliverable:** `image-zoom-caption.html`

### Day 4 — JavaScript Setup (Node.js) & Basics
- **Objective:** Prepare the development environment and run simple JS.
- **Work completed:**
  - Installed Node.js for local JS execution and ran basic scripts (`console.log`).
  - Clarified differences between Node console and browser `document`/DOM.
  - Covered `var`, `let`, `const` and scoping behavior.
- **Key takeaways:** Use `let` and `const` for predictable scope; `document` APIs are browser-only.
- **Deliverable:** `node-setup-notes.md`, `hello-node.js`

### Day 5 — JavaScript Operators & Type Coercion
- **Objective:** Learn arithmetic, comparison, and string behavior in JS.
- **Work completed:**
  - Practiced arithmetic (`+`, `-`, `*`, `/`, `**`, `%`) and comparisons (`==` vs `===`).
  - Built examples to illustrate type coercion and operator precedence.
- **Key takeaways:** Prefer `===` for strict equality; be mindful of implicit conversions.
- **Deliverable:** `operators-demo.js`

---

## Week 4 - JavaScript, DOM and Component Design

**Focus:** Functions, strings, conditionals, arrays, objects, classes, DOM events and a small component-based UI.

### Day 1 — Functions, Strings & Data Types
- **Objective:** Master function syntax, string handling and basic data types.
- **Work completed:**
  - Wrote functions (classic + arrow syntax), used `typeof`, and experimented with string APIs (`slice`, `split`, `trim`, `replace`).
  - Practiced template literals and string capitalization routines.
- **Key takeaways:** Use template literals for readable interpolation; prefer immutability for simpler reasoning.
- **Deliverable:** `strings-and-functions.js`

### Day 2 — Control Flow, Arrays & DOM Basics
- **Objective:** Implement conditionals, loops and basic DOM manipulation.
- **Work completed:**
  - Used `if/else`, `switch`, `for`, and `.forEach()`.
  - Manipulated arrays with `slice`, `splice`, `reverse` and `sort`.
  - Updated DOM using `querySelector`, `innerText` and `addEventListener`.
- **Key takeaways:** Keep DOM selectors scoped; separate logic from UI updates when possible.
- **Deliverable:** `dom-basics.html`, `dom-examples.js`

### Day 3 — Objects and Classes
- **Objective:** Model data using object literals and ES6 classes.
- **Work completed:**
  - Defined objects with methods and created classes with constructors using `this`.
  - Instantiated multiple class instances to demonstrate reusability.
- **Key takeaways:** Use classes for reusable stateful components; prefer composition for flexibility.
- **Deliverable:** `classes-demo.js`

### Day 4 — Event Handling & Reusable Counters
- **Objective:** Build an encapsulated counter component and bind events.
- **Work completed:**
  - Implemented a `Counter` class that manages state and updates a display element.
  - Attached multiple event listeners to demonstrate composable behaviors.
- **Key takeaways:** Encapsulate UI logic in classes/modules for testability and reuse.
- **Deliverable:** `counter-component.html`, `counter.js`

### Day 5 — Mood Tracker (Bootstrap)
- **Objective:** Build a small interactive UI using Bootstrap for rapid styling.
- **Work completed:**
  - Built mood selection UI using Bootstrap buttons and dataset attributes.
  - Implemented `MoodHandler` class to switch emoji, text and page styles based on selection.
- **Key takeaways:** Combine library styling (Bootstrap) with custom JS logic for fast, consistent UI.
- **Deliverable:** `mood-tracker.html`, `mood-handler.js`

---

## Skills Acquired
- **Markup & Styling:** HTML5 semantic markup, accessible tables, responsive CSS, Flexbox, background layouts, responsive navigation.
- **UI Patterns:** Hero sections, card components, hover/animation effects, iconography.
- **JavaScript:** ES6 syntax (let/const, arrow functions), arrays, objects, classes, DOM manipulation, event handling.
- **Tools & Practices:** Node.js (local execution), Bootstrap, Font Awesome, Google Fonts, modular file structure and Git/GitHub upload workflow.
- **Soft skills:** Component-based thinking, accessibility awareness, responsive-first design, code organization.

---

## Repository & Deliverable Suggestions
Organize the GitHub repository with a clear structure: