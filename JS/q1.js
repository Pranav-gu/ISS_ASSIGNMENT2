var el_up = document.getElementById("UP");
var el_down = document.getElementById("DOWN");
var str = "Click on button to change the background color";

el_up.innerHTML = str;

function changeColor(color) {
    document.body.style.background = color;
}

function Run() {
    changeColor('yellow');
}


function Run1() {
    changeColor('red');
}



function Run2() {
    changeColor('pink');
}



function Run3() {
    changeColor('purple');
}



function Run4() {
    changeColor('blue');
}