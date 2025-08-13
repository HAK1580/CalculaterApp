// Select all number/operator buttons
const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const clearBtn = document.getElementById("clear");
const backBtn = document.getElementById("back");
const equalsBtn = document.getElementById("answereq");

// Initialize display
let displayValue = "";
display.textContent = "0";

// Append button values to display
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Prevent multiple operators in a row
        if (/[\+\-\*\/]$/.test(displayValue) && /[\+\-\*\/]/.test(button.textContent)) {
            return;
        }

        displayValue += button.textContent;
        display.textContent = displayValue;
    });
});

// Calculate result
equalsBtn.addEventListener("click", () => {
    try {
        if (!displayValue.trim()) {
            display.textContent = "ERROR";
            return;
        }

        let result = eval(displayValue);

        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.textContent = "ERROR";
        } else {
            display.textContent = result;
            displayValue = result.toString();
        }
    } catch {
        display.textContent = "ERROR";
    }
});

// Clear all
clearBtn.addEventListener("click", () => {
    displayValue = "";
    display.textContent = "0";
});

// Delete last character
backBtn.addEventListener("click", () => {
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue || "0";
});
