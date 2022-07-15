setInterval(setClock, 1000)


const hourWoof =
    document.querySelector('[data-woof-hour]')

 const minuteWoof =
 document.querySelector('[data-woof-minute]')

 const secondWoof =
 document.querySelector('[data-woof-second]')

  

function setClock() {

    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
     const hoursRatio = ( minutesRatio + currentDate.getHours()) / 12

setRotation( secondWoof, secondsRatio)
setRotation( minuteWoof, minutesRatio)
setRotation( hourWoof, hoursRatio)
}
// setRotation( secondWoof, secondsRatio)
// setRotation( minuteWoof, minutesRatio)
// setRotation( hourWoof, hoursRatio)

function setRotation(element, rotationRatio)

{
    element.style.setProperty('--rotation',
    rotationRatio * 360)
}
setClock()