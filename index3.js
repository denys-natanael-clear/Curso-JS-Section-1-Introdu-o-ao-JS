// Functions

    function somar (x1, x2) {
        return x1 + x2
    }

    let resultadoSoma = somar(1,3)

    console.log(resultadoSoma)

    function calc(x1, x2, operator){
        return eval(`${x1} ${operator} ${x2}`)
    }

    let resultadoCalc = calc(2,3, '*')

    console.log(resultadoCalc)

    // Anonymous Functions

    /*(function(){

        
    })()*/

    //Arrow functions

    calc = (x1, x2, operator) => {
        console.log(eval(`${x1} ${operator} ${x2}`))
    }

    console.log(calc(2,3,'*'))

// Events 

    window.addEventListener('focus', event => {
        console.log('focus')
    })

    document.addEventListener('click', event => {
        console.log('click')
    })

// Dates

    let agora = new Date()

    console.log(agora)
    console.log(agora.getDate())
    console.log(agora.getHours())
    console.log(agora.getMonth())
    console.log(agora.toLocaleDateString("pt-br"))

// Arrays

    let cars = ["palio8", "toro", "uno", 10, true, new Date(), function(){}]

    console.log(cars.length)
    console.log(cars[0])
    console.log(cars[5].getFullYear())

    cars.forEach(function(value, index){
        console.log(index, value)
    })

    // Exercise

    let store = ["shirt", "shoes", "dress", "pants", "hat"]

    store.forEach((value, index) => {
        console.log(value, index)
    })

// Objects orientation

    let cellphone = function(){

        this.color = "silver"

        this.call = function() {
            console.log("a call")
            return "call"
        }

    }

    let object = new cellphone()

    console.log(object.color)
    console.log(object.call())

    // Class

    class cellPho {

        constructor(){

            this.color = "green";

        }

        call(){
            console.log("a call")
            return "calling"
        }

    }

    let objectCell = new cellPho()

    console.log(objectCell)

