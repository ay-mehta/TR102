// Custom trig functions in degrees
function sinDeg(x) {
    return Math.sin(x * Math.PI / 180);
}
function cosDeg(x) {
    return Math.cos(x * Math.PI / 180);
}
function tanDeg(x) {
    return Math.tan(x * Math.PI / 180);
}

class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.clear();
    }

    clear() {
        this.displayValue = '';
        this.isResult = false;
    }

    delete() {
        if (!this.isResult) {
            this.displayValue = this.displayValue.slice(0, -1);
        }
    }

    appendText(text, isOperation = false, isFunction = false) {
        if (this.isResult) {
            if (isOperation || isFunction) {
                this.isResult = false;
            } else {
                this.displayValue = '';
                this.isResult = false;
            }
        }
        this.displayValue += text;
    }

    compute() {
        try {
            const preprocessed = this.preprocessExpression(this.displayValue);
            const result = eval(preprocessed);
            if (isNaN(result) || !isFinite(result)) {
                this.displayValue = 'Error';
            } else {
                this.displayValue = Number(result.toFixed(8)).toString();
            }
            this.isResult = true;
        } catch (e) {
            this.displayValue = 'Error';
            this.isResult = true;
        }
    }

    preprocessExpression(expression) {
        expression = expression.replace(/π/g, 'Math.PI');
        expression = expression.replace(/ sin\(/g, ' sinDeg(');
        expression = expression.replace(/ cos\(/g, ' cosDeg(');
        expression = expression.replace(/ tan\(/g, ' tanDeg(');
        expression = expression.replace(/√\(/g, 'Math.sqrt(');
        expression = expression.replace(/log\(/g, 'Math.log10(');
        expression = expression.replace(/exp\(/g, 'Math.exp(');
        expression = expression.replace(/÷/g, '/');
        return expression;
    }

    updateDisplay() {
        this.displayElement.innerText = this.displayValue;
        const length = this.displayValue.length;
        if (length > 20) {
            this.displayElement.style.fontSize = '1.5rem';
        } else if (length > 10) {
            this.displayElement.style.fontSize = '2rem';
        } else {
            this.displayElement.style.fontSize = '2.5rem';
        }
    }
}

// DOM elements
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const functionButtons = document.querySelectorAll('[data-function]');
const constantButtons = document.querySelectorAll('[data-constant]');
const bracketButtons = document.querySelectorAll('[data-bracket]');
const displayElement = document.querySelector('[data-display]');

const calculator = new Calculator(displayElement);

// Event listeners
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendText(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendText(button.innerText, true);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});

functionButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendText(button.innerText + '(', false, true);
        calculator.updateDisplay();
    });
});

constantButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendText(button.innerText);
        calculator.updateDisplay();
    });
});

bracketButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendText(button.innerText);
        calculator.updateDisplay();
    });
});