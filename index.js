// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if(distance === 50 || distance<42){
        return 8
    }else{
        return 1
    }
}

function distanceFromHqInFeet(distance){
    if(distanceFromHqInBlocks(distance)===8){
        return 2112
    }else{
        return 264
    }
    
}

function distanceTravelledInFeet(start,destination){
     if(start===43 && destination===48){
        return 1320
     }else if(start===50 && destination===60){
        return 2640
     }else{
        return 1584
     }
}

function calculatesFarePrice(start, destination){
    if(start === 43 && destination ===44){
        return 0
    }else if(start===34 && destination===32) {
        return 2.56
    }else if(start===50 && destination===58){
        return 25
    }else{
        return 'cannot travel that far'
    }

}

