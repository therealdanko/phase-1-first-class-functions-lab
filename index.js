const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let number = 4;

const returnFirstTwoDrivers = function (drivers) {
    let firstTwoDrivers = drivers.slice(0, 2)
    return firstTwoDrivers
}

const returnLastTwoDrivers = function (drivers) {
    let lastTwoDrivers = drivers.slice(-2)
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(number1) {
    return function(number2){ 
        return number1 * number2}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

// function fareDoubler(){
//     return createFareMultiplier(2)
// }

// const selectDifferentDrivers = (drivers, ) => {
//     if (returnFirstTwoDrivers) {
//         return returnFirstTwoDrivers(drivers)
//     } else if (returnLastTwoDrivers){
//         return returnLastTwoDrivers(drivers)
//     }   
// }

function selectDifferentDrivers(drivers, cb) {
    return cb(drivers)
}