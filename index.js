
// Fully bug free Basic Calculator.
// Language: javascript
// Path: index.js
// Made by itsme-Subid
// Credit:
// Special thanks to: Pampa Das for helping me to understand the runtime error and suggestions.
// Thank you to those who helped me in this project.
// Date: 05-06-2022
// Version: 1.0.4

// Modal Trigger
document.getElementById('modalTrigger').click();

// Function to Swap the value of input fields
function swap() {
    let n1 = parseFloat(document.getElementById('input1stNumber').value), n2 = parseFloat(document.getElementById('input2ndNumber').value);
    let temp = n1;
    n1 = n2;
    n2 = temp;
    let element = document.getElementById('input1stNumber');
    element.value = n1;
    element = document.getElementById('input2ndNumber');
    element.value = n2;
}

const mediaQuery = window.matchMedia('(min-width: 768px)')
// Check if the media query is true
if (!mediaQuery.matches) {
    // Then trigger an alert
    hide("dummyLabel");
}

// Interface changes
function check5() {
    let select = document.getElementById('inputOperation');
    let operator = parseInt(select.options[select.selectedIndex].value);
    if (operator < 5) {
        changeName("1st Number", "2nd Number");
    }
    switch (operator) {
        case 5:
            hide("n2Div");
            hide("swap");
            break;
        case 6:
            changeName("Base", "Exponent");
            break;
        case 7:
            changeName("Number", "")
            hide("n2Div");
            hide("swap");
            break;
        case 8:
            changeName("%", "Of");
            break;
    }
}

// Operations and display results
const form = document.getElementById('form');
form.addEventListener("click", (e) => {
    e.preventDefault();
    let select = document.getElementById('inputOperation');
    let operator = parseInt(select.options[select.selectedIndex].value);
    let n1 = parseFloat(document.getElementById('input1stNumber').value);
    let n2;
    if (operator != 5) {
        n2 = parseFloat(document.getElementById('input2ndNumber').value);
    }
    console.log(n1, n2, operator);
    let result;
    switch (operator) {
        case 1:
            result = parseFloat(n1 + n2);
            break;
        case 2:
            result = parseFloat(n1 - n2);
            break;
        case 3:
            result = parseFloat(n1 * n2);
            break;
        case 4:
            result = parseFloat(n1 / n2);
            break;
        case 5:
            result = parseFloat(Math.sqrt(n1));
            break;
        case 6:
            result = parseFloat(Math.pow(n1, n2));
            break;
        case 7:
            result = parseFloat(1 / n1);
            break;
        case 8:
            result = parseFloat((n1 / 100) * n2);
            break;
    }
    let element = document.getElementById('inputResult');
    element.value = result;
    console.clear();
});

// Function to hide elements
function hide(string) {
    let x = document.getElementById(string);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Function to change names
function changeName(place1, place2) {
    let element = document.getElementById('n1');
    element.innerHTML = place1;
    element = document.getElementById('n2');
    element.innerHTML = place2;
}