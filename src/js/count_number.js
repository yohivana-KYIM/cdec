let valueDisplays = document.querySelectorAll(".num")
let intervall  = 5000

valueDisplays.forEach((valueDisplay) => {
    let starvalue = 0
    let endvalue = parseInt(valueDisplay.getAttribute("data-val"))
    let duration = Math.floor(intervall / endvalue)

    let counter = setInterval(function() {
        starvalue +=1
        valueDisplay.textContent = starvalue
        if(starvalue == endvalue){
            clearInterval(counter)
        }
    }, duration)

})