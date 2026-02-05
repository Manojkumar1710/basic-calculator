let calculation = '';

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button[data-value]');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');

// Number & operator buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    calculation += button.dataset.value;
    display.innerText = calculation;
    console.log(calculation);
  });
});

// Equals button
equalsBtn.addEventListener('click', () => {
  calculation = eval(calculation);
  display.innerText = calculation;
  console.log(calculation);
});

// Clear button
clearBtn.addEventListener('click', () => {
  calculation = '';
  display.innerText = '';
  console.log(calculation);
});
