console.log("hello world");

function handleSubmit() {
	alert("The form has been submitted successfully!");
}

let form = document.querySelector('#submit');

form.addEventListener('click', handleSubmit);

function complimentMessage() {
	alert("You have very nice eyes :D");
}

let mainImg = document.querySelector('#mainImg');

mainImg.addEventListener('mouseover', complimentMessage);

/* So this next part was pretty dang difficult, this is part of the extra credit randomizer button
recommendation. I gave my best shot at it, but I'm a bit confused on trying to make an alert option
where it prints out the random output whenever you click on the button. */

let randomizerBtn= document.querySelector('#randomizer')

var randomResturant = ['Subway', 'Taco Time', 'Mcdonalds :(']

var random = Math.floor(Math.random() * randomResturant.length);

function randomRecommendation() {
	alert(randomResturant[random]);
}
randomizerBtn.addEventListener('click', randomRecommendation);