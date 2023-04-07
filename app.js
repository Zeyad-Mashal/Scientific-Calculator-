let screen = document.querySelector("#screen");
let btn = document.querySelectorAll(".calc-btn");

for (item of btn) {
    item.addEventListener("click", function(e) {
        btnText = e.target.innerText;

        if(btnText == 'x') {
            btnText = '*';
        }
        if(btnText == '÷') {
            btnText = '/';
        }
        screen.value += btnText;
    });
}

function sin () {
    screen.value = Math.sin(screen.value);
}

function cos () {
    screen.value = Math.cos(screen.value);
}

function tan () {
    screen.value = Math.tan(screen.value);
}

function pow () {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt () {
    screen.value = Math.sqrt(screen.value, 2);
}

function log () {
    screen.value = Math.log(screen.value);
}
function pi () {
    screen.value = 3.14159;
}

function e () {
    screen.value = 2.71828182845904;
}

function end () {
    screen.value = '';
}

function fact() {
    let i, num, f;
    f=1
    num=screen.value;
    for(i=1; i<= num; i++) {
        f = f * i;
    }
    i = i - i;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length-1);
}