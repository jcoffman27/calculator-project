let operation = " ";
let tempNumberHolder = "0";
let tempNumberHolder2 = "0";
let displayAnswer = document.getElementById("displayAnswer");
let x = 0;
let storage = 0;

//When a button 0-9 is clicked we add to the display
let displayText = document.getElementById("displayText");

let btn0 = document.getElementById("btn0");
function displayZero(e){
    displayText.textContent = displayText.textContent + "0";
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
}
btn1.addEventListener("click", displayOne);

let btn2 = document.getElementById("btn2");
function displayTwo(e){
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "2";
    } else {
        displayText.textContent = displayText.textContent + "2";
    };
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

let btn4 = document.getElementById("btn4");
function displayFour(e){
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "4";
    } else {
        displayText.textContent = displayText.textContent + "4";
    };
}
btn4.addEventListener("click", displayFour);

let btn5 = document.getElementById("btn5");
function displayFive(e){
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "5";
    } else {
        displayText.textContent = displayText.textContent + "5";
    };
}
btn5.addEventListener("click", displayFive);

let btn6 = document.getElementById("btn6");
function displaySix(e){
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "6";
    } else {
        displayText.textContent = displayText.textContent + "6";
    };
}
btn6.addEventListener("click", displaySix);

let btn7 = document.getElementById("btn7");
function displaySeven(e){
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "7";
    } else {
        displayText.textContent = displayText.textContent + "7";
    };
}
btn7.addEventListener("click", displaySeven);

let btn8 = document.getElementById("btn8");
function displayEight(e){
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "8";
    } else {
        displayText.textContent = displayText.textContent + "8";
    };
}
btn8.addEventListener("click", displayEight);

let btn9 = document.getElementById("btn9");
function displayNine(e){
    if ((parseInt(displayText.textContent) === 0)){
        displayText.textContent = "9";
    } else {
        displayText.textContent = displayText.textContent + "9";
    };
}
btn9.addEventListener("click", displayNine);

let btnReset = document.getElementById("btnReset");
function displayReset(e){
    displayText.textContent = "0";
    tempNumberHolder = displayText.textContent;
    displayAnswer.textContent = tempNumberHolder;
}
btnReset.addEventListener("click", displayReset);

function functionalReset(e){
    displayText.textContent = "0";
    tempNumberHolder = "0";
    displayAnswer.textContent = "0";
}

function functionalReset2(e){
    displayText.textContent = "0";
    tempNumberHolder = "0";
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


//Eureka! The program is subtracting from zero when clicking minus at first so I will need to add an if statement to correct this behavior.
function subtractTogether(e){
    
    if(storage == displayAnswer.textContent){
    
    displayAnswer.textContent = parseInt(displayText.textContent) - parseInt(tempNumberHolder);
    storage = parseInt(displayAnswer.textContent);
    console.log(storage);
    console.log("im in the if part");
    functionalReset();
    
    
    }else{
    //answer = 0 
    //displayText = 0
    //tempNumber = 0
    let newNumber = displayText.textContent;
    
    displayAnswer.textContent = parseInt(storage) - parseInt(newNumber);
    //0 = 5 - 5
    console.log(displayAnswer.textContent);
    console.log("im in the else part");

    functionalReset2();
    //displayText = 0
    //tempNumber = 0
    };

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
