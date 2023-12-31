// calculator.js

let isOpeningParenthesis = true;

// Function to add content to the display
function addToDisplay(value) {
    // Get the display element
    var display = document.getElementById("display-window");
    if (value === '()') {
        if (isOpeningParenthesis) {
            display.textContent += '(';
        } else {
            display.textContent += ')';
        }
        isOpeningParenthesis = !isOpeningParenthesis;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display-window").textContent = "";
}

function deleteRecentChar() {
    displayValue += displayValue.slice(0, -1);
    document.getElementById("display-window").textContent += displayValue;
}

function calculateResult() {
    try {
        const result = evaluateExpression(displayValue);
        displayValue = result.toString();
        document.getElementById("display-window").textContent = displayValue;
    } catch (error) {
        displayValue = "Error!";
        document.getElementById("display-window").textContent = displayValue;
    }
}

function evaluateExpression(expression) {
    

    return eval(expression);
}