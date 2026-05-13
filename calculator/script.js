let display = document.getElementById('result');
let expression = '';

// Append number to display
function appendNumber(num) {
    if (num === '.' && expression.includes('.')) {
        return; // Prevent multiple decimal points
    }
    expression += num;
    display.value = expression;
}

// Append operator to expression
function appendOperator(operator) {
    if (expression === '') {
        return; // Don't allow operator as first input
    }
    if (['+', '-', '*', '/'].includes(expression.charAt(expression.length - 1))) {
        return; // Prevent consecutive operators
    }
    expression += operator;
    display.value = expression;
}

// Calculate the result
function calculate() {
    try {
        if (expression === '') {
            return;
        }
        // Evaluate the expression
        let result = eval(expression);
        // Round to avoid floating point errors
        result = Math.round(result * 100000000) / 100000000;
        display.value = result;
        expression = result.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

// Clear the display
function clearDisplay() {
    expression = '';
    display.value = '';
}

// Delete last character
function deleteLastChar() {
    expression = expression.slice(0, -1);
    display.value = expression;
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '.') {
        appendNumber('.');
    } else if (['+', '-', '*', '/'].includes(key)) {
        event.preventDefault();
        appendOperator(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLastChar();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});