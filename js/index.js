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


let display = document.querySelector('#result2');
let firstInput;
//Function 
numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        if(display.value ==='0'){
            display.value = '';
            display.value += button.value;
        }
        else{
             display.value += button.value;
        }
        useFirstInput(display.value);
    });
});

// Function to use firstInput
function useFirstInput(firstInputValue) {
    firstInput = firstInputValue;
    console.log('Current firstInput:', firstInput);
}