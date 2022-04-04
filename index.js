function distanceFromHqInBlocks(blocks){
    const hqDistance= (42 - blocks)
    if (hqDistance>0) {return hqDistance}
        else if(hqDistance<0) {return hqDistance*-1}
}
function distanceFromHqInFeet(feet){
    const hqDistanceInFeet = distanceFromHqInBlocks(feet)*264
    return hqDistanceInFeet
}
function distanceTravelledInFeet(start,finish){
    const travelled = (finish-start)*264
    if (travelled>0) {return travelled}
        else if (travelled<0) {return travelled*-1} 
}
function calculatesFarePrice(start, destination){
    const fee = distanceTravelledInFeet(start, destination)
    if (fee<=400) {return 0}
    else if (400<fee, fee <=2000){return (fee-400)*.02}
    else if (2000<fee, fee<=2500){return 25}
    else if (2500<fee){return 'cannot travel that far'}
}