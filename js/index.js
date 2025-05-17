// Simple Calculator
// This is a simple calculator that performs basic arithmetic operations.
const numberButtons = document.querySelectorAll('#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero, #doubleZero');

const additionOperator = document.querySelector('#add');
const subtractionOperator = document.querySelector('#subtract');
const operatorButtons = document.querySelectorAll('#add, #subtract, #multiply, #divide');

const equalsOperator = document.querySelector('#equals');

let displayWithOperator = document.querySelector('#result1');
let display = document.querySelector('#result2');
let firstInput;
let secondInput;
let operator;

 // Define operations map
const operations = {
    ' + ': (a, b) => a + b,
    ' - ': (a, b) => a - b,
    ' x ': (a, b) => a * b,
    ' ÷ ': (a, b) => a / b
};
let total;

const arrSum = [];

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
            if(operator in operations){
                if (display.value === firstInput.toString()) {
                display.value = ''; // Only clear when new number is clicked
                }
                else if(display.value !== secondInput.toString()){
                display.value = ''; // Only clear when new number is clicked
                }
                //total = calculateTotal();
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

//Event for Addition operator button
operatorButtons.forEach(button => {
    button.addEventListener('click',()=>{
        if(button.value in operations){
            // Set the operator based on button value
            operator = button.value;
            if(secondInput === undefined){
            display.value = firstInput;
            displayWithOperator.textContent = firstInput + operator;
            }
            else{
                firstInput = total; // Set firstInput to total for next operation
                secondInput = undefined; // Reset secondInput for next number
                displayWithOperator.textContent = total + operator;
                display.value = total;
            }
            
        console.log('Current operator:', operator);
        }
    });
});

// Function to get the second input
function useSecondInput(secondInputValue) {
    secondInput = parseFloat(secondInputValue);
    
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
    if(operator in operations){
        total = calculateTotal();
        //display the last two numbers before the total sum.
        const displayOfResult = arrSum;
        
        displayWithOperator.textContent = `${firstInput} ${operator} ${secondInput} =`;
        display.value = total;
        firstInput = total;

        console.log('Current secondInput:', secondInput);
        console.log('Current total:', total);
        console.log('Current array:',arrSum);
    }
}

console.log('Current object:', arrSum);