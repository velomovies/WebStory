/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var invullen = document.querySelector('section form input');

function notBigger() {
    if(invullen.value.length > 3) {
        invullen.value = invullen.value.slice(0,3);
    }
}

function toggleWidth() {
    notBigger();
    if(invullen.value.length == 2) {
        invullen.classList.add('wider');
        invullen.classList.remove('evenWider');
    }
    else if(invullen.value.length == 1) {
        invullen.classList.remove('wider');
        invullen.classList.remove('evenWider');
    }
    else if(invullen.value.length == 3) {
        invullen.classList.add('evenWider');
    }
}

invullen.addEventListener('input', notBigger);
invullen.addEventListener('input', toggleWidth);
