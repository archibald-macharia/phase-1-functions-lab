// Code your solution in this file!
let feet = 264;

function distanceFromHqInBlocks(someValue){
    let block = 42;
    if (someValue < block){
        return block - someValue;
    }else if(someValue > block){
        return someValue - block;
    } 
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);


function distanceFromHqInFeet(someValue){
    let distance = distanceFromHqInBlocks(someValue) * feet;
    return distance;
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start, destination) {
    if (destination > start){
        return (destination - start) * feet;
    }else if (destination - start){
        return (start - destination) * feet;
    }
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let price = 0;
    let distanceFare = distanceTravelledInFeet(start, destination);
    if (distanceFare < 400){
        return 0;
    }else if (distanceFare > 400 && distanceFare < 2000){
        price  = price + 0.02;
        let sub = distanceFare - 400;
        return sub * price;
    }else if(distanceFare > 2000 && distanceFare < 2500){
        price = price + 25;
        return price;
    }else {
        return `cannot travel that far`
    }
    }

calculatesFarePrice(34, 24);


