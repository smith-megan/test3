const color=document.getElementById('color')
const place=document.getElementById('place')
const ritual=document.getElementById('ritual')

function colorAlert(){
  alert("purple")
}

function placeAlert(){
  alert("Hawaii")
}

function ritualAlert(){
  alert("drinking tea while watching stars")
}

color.addEventListener("click", colorAlert)
place.addEventListener("click", placeAlert)
ritual.addEventListener('click', ritualAlert)

function haHa(){
	alert("Haha, that's a good one!")
}
let joking=document.getElementById("joke-btn")
joking.addEventListener('click', haHa)