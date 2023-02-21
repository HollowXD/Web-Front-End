let favColorBtn = document.querySelector('#color');
let favPlaceBtn = document.querySelector('#place');
let favRitualBtn = document.querySelector('#ritual');
let secretMessage = document.querySelector('#easter-egg');

function favColor() {
    alert("Orange");
}

favColorBtn.addEventListener('click', favColor);

function favPlace() {
    alert("Bahamas");
}

favPlaceBtn.addEventListener('click', favPlace);

function favRitual() {
    alert("Dancing in the moonlight");
}

favRitualBtn.addEventListener('click', favRitual);

function easterEgg() {
    alert("Hey! Don't poke me >:(")
}

secretMessage.addEventListener('click', easterEgg);