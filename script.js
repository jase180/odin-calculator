
function add(a,b) {
    return (a + b);
}

function subtract(a,b) {
    return (a - b);
}

function multiply(a,b) {
    return (a * b);
}

function countDecimals(n){
    return n.toString().split('.')[1].length;
}
function divide(a,b) {
    result = a/b;
    if (countDecimals(result) > 5) {
        result = result.toFixed(5)
    }
    return (result);
}

function operate(op,a,b) {
    switch(op) {
        case ("+"):
            return add(a,b)
        case ("-"):
            return subtract(a,b)
        case ("*"):
            return multiply(a,b)
        case ("/"):
            return divide(a,parseFloat(b))
    }
}

console.log("running");

//declare everything
displayNum = document.querySelector("#displayNum");
displayOp = document.querySelector("#displayOp")

opBtns = document.querySelectorAll(".ops");
numBtns = document.querySelectorAll(".nums");
eqBtn = document.querySelector(".equals");
clrBtn = document.querySelector(".clear");

let runningTotal = 0;
let curNum = 0;
let curOp = '';


// add event listeners to num buttons (note decimal is also in there)
numBtns.forEach(function(elem) {
    elem.addEventListener("click", function() {
        updateDisplayNum(elem.id.toString());
    });
})

function updateDisplayNum(id) {
    if (curNum == 0) {
        displayNum.textContent = id.toString();
        curNum = parseFloat(displayNum.textContent);
        console.log("numKey curNum is: " + curNum);
    } else {
        displayNum.textContent += id.toString();
        curNum = parseFloat(displayNum.textContent);
        console.log("numKey curNum is: " + curNum);
    }
}

// calculate function
function calculate(){
    if (curOp == '') {
        return curNum;
    }else {
        result = operate(curOp, runningTotal, curNum)
        console.log("Operate will return: " + result)
        return result
    }
}

//add event listeners to op buttons
opBtns.forEach(function(elem) {
    elem.addEventListener("click", function() {
        // console.log("b4 curNum is: " + curNum);
        // console.log("b4 runningTotal is: " + runningTotal);
        runningTotal = calculate(); 
        curOp = elem.id.toString();       
        curNum = 0;
        displayNum.textContent = runningTotal;
        // console.log("after curNum is: " + curNum);
        // console.log("after runningTotal is: " + runningTotal);
    });
})



//add event listener to equal
eqBtn.addEventListener("click", function() {
    if (curOp == '') {
        displayNum.textContent = curNum;
    }else {
        runningTotal = calculate();        
        curNum = 0;
        displayNum.textContent = runningTotal;
        runningTotal = 0;
    }
})

//clear button
clrBtn.addEventListener("click", function() {
    runningTotal = 0;
    curNum = 0;
    curOp = '';
    displayNum.textContent  = runningTotal;       
})


