let operation = " ";
let tempNumberHolder = "0";
let displayAnswer = document.getElementById("displayAnswer");



//When a button 0-9 is clicked we add to the display
let displayText = document.getElementById("displayText");

let btn0 = document.getElementById("btn0");
function displayZero(e){
    displayText.textContent = displayText.textContent + "0";
    console.log(e);
}
btn0.addEventListener("click", displayZero);

let btn1 = document.getElementById("btn1");

function displayOne(e){
    //Replace the zero on the screen with a string of "1"
    //add 1 to the current value
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "1";
    } else {
        displayText.textContent = displayText.textContent + "1";
    };
    console.log(displayText.textContent);
}
btn1.addEventListener("click", displayOne);

let btn2 = document.getElementById("btn2");
function displayTwo(e){
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "2";
    } else {
        displayText.textContent = displayText.textContent + "2";
    };
    console.log(displayText.textContent);
}
btn2.addEventListener("click", displayTwo);

let btn3 = document.getElementById("btn3");
function displayThree(e){
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "3";
    } else {
        displayText.textContent = displayText.textContent + "3";
    };
    console.log(displayText.textContent);
}
btn3.addEventListener("click", displayThree);

let btn4 = document.getElementById("btn4");
function displayFour(e){
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "4";
    } else {
        displayText.textContent = displayText.textContent + "4";
    };
    console.log(displayText.textContent);
}
btn4.addEventListener("click", displayFour);

let btn5 = document.getElementById("btn5");
function displayFive(e){
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "5";
    } else {
        displayText.textContent = displayText.textContent + "5";
    };
    console.log(displayText.textContent);
}
btn5.addEventListener("click", displayFive);

let btn6 = document.getElementById("btn6");
function displaySix(e){
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "6";
    } else {
        displayText.textContent = displayText.textContent + "6";
    };
    console.log(displayText.textContent);
}
btn6.addEventListener("click", displaySix);

let btn7 = document.getElementById("btn7");
function displaySeven(e){
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "7";
    } else {
        displayText.textContent = displayText.textContent + "7";
    };
    console.log(displayText.textContent);
}
btn7.addEventListener("click", displaySeven);

let btn8 = document.getElementById("btn8");
function displayEight(e){
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "8";
    } else {
        displayText.textContent = displayText.textContent + "8";
    };
    console.log(displayText.textContent);
}
btn8.addEventListener("click", displayEight);

let btn9 = document.getElementById("btn9");
function displayNine(e){
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "9";
    } else {
        displayText.textContent = displayText.textContent + "9";
    };
    console.log(displayText.textContent);
}
btn9.addEventListener("click", displayNine);

let btnReset = document.getElementById("btnReset");
function displayReset(e){
    displayText.textContent = "0";
    tempNumberHolder = displayText.textContent;
    displayAnswer.textContent = tempNumberHolder;
    console.log(e);
}
btnReset.addEventListener("click", displayReset);

function functionalReset(e){
    displayText.textContent = tempNumberHolder;
    displayText.textContent = "0";
}

let btnPlus = document.getElementById("btnPlus");
function addTogether(e){
    tempNumberHolder = tempNumberHolder + parseInt(displayText.textContent);
    tempNumberHolder = parseInt(tempNumberHolder);
    displayAnswer.textContent = tempNumberHolder;
    functionalReset();
    return tempNumberHolder;
}
btnPlus.addEventListener("click", addTogether);

let btnMinus = document.getElementById("btnMinus");
function subtractTogether(e){
    tempNumberHolder = subtract(parseInt(displayText.textContent), tempNumberHolder);
        function subtract(num1, num2){
            let value = (num1) - (num2);
            return -value;
        };
    tempNumberHolder = parseInt(tempNumberHolder);
    displayAnswer.textContent = parseInt(tempNumberHolder);
    functionalReset();

}
btnMinus.addEventListener("click", subtractTogether);

let btnMultiply = document.getElementById("btnMultiply");
function multiplyTogether(e){
    
    tempNumberHolder = parseInt(displayText.textContent) * tempNumberHolder;
    tempNumberHolder = parseInt(tempNumberHolder);
    displayAnswer.textContent = parseInt(tempNumberHolder);
    functionalReset();
    return tempNumberHolder;
}
btnMultiply.addEventListener("click", multiplyTogether);

let btnDivide = document.getElementById("btnDivide");
function divideTogether(e){
    tempNumberHolder = parseInt(displayText.textContent) / tempNumberHolder;
    tempNumberHolder = parseInt(tempNumberHolder);
    displayAnswer.textContent = tempNumberHolder;
    functionalReset();
    return tempNumberHolder;
}
btnDivide.addEventListener("click", divideTogether);

/*
operation = "+";
displayReset();
nextTempNumber = displayText.textContent;
console.log(e);
return operate(tempNumberHolder, nextTempNumber);
*/
