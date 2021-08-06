const place=document.getElementById("suggest-place")
const placeLink=document.getElementById("place-link")

const suggestBtn=document.getElementById("suggest-btn")
  let suggestionArray=[
    ["The Break Sports Grill", "https://www.tripadvisor.com/Restaurant_Review-g57131-d3536713-Reviews-The_Break_Sports_Grill-South_Jordan_Utah.html"], 
    ["Olive Garden","https://www.olivegarden.com/locations/ut/south-jordan/south-jordan/1815"], 
    ["CupBop", "https://cupbop.com/?utm_source=Google&utm_medium=GMB&utm_campaign=Daybreak"],
    ["Himalayan Kitchen","https://www.himalayankitchen.com/"]]

function makeSuggestion(e){

  e.preventDefault()
  randomElement = suggestionArray[Math.floor(Math.random() * suggestionArray.length)];
  place.textContent=randomElement[0]
  placeLink.setAttribute("href", randomElement[1])

}

suggestBtn.addEventListener('click', makeSuggestion)