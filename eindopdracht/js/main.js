/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/* VARIABELE */
var i,
    invullen = document.querySelector('#aantal'),
    sorteerKnop = document.querySelectorAll('.dropdown-items li'),
    verhalenSectieOne = document.querySelector('.verhalenSectieOne'),
    verhalenSectieTwo = document.querySelector('.verhalenSectieTwo'),
    searchBar = document.querySelector('nav form input'),
    searchButton = document.querySelector('nav form img'),
    searchResult = document.querySelector('.results');

console.log(searchButton);

/* ZOEKEN */

function barVisible() {
    searchBar.classList.add('visible');
    searchBar.focus();
}

function barInvisible() {
    searchBar.classList.remove('visible');
    setTimeout(function(){ searchResult.classList.remove('searchShow'); }, 300);
}

searchButton.addEventListener('click', barVisible);
searchBar.addEventListener('blur', barInvisible);

/* ZOEKRESULTATEN */

function resultVisible(){
    searchResult.classList.add('searchShow');
}

searchBar.addEventListener('keydown', resultVisible);

/* GROTER INPUT VELD */
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

/* SORTEER KNOP */

function toggleSorteer() {
    verhalenSectieOne.classList.toggle('hidden');
    verhalenSectieTwo.classList.toggle('hidden');
}

for (i = 0; i < 3; i++){
sorteerKnop[i].addEventListener('click', toggleSorteer);
}

invullen.addEventListener('input', toggleSorteer);


