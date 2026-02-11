function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculate(num1, operator, num2){
    if(operator == "+"){
        return add(num1, num2);
    }

    else if(operator == "-"){
        return subtract(num1, num2);
    }

    else if(operator == "*"){
        return multiply(num1, num2);
    }

    else {
        return divide(num1, num2);
    }
}

function operate() {
    let expression = display.value;   // e.g. "12+5"
    let operator;

    // find operator
    if (expression.includes("+")) operator = "+";
    else if (expression.includes("-")) operator = "-";
    else if (expression.includes("*")) operator = "*";
    else if (expression.includes("/")) operator = "/";
    else {
        display.value = "Error";
        return;
    }

    // split numbers
    let parts = expression.split(operator);
    let num1 = parseFloat(parts[0]);
    let num2 = parseFloat(parts[1]);

    let result = calculate(num1, operator, num2);
    display.value = result;
}

function appendToDisplay(input){
    display.value += input;
}


function clearDisplay(){
    display.value = "";
}

