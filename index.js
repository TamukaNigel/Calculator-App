let mainEl = document.getElementById("theme-1");
let toggle_bg = document.getElementById("toggle-bg");
let screen_bg = document.getElementById("screen-bg");
let keypad_bg = document.getElementById("keypad-bg");
let my_Input_Buttons = document.getElementById("myInputButtons");
let my_Other_Buttons = document.getElementById("myOtherButtons");
let first_operand = 0;
let second_operand = 0;
let math_operation = undefined;

toggle_bg.addEventListener("click", () => {
    if (toggle_bg.style.justifyContent == "start") {
        toggle_bg.style.justifyContent = "center";
        toggle_bg.className = "toggle-bg-theme-2";
        mainEl.className = "theme-2";
        screen_bg.className = "screen-bg-theme-2";
        keypad_bg.className = "keypad-bg-theme-2";
        my_Input_Buttons.className = "myInputButtons-theme2";
        my_Other_Buttons.className = "myOtherButtons-theme2";
    } else if (toggle_bg.style.justifyContent == "center") {
        toggle_bg.style.justifyContent = "end";
        toggle_bg.className = "toggle-bg-theme-3";
        mainEl.className = "theme-3";
        screen_bg.className = "screen-bg-theme-3";
        keypad_bg.className = "keypad-bg-theme-3";
        my_Input_Buttons.className = "myInputButtons-theme3";
        my_Other_Buttons.className = "myOtherButtons-theme3";
    } else {
        toggle_bg.style.justifyContent = "start";
        toggle_bg.className = "toggle-bg-theme-1";
        mainEl.className = "theme-1";
        screen_bg.className = "screen-bg-theme-1";
        keypad_bg.className = "keypad-bg-theme-1";
        my_Input_Buttons.className = "myInputButtons-theme1";
        my_Other_Buttons.className = "myOtherButtons-theme1";
    }
});

function pressedButton(a) {
    let screen_bg = document.getElementById("screen-bg");
    let screen_text = screen_bg.innerHTML;
    let screen_text_length = screen_text.length;
    if (screen_bg.innerHTML != 0 || screen_bg.innerHTML == "0." || screen_bg.innerHTML == "0.0" || screen_bg.innerHTML == "0.00"
        || screen_bg.innerHTML == "0.000" || screen_bg.innerHTML == "0.0000" || screen_bg.innerHTML == "0.00000"
        || screen_bg.innerHTML == "0.000000" || screen_bg.innerHTML == "0.0000000" || screen_bg.innerHTML == "0.00000000"
        || screen_bg.innerHTML == "0.000000000" || screen_bg.innerHTML == "0.0000000000") {
        screen_bg.innerHTML = screen_bg.innerHTML + a;
    } else {
        screen_bg.innerHTML = a;
    }
    console.log(screen_text_length);
    if (screen_text_length > 13) {
    screen_bg.innerHTML = "Out of range, press reset."; // set precision
    }
    
}

function charCounter(a, text) {
	let i = 0;
	for (let x of text) {
      if (x == a) { i++; }
    }
	return i; 
}

function dotPressedButton(a) {
    let screen_bg = document.getElementById("screen-bg"); //look for an extra dot
    let screen_text = screen_bg.innerHTML;
    let dotCount = charCounter('.', screen_text);
    if (dotCount < 1) {
        screen_bg.innerHTML = screen_bg.innerHTML + a;
    } else {
        screen_bg.innerHTML = "Invalid number, press reset.";
    }
}

function clearScreen() {
    let screen_bg = document.getElementById("screen-bg");
    if (screen_bg.innerHTML != 0) {
        screen_bg.innerHTML = 0;
        first_operand = 0;
        second_operand = 0;
        math_operation = undefined;
    } 
}

function deleteCharacters() {
    let screen_bg = document.getElementById("screen-bg");
    let screen_text = screen_bg.innerHTML;
    let screen_text_length = screen_text.length;
    if (screen_text_length > 1) {
        screen_bg.innerHTML = screen_text.slice(0, screen_text_length - 1);
    } else {
        if (screen_text_length == 1) {
            screen_bg.innerHTML = 0;
        }
    }
}

function additionOperation() {
    let screen_bg = document.getElementById("screen-bg");
    let screen_text = screen_bg.innerHTML;
    first_operand = parseFloat(screen_text);
    math_operation = "+";
    screen_bg.innerHTML = 0;
}

function subrationOperation() {
    let screen_bg = document.getElementById("screen-bg");
    let screen_text = screen_bg.innerHTML;
    first_operand = parseFloat(screen_text);
    math_operation = "-";
    screen_bg.innerHTML = 0;
}

function multiplicationOperation() {
    let screen_bg = document.getElementById("screen-bg");
    let screen_text = screen_bg.innerHTML;
    first_operand = parseFloat(screen_text);
    math_operation = "*";
    screen_bg.innerHTML = 0;
}

function divisionOperation() {
    let screen_bg = document.getElementById("screen-bg");
    let screen_text = screen_bg.innerHTML;
    first_operand = parseFloat(screen_text);
    math_operation = "/";
    screen_bg.innerHTML = 0;
}
    
function equalsOperation() {
    let screen_bg = document.getElementById("screen-bg");
    let screen_text = screen_bg.innerHTML;
    second_operand = parseFloat(screen_text);
    if (math_operation == "+") {
        screen_bg.innerHTML = first_operand + second_operand;
    } else if (math_operation == "-") {
        screen_bg.innerHTML = first_operand - second_operand;
    } else if (math_operation == "*") {
        screen_bg.innerHTML = first_operand * second_operand;
    } else if (math_operation == "/") {
        if (second_operand == 0) {
            screen_bg.innerHTML = "Cannot divide by zero, press reset.";
        } else {
            screen_bg.innerHTML = first_operand / second_operand;
        }
    } else {
        screen_bg.innerHTML = "Incorrect operation, press reset.";
    }
}