function calc() {
    let n1 = parseInt(document.getElementById('input1stNumber').value);
    let n2 = parseInt(document.getElementById('input2ndNumber').value);
    let select = document.getElementById('inputOperation');
    let operator = parseInt(select.options[select.selectedIndex].value);
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
    }
    // console.log(result);
    let element = document.getElementById('inputResult');
    element.value = result;
    // console.log(element.value);
};