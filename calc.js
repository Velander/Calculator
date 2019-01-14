// JavaScript source code
var currentValue = "0";
var lastValue = "0";
var lastOperation = "";
var total = "0";
var lastTotal = "0";
var runningTotal = "";


function keyPress(k1) {
    switch (k1) {
        case "C":
            currentValue = "0";
            lastValue = "";
            total = "";
            lastTotal = "";
            lastOperation = "";
            runningTotal = "0";
            var div = document.getElementById('history');
            div.textContent = runningTotal;
            var div = document.getElementById('display');
            div.textContent = currentValue;
            break;
        case "CE":
            currentValue = "0";
            var div = document.getElementById('display');
            div.textContent = currentValue;
            break;
        case "=":
        case "+":
        case "*":
        case "/":
        case "-":
            if (lastOperation) {
                switch (lastOperation) {
                    case "-":
                        // Subtraction
                        total = Number(lastValue) - Number(currentValue);
                        break;
                    case "+":
                        // Addition
                        total = Number(lastValue) + Number(currentValue);
                        break;
                    case "*":
                        // Multiplication
                        total = lastValue * currentValue;
                        break;
                    case "/":
                        // Division
                        total = lastValue / currentValue;
                        break;
                }
                currentValue = "0";
                currentValue = total;
            }
            if (k1 == "=") {
                // No need to keep track of this last operator
                lastOperation = "";
                currentValue = "";
                lastTotal = total;
                runningTotal = total;
                total = "0";
                var div = document.getElementById('history');
                div.textContent = "0";
                var div = document.getElementById('display');
                div.textContent = lastTotal;
            } else {
                if (!currentValue) {
                    currentValue = lastTotal;
                }
                // Keep track of the last operator
                if (lastOperation && lastOperation == runningTotal.substr(0, runningTotal.length - 1)) {
                    runningTotal = runningTotal.substr(0, runningTotal.length - 1) + k1;
                } else {
                    runningTotal = currentValue + k1;
                }
                lastOperation = k1;
                lastValue = currentValue;
                currentValue = "0";
                // Update the running total
                var div = document.getElementById('history');
                div.textContent = runningTotal;
                // Update the current value
                var div = document.getElementById('display');
                div.textContent = currentValue;
            }
            break;
        default:
            // non-operation key pressed.
            if (k1 == "." && currentValue.indexOf(".")!=-1) {
                // A second '.' was entered, so ignore in.
            } else if (currentValue=="0") {
                currentValue = k1;
            } else {
                currentValue += k1;
            }

            // Update the display with the current value.
            var div = document.getElementById('display');
            div.textContent = currentValue;
            break;
    }
}