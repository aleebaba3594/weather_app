var inp=document.getElementById("inp")


var btn=document.getElementById("btn")
btn.addEventListener("click",(e)=>{
    e.preventDefault()
   var s= fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=a7cffca7c299e275d56fc2be97f4ad8b`)
   .then(res=>res.json())
   .then(data=>printfun(data))

})
function printfun(data){
    var h1=document.getElementById("h1")
    h1.innerHTML=`Area:${data.name},${data.sys.country} &nbsp  &nbsp  &nbsp  &nbsp  &nbsp Weather:${data.weather[0].main}  &nbsp  &nbsp  &nbsp  &nbsp  &nbsp  Temp:${Math.floor(data.main.temp)}ºC`
}
