let availableSlot = [];
let Car = [];
let createParkingLot = async(noOfLot) => {
    try {
      maxSize = parseInt(noOfLot);
    }
    catch(e) {
       return "Parameter is not a number!"
    }
    for(let i=1;i<=maxSize;i++){
       availableSlot.push(i);
    }

    return `Created a parking lot with ${availableSlot.length} Slots`;
}

let park = async(registrationNo, color) => {
    if(maxSize === 0) {
        return `Parking lot is not initiated`;
    }
    else if(maxSize === Car.length) {
        return `Sorry, Parking lot is full`;
    } else {
        let slot = availableSlot[0];
        Car.push({
            'slot' : slot,
            'registrationNumber' : registrationNo,
            'color' : color
        })
        availableSlot.shift();
        return `Allocated slot number : ${slot}`
    }
}

let leave = async(slot) =>  {
    slot = parseInt(slot);
    if(maxSize === 0) {
        return `Parking lot is not initiated`;
    }
    else if(Car.length > 0) {
        if(await utilFunctions.search(slot, 'slot', Car)) {
            Car = await utilFunctions.remove(slot, 'slot', Car);

            availableSlot.push(slot);
            availableSlot.sort();
            return `Slot number ${slot} is free`;
        }
    }
    else {
        return `Parking lot is empty`;
    }
}

let status = async() => {
    if(maxSize === 0) {
        return "Parking lot is not initiated";
    }
    else if(Car.length > 0) {
        console.log(`Slot No.   Registration No.  Color`);
        Car.forEach(function(row) {
            console.log(`${row.slot}  ${row.registrationNo} ${row.color} `);
        })
    }
    else {
        return `parking lot is empty`
    }
}

let getRegistrationNumbersFromColor = async(color) => {
    if(maxSize === 0) {
        return "Parking lot is not initiated";
    }
    else if(Car.length > 0) {
        let result = [];
        Car.forEach(function(row) {
            if(row.color === color) {
                result.push(row.registrationNo);
            }
            
        });
        return result;
    }
    else {
        return `parking lot is empty`
    }
}


let getSlotNumbersFromColor = async(color) => {
    if(maxSize === 0) {
        return "Parking lot is not initiated";
    }
    else if(Car.length > 0) {
        let result = [];
        Car.forEach(function(row) {
            if(row.color === color) {
                result.push(row.slot);
            }
        });
        return result;
    }
    else {
        return `parking lot is empty`
    }
}


let getSlotNumbersFromRegNo = async(registrationNo) => {
    if(maxSize === 0) {
        return "Parking lot is not initiated";
    }
    else if(Car.length > 0) {
        let result = [];
        Car.forEach(function(row) {
            if(row.registrationNo === registrationNo) {
                result.push(row.slot);
            }
        });
        return result;
    }
    else {
        return `parking lot is empty`
    }
}
module.exports = {
    createParkingLot,
    park,
    leave,
    status,
    getRegistrationNumbersFromColor,
    getSlotNumbersFromColor,
    getSlotNumbersFromRegNo
}