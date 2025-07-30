## What Was Done

- Practiced DOM selection using querySelector and querySelectorAll.
- Handled events with .addEventListener() for button clicks.
- Dynamically updated text content of elements using .innerText.
- Implemented a reusable Counter class to track click count.
- Demonstrated reusability of buttons by assigning multiple event listeners.

---

## Highlights

- **DOM Interaction**:
  - Selected all buttons with .color-btn and updated the <p> tag to show the button's color when clicked.
  - Used innerText to extract button text and set it as part of display.

- **Event Handling**:
  - Added click event listeners to buttons with .count-btn to respond to user interaction.
  - Used a loop (forEach) to attach listeners to multiple buttons at once.

- **Class Based Counter**:
  - Defined a Counter class with constructor(), increment(), and updateDisplay() methods.
  - Bound the counter to a display element so it updates automatically with every click.
  - Demonstrated encapsulation: count logic was hidden inside the class, promoting reusability.

- **Code Reuse**:
  - Both color-changing and counter-updating functionalities were bound to the same set of buttons (.count-btn), showcasing how multiple behaviors can coexist per element.