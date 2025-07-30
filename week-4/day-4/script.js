let color_buttons = document.querySelectorAll('.color-btn');
let color_display = document.querySelector('#colorDisplay');

color_buttons.forEach(button => {
    button.addEventListener('click', () => {
        let color = button.innerText;
        console.log(button.innerText);
        color_display.innerText = "Current Color: " + color;
    });
});

//---

class Counter {
    constructor(displayElement) {
        this.count = 0;
        this.displayElement = displayElement;
    }

    increment() {
        this.count++;
        this.updateDisplay();
    }

    updateDisplay() {
        this.displayElement.innerText = "Count: " + this.count;
    }
}

let count_display = document.querySelector('#counterDisplay');
let counter = new Counter(count_display);

let count_buttons = document.querySelectorAll('.count-btn');

count_buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        counter.increment();
    });
});