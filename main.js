function add(num1, num2){
    let newValue = num1 + num2;
    console.log(newValue);
    return newValue;
};

function subtract(num1, num2){
    let newValue = num1 - num2;
    console.log(newValue);
    return newValue;
};

function multiply(num1, num2){
    let newValue = num1 * num2;
    console.log(newValue);
    return newValue;
};

function divide(num1, num2){
    let newValue = num1 / num2;
    console.log(newValue);
    return newValue;
};

function operate(){
    let num1 = prompt("What is your first number: ");
    let operation = prompt("Please enter an operation");
    let num2 = prompt("What is your second number: ");

    if (operation === "+"){
        return add(num1, num2);
    } else if (operation === "-") {
        return subtract(num1, num2);
    }else if (operation === "*") {
        return multiply(num1, num2);
    }else if (operation === "/") {
        return divide(num1, num2);
    } else {
        return operate();
    };
};
