// Import mathjs for safe expression evaluation
// <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/12.4.2/math.min.js"></script>

// Custom trig functions in degrees
function sinDeg(x) {
    if (typeof x !== 'number' || isNaN(x)) throw new Error('Invalid input for sin');
    return Math.sin(x * Math.PI / 180);
}

function cosDeg(x) {
    if (typeof x !== 'number' || isNaN(x)) throw new Error('Invalid input for cos');
    return Math.cos(x * Math.PI / 180);
}

function tanDeg(x) {
    if (typeof x !== 'number' || isNaN(x)) throw new Error('Invalid input for tan');
    if (Math.abs(x % 180) === 90) throw new Error('tan undefined at 90° or 270°');
    return Math.tan(x * Math.PI / 180);
}

function sqrtSafe(x) {
    if (typeof x !== 'number' || isNaN(x)) throw new Error('Invalid input for sqrt');
    if (x < 0) throw new Error('Square root of negative number');
    return Math.sqrt(x);
}

class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.maxInputLength = 100;
        this.clear();
    }

    clear() {
        this.displayValue = '';
        this.isResult = false;
        this.errorMessage = '';
    }

    delete() {
        if (this.displayValue && !this.isResult) {
            this.displayValue = this.displayValue.slice(0, -1);
        }
    }

    appendText(text, isOperation = false, isFunction = false) {
        if (this.displayValue.length >= this.maxInputLength) {
            this.errorMessage = 'Input too long';
            return;
        }

        if (this.isResult && !isOperation && !isFunction) {
            this.displayValue = '';
            this.isResult = false;
        } else if (this.isResult && (isOperation || isFunction)) {
            this.isResult = false;
        }

        // Prevent consecutive operators
        const lastChar = this.displayValue.slice(-1);
        const operators = ['+', '-', '*', '/', '÷'];
        if (operators.includes(text) && operators.includes(lastChar)) {
            this.errorMessage = 'Invalid: consecutive operators';
            return;
        }

        this.displayValue += text;
        this.errorMessage = '';
    }

    compute() {
        if (!this.displayValue) {
            this.errorMessage = 'Empty expression';
            return;
        }

        try {
            // Validate parentheses
            if (!this.hasBalancedParentheses(this.displayValue)) {
                throw new Error('Unbalanced parentheses');
            }

            // Preprocess expression
            const preprocessed = this.preprocessExpression(this.displayValue);

            // Evaluate using mathjs with custom scope
            const result = math.evaluate(preprocessed, {
                sin: sinDeg,
                cos: cosDeg,
                tan: tanDeg,
                sqrt: sqrtSafe,
                log: Math.log10,
                exp: Math.exp,
                π: Math.PI
            });

            if (isNaN(result) || !isFinite(result)) {
                throw new Error('Invalid result');
            }

            this.displayValue = Number(result.toFixed(8)).toString();
            this.isResult = true;
            this.errorMessage = '';
        } catch (e) {
            this.errorMessage = e.message || 'Calculation error';
            this.displayValue = this.errorMessage;
            this.isResult = true;
        }
    }

    preprocessExpression(expression) {
        // Replace ÷ with / and ensure π is treated as a constant
        let processed = expression.replace(/÷/g, '/').replace(/π/g, 'π');

        // Basic sanitization: allow numbers, operators, functions, and parentheses
        processed = processed.replace(/[^0-9+\-*/().^πsincostan√logexp ]/g, '');

        return processed;
    }

    hasBalancedParentheses(expression) {
        let count = 0;
        for (let char of expression) {
            if (char === '(') count++;
            if (char === ')') count--;
            if (count < 0) return false;
        }
        return count === 0;
    }

    updateDisplay() {
        this.displayElement.innerText = this.errorMessage || this.displayValue || '0';
        const length = this.displayValue.length;
        this.displayElement.style.fontSize = `clamp(1rem, ${3 - length * 0.05}rem, 2.5rem)`;
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

// Validate DOM elements
if (!displayElement || !equalsButton || !deleteButton || !allClearButton) {
    console.error('Required DOM elements are missing');
    throw new Error('Calculator initialization failed: Missing DOM elements');
}

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

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        calculator.appendText(key);
    } else if (['+', '-', '*', '/', '÷'].includes(key)) {
        calculator.appendText(key, true);
    } else if (key === 'Enter') {
        calculator.compute();
    } else if (key === 'Backspace') {
        calculator.delete();
    } else if (key === 'Escape') {
        calculator.clear();
    } else if (key === '(' || key === ')') {
        calculator.appendText(key);
    }
    calculator.updateDisplay();
});