// Simple Calculator
// This is a simple calculator that performs basic arithmetic operations.
const numberButtons = document.querySelectorAll('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero, #doubleZero, #decimal-point');
const operatorButtons = document.querySelectorAll('#add, #subtract, #multiply, #divide,#modulo');

const equalsOperator = document.querySelector('#equals');

let displayWithOperator = document.querySelector('#result1');
let display = document.querySelector('#result2');
let firstInput;
let secondInput;
let operator;
let total;


 // Define operations map
const operations = {
    '+': (a, b) => (a + b).toFixed(2),
    '-': (a, b) => (a - b).toFixed(2),
    'x': (a, b) => (a * b).toFixed(2),
    '÷': (a, b) => (a / b).toFixed(2),
    '%': (a, b) => (a % b).toFixed(2),
};

const arrSum = [];

const clearButton = document.querySelector('#allClear');
clearButton.addEventListener('click', clearAllInputNumber);

//const clearLastButton = document.querySelector('#clearLast');


numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
         // For first number input
        if (operator === undefined) {
            if (display.value === '0') {
                    display.value = '';
            }

            if(button.value ==='.' && display.value === ''){
                    display.value = '0';
            }
            // Prevent multiple decimal points
            if (button.value === '.' && display.value.includes('.')) {
                return;
            }

            display.value += button.value;
            useFirstInput(display.value);
        }
        // For second number input
        else {
            if(operator in operations){
                if (display.value === firstInput.toString()) {
                display.value = ''; // Only clear when new number is clicked
                }
                else if(display.value !== secondInput.toString()){
                display.value = ''; // Only clear when new number is clicked
                }
            }
            display.value += button.value;
            useSecondInput(display.value);
        }
    });
});

// Function to get the first Input
function useFirstInput(firstInputValue) {
    firstInput = firstInputValue.endsWith('.')? firstInputValue : parseFloat(firstInputValue);
   console.log('Current firstInput:', firstInput);
}

//Event for Addition operator button
operatorButtons.forEach(button => {
    button.addEventListener('click',()=>{
        if(button.value in operations && firstInput !== undefined){
            // Set the operator based on button value
            operator = button.value;
            if(secondInput === undefined){
            display.value = firstInput;
            displayWithOperator.textContent = firstInput + ' ' + operator;
            }
            else{
                firstInput = total; // Set firstInput to total for next operation
                secondInput = undefined; // Reset secondInput for next number
                displayWithOperator.textContent = total + ' ' + operator;
                display.value = total;
            }
        console.log('Current operator:', operator);
        }
    });
});

// Function to get the second input
function useSecondInput(secondInputValue) {
    secondInput = secondInputValue.endsWith('.') ? secondInputValue : parseFloat(secondInputValue);
    
    // Calculate total as soon as second number is input
    total = calculateTotal();
    display.value = secondInput;
    displayWithOperator.textContent = `${firstInput} ${operator}`;

    console.log('Current secondInput:', secondInput);
    console.log('Current total:', total);
    console.log('Current array:',arrSum);
}


function calculateTotal(){
    if(operator in operations){
        return operations[operator](firstInput, secondInput);
    }
    return 0;
}

equalsOperator.addEventListener('click',operate);

function operate(){
    //operator === ' + ';
    if(operator in operations && firstInput !== undefined && secondInput !== undefined){
        total = calculateTotal();
        //display the last two numbers before the total sum.
        
        displayWithOperator.textContent = `${firstInput} ${operator} ${secondInput} =`;
        display.value = total;
        firstInput = total;

        console.log('Current secondInput:', secondInput);
        console.log('Current total:', total);
        console.log('Current array:',arrSum);
    }
}

function clearAllInputNumber(){
    display.value = '0';
    displayWithOperator.textContent = '';
    firstInput = undefined;
    secondInput = undefined;
    operator = undefined;
    total = undefined;
    console.log('Inputs cleared');
}



console.log('Current object:', arrSum);