// Code your solution in this file!
function distanceFromHqInBlocks(num1){
    if(num1 == 42){
        return 0
    } else if(num1 < 42) {
        return 42 - num1
    } else if(num1 > 42){
        return num1 - 42
    }
}

distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

function distanceFromHqInFeet(num2){
return distanceFromHqInBlocks(num2) * 264
}
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)

function distanceTravelledInFeet(to, from){
   let x = distanceFromHqInFeet(to) - distanceFromHqInFeet(from)
   return Math.abs(x)
}

distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination) 
    console.log("feet:",feet)
    if(feet <= 400){
        return 0
    } else if(feet > 400 && feet <= 2000){
        return (feet - 400) * 0.02 
    }else if(feet > 2000 && feet <= 2500){
        return 25
    }else {
        return 'cannot travel that far'
    }
}

calculatesFarePrice(43,44)
calculatesFarePrice(34,32)
calculatesFarePrice(50,58)
calculatesFarePrice(34,24)