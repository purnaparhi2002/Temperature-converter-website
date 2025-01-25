const tempInput = document.getElementById('tempInput');
const unitFrom = document.getElementById('unitFrom');
const unitTo = document.getElementById('unitTo');
const resultValue = document.getElementById('resultValue');

// Function to convert temperature
function convertTemperature() {
    let inputValue = parseFloat(tempInput.value);
    let fromUnit = unitFrom.value;
    let toUnit = unitTo.value;

    if (isNaN(inputValue)) {
        resultValue.textContent = "Please enter a valid number";
        return;
    }

    let result = 0;
    
    // Convert from 'fromUnit' to Celsius first
    if (fromUnit === "Celsius") {
        result = inputValue;
    } else if (fromUnit === "Fahrenheit") {
        result = (inputValue - 32) * 5 / 9;
    } else if (fromUnit === "Kelvin") {
        result = inputValue - 273.15;
    }

    // Convert from Celsius to 'toUnit'
    if (toUnit === "Celsius") {
        resultValue.textContent = result.toFixed(2);
    } else if (toUnit === "Fahrenheit") {
        resultValue.textContent = (result * 9 / 5 + 32).toFixed(2);
    } else if (toUnit === "Kelvin") {
        resultValue.textContent = (result + 273.15).toFixed(2);
    }
}

// Event listener for input changes
tempInput.addEventListener('input', convertTemperature);
unitFrom.addEventListener('change', convertTemperature);
unitTo.addEventListener('change', convertTemperature);
