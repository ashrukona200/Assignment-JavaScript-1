// THIS FUCTION FOR GETTING TWO USER INPUTS AND CALCULATING THE RESULT OF ALL OF THE OPERATIONS AND HANDELING THREE TYPES OF ERROR
function Calculation() {
    
    //Here getting first user input 
    let num1 = document.getElementById("FormForMyCalculator").elements[0].value;
    document.getElementById("Display").innerHTML = num1;

    //Here getting second user input 
    let num2 = document.getElementById("FormForMyCalculator").elements[1].value;
    document.getElementById("Display").innerHTML = num2;

    //Here getting the operator 
    let sign = document.getElementById("Operators").value;

    try {
        if (num1 === "" || num2 === "") {
            throw {
                message: "Input can not be empty. Please provide proper inputs."
            }
        }
        if (isNaN(num1) || isNaN(num2)) {
            throw {
                message: "Input must be a number. Please provide proper inputs."
            }
        }
        if (sign === "select") {
            throw {
                message: "Unselect selected options. Please Select an operator."
            }
        }
        else {
            if (sign === "addition") {
                addition(num1, num2);
            }
            else if (sign === "subtraction") {
                subtraction(num1, num2);
            }
            else if (sign === "multiplication") {
                multiplication(num1, num2);
            }
            else if (sign === "division") {
                diviSion(num1, num2);
            }
            else if (sign === "modulo") {
                modulo_calculation(num1, num2);
            }
        }
    } catch (e) {
        document.write(e.message);
    }
}

// THIS FUNCTION IS FOR ADDITION OPERATION WHEN THE OPERATOR IS '+'           
function addition(a, b) {
    let result = document.getElementById("Result");
    result = (parseFloat(a) + parseFloat(b));
    document.getElementById("Display").innerHTML = "<b>Your answer = " + result + "</b>";
}

// THIS FUNCTION IS FOR SUBSTRACTION OPERATION WHEN THE OPERATOR IS '-'           
function subtraction(a, b) {
    let result = document.getElementById("Result");
    result = (parseFloat(a) - parseFloat(b));
    document.getElementById("Display").innerHTML = "<b>Your answer = " + result + "</b>";
}

// THIS FUNCTION IS FOR MULTIPLICATION OPERATION WHEN THE OPERATOR IS '*'          
function multiplication(a, b) {
    let result = document.getElementById("Result");
    result = (parseFloat(a) * parseFloat(b));
    document.getElementById("Display").innerHTML = "<b>Your answer = " + result + "</b>";
}

// THIS FUNCTION IS FOR DIVISION OPERATION WHEN THE OPERATOR IS '/'   AND HANDING THE EXCEPTION WHEN DENOMINATOR IS ZERO 
function diviSion(a, b) {
    try {
        if (b === '0') {
            throw {
                message: "Cannot divide by zero."
            }
        }
        else {
            let result = document.getElementById("Result");
            result = (parseFloat(a) / parseFloat(b));
            document.getElementById("Display").innerHTML = "<b>Your answer = " + result + "</b>";
        }
    } catch (e) {
        document.write(e.message);
    }
}

// THIS FUNCTION IS FOR CALCULATION MODULO OPERATION WHEN THE OPERATOR IS '%' AND HANDING THE EXCEPTION WHEN DENOMINATOR IS ZERO       
function modulo_calculation(a, b) {
    try {
        if (b === '0') {
            throw {
                message: "Cannot divide by zero."
            }
        }
        else {
            let result = document.getElementById("Result");
            result = (parseFloat(a) % parseFloat(b));
            document.getElementById("Display").innerHTML = "<b>Your answer = " + result + "</b>";
        }
    } catch (e) {
        document.write(e.message);
    }
}