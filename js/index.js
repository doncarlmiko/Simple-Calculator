/*const numberOneButton = document.querySelector('#one');
const numberTwoButton = document.querySelector('#two');
const numberThreeButton = document.querySelector('#three');
const numberFourButton = document.querySelector('#four');
const numberFiveButton = document.querySelector('#five');
const numberSixButton = document.querySelector('#six');
const numberSevenButton = document.querySelector('#seven');
const numberEightButton = document.querySelector('#eight');
const numberNineButton = document.querySelector('#nine');
const numberZeroButton = document.querySelector('#zero');
const numberDoubleZeroButton = document.querySelector('#doubleZero');*/

const numberButtons = document.querySelectorAll('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero, #doubleZero');

const operatorButtons = document.querySelector('#add');

let displayWithOperator = document.querySelector('#result1');
let display = document.querySelector('#result2');
let firstInput;
let secondInput;
let operator;
let sum;


numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
         // For first number input
        if (operator === undefined) {
            if (display.value === '0') {
                display.value = '';
            }
            display.value += button.value;
            useFirstInput(display.value);
        }
        // For second number input
        else {
            if (display.value === firstInput.toString()) {
                display.value = ''; // Only clear when new number is clicked
            }
            display.value += button.value;
            useSecondInput(display.value);
        }
    });
});

// Function to get the first Input
function useFirstInput(firstInputValue) {
    firstInput = parseFloat(firstInputValue);
   console.log('Current firstInput:', firstInput);
}

operatorButtons.addEventListener('click',()=>{
    operator = ' + ';
    display.value = firstInput;
    displayWithOperator.textContent = firstInput + operator;
    console.log('Current operator:', operator);
});

// Function to get the second input
function useSecondInput(secondInputValue) {
    secondInput = parseFloat(secondInputValue);
    console.log('Current secondInput:', secondInput);
}

