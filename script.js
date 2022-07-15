setInterval(setClock, 1000)

const hourRows = document.querySelector("[data-hour-rows]")
const minuteRows = document.querySelector("[data-minute-rows]")
const secondRows = document.querySelector("[data-second-rows]")




 function setClock() {
     
    const curentDate = new Date()
    const secondRatio =  curentDate.getSeconds()  / 60

    const minuteRatio = (secondRatio + curentDate.getMinutes()) / 60 

 const hourRatio = ( minuteRatio + curentDate.getHours()) / 12
 
 setRotation(secondRows, secondRatio)
 setRotation(minuteRows, minuteRatio)
 setRotation(hourRows, hourRatio)



 }

 function setRotation(element, rotationRatio) 
 {
     element.style.setProperty('--rotation', rotationRatio * 360)
 }
 setClock()