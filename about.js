console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("successfully submitted the form")
}

function duckCompliment(){
	alert("QUACK! you look nice!")
}

let form = document.querySelector('form#contact');
let duckImg = document.getElementById('duck')

duckImg.addEventListener('mouseover', duckCompliment)
form.addEventListener('submit', handleSubmit);
