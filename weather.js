let humidity=document.getElementById("humidity")

const getData = () => {
  axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Salt Lake City,usid=524901&appid=5d809d79789060a33e90ce5dca6cb957').then(res=>{
    console.log(res.data)
    console.log(res.data.list[0].weather[0].main)
    let weather=res.data.list[0].weather[0].main
    humidity.textContent=weather
  })
}
getData()