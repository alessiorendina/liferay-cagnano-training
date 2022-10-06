function checkFormCalculator() {

    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var operator = document.getElementById("operator");
    var calculate;
    
    if (operator.value == "addiction") {
        calculate = parseFloat(num1.value) + parseFloat(num2.value);
    }
    else if (operator.value == "subtraction") {
        calculate = parseFloat(num1.value) - parseFloat(num2.value);
    }
    else if (operator.value == "moltiplication") {
        calculate = parseFloat(num1.value) * parseFloat(num2.value);
    }
    else if (operator.value == "division") {
        calculate = parseFloat(num1.value) / parseFloat(num2.value);
    }

    document.getElementById("result").value = calculate;
}