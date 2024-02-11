
function btn1() {
    let priviwe = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = priviwe + 1;


}

function btn2() {
    let priviwe = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = priviwe + 2;


}

function btn3() {
    let priviwe = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = priviwe + 3;


}

function btn4() {
    let priviwe = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = priviwe + 4;


}

function btn5() {
    let priviwe = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = priviwe + 5;


}

function btn6() {
    let priviwe = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = priviwe + 6;


}

function btn7() {
    let priviwe = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = priviwe + 7;


}

function btn8() {
    let priviwe = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = priviwe + 8;


}

function btn9() {
    let priviwe = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = priviwe + 9;


}

function btn0() {
    let priviwe = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = priviwe + 0;


}

function eraser() {

    let priviwe = document.getElementById("display").innerHTML;
    let eraser = priviwe.slice(0, -1);
    document.getElementById("display").innerHTML = eraser;
    document.getElementById("display2").innerHTML = eraser;
    
}



let fristsave;
let num;

function e() {
    fristsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = null;
    num = 1;
    document.getElementById("display2").innerHTML = "+ " + fristsave;
}

function a() {
    fristsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = null;
    num = 2;
    document.getElementById("display2").innerHTML = "- " + fristsave;
}

function b() {
    fristsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = null;
    num = 3;
    document.getElementById("display2").innerHTML = "/ " + fristsave;
}

function g() {
    fristsave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = null;
    num = 4;
    document.getElementById("display2").innerHTML = "X " + fristsave;
}



function eq() {
    let secsave = document.getElementById("display").innerHTML;
    if (num == 1) {
        let cul = parseInt(fristsave) + parseInt(secsave);
        document.getElementById("display").innerHTML = cul;
        document.getElementById("display2").innerHTML = fristsave + "+" + secsave;
    }
    else if (num == 2) {
        let cul = parseInt(fristsave) - parseInt(secsave);
        document.getElementById("display").innerHTML = cul;
        document.getElementById("display2").innerHTML = fristsave + "-" + secsave;
    }

    else if (num == 3) {
        let cul = parseInt(fristsave) / parseInt(secsave);
        document.getElementById("display").innerHTML = cul;
        document.getElementById("display2").innerHTML = fristsave + "/" + secsave;
    }

    else if (num == 4) {
        let cul = parseInt(fristsave) * parseInt(secsave);
        document.getElementById("display").innerHTML = cul;
        document.getElementById("display2").innerHTML = fristsave + "X" + secsave;
    }
}

