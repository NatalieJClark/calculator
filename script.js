//Gather user data
var x = prompt ("Type first number (Leave blank for square root)");
var operator = prompt ("Type operator (+, -, /, x, power, √");
operator = operator.toLowerCase();
var y = prompt ("Type second number");


//Calulation function
function calc(num1, num2) {
    if (operator === "+"
        || operator === "add"
        || operator === "plus") {
        var ans = Number(num1) + Number(num2);
        return ans;
    }
    else if (operator === "-"
            || operator === "minus"
            || operator === "subtract") {
        var ans = Number(num1) - Number(num2);
        return ans;
    }
    else if (operator === "/"
            || operator === "divide"
            || operator === "divded by"
            || operator === "over") {
        var ans = Number(num1) / Number(num2);
        return ans;
    }
    else if (operator === "x"
            || operator === "*"
            || operator === "times"
            || operator === "multiply"
            || operator === "multiplied by") {
        var ans = Number(num1) * Number(num2);
        return ans;
    }
    else if (operator === "power"
            || operator === "to the power of"
            || operator === "to the power") {
        var ans = Number(num1) ** Number(num2);   
        return ans; 
    }
    else if (operator === "√"
            || operator === "root"
            || operator === "square root") {
        var ans = Math.sqrt (Number(num2));
        return ans;
    }
    else
        var ans = "Error"
        return ans;
}

//Invoke function
calc(x, y);

//Display function output
alert (`= ${calc(x,y)}`);




