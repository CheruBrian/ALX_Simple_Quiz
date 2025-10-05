// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // --- Arithmetic functions ---
    function add(number1, number2) {
        return number1 + number2;
    }

    function subtract(number1, number2) {
        return number1 - number2;
    }

    function multiply(number1, number2) {
        return number1 * number2;
    }

    function divide(number1, number2) {
        if (number2 === 0) {
            return "Error: Cannot divide by zero";
        }
        return number1 / number2;
    }

    // --- Helper to get input values ---
    function getNumbers() {
  document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

    // --- Display result ---
    function displayResult(result) {
        document.getElementById('calculation-result').textContent = result;
    }

    // --- Add event listeners ---
    document.getElementById('add').addEventListener('click', function() {
        const { number1, number2 } = getNumbers();
        displayResult(add(number1, number2));
    });

    document.getElementById('subtract').addEventListener('click', function() {
        const { number1, number2 } = getNumbers();
        displayResult(subtract(number1, number2));
    });

    document.getElementById('multiply').addEventListener('click', function() {
        const { number1, number2 } = getNumbers();
        displayResult(multiply(number1, number2));
    });

    document.getElementById('divide').addEventListener('click', function() {
        const { number1, number2 } = getNumbers();
        displayResult(divide(number1, number2));
    });

});

