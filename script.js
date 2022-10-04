const parentDOM = document.getElementById("screen");
let screenCurrent = parentDOM.getElementsByClassName("screen-current")[0];
let screenLast = parentDOM.getElementsByClassName("screen-last")[0];

let numbers = [];
let reset = false;

function numberPress(num){
    if (reset === false){
        reset = true;
        display("");
        display(screenCurrent.innerHTML += num.innerHTML);
    } else {
        display(screenCurrent.innerHTML += num.innerHTML);
    }
}

function equationBuilder(){
    let newNum = Number(screenCurrent.innerHTML);
    numbers.push(newNum);
    console.log(numbers);
    return numbers;
}

function add(x,y){
    x = Number(screenCurrent.innerHTML);
    y = Number(screenCurrent.innerHTML)
}

function subtract(array){
    equationBuilder();
}
function multiply(array){
    equationBuilder();
}
function divide(array){
    equationBuilder();
}
function equals(array){
    equationBuilder();
}


function display(x){
    screenCurrent.innerHTML = "";
    screenCurrent.innerHTML = x;
}

function clearPress(){
    screenCurrent.innerHTML = 0;
}

function deletePress(){
    screenCurrent.innerHTML = 0;
    numbers = [];
    reset = false;
}
