"use strict";
let finalValue = 0;

function intProcces(value ,base){
    let stringfiedValue = value.toString();

    stringfiedValue = stringfiedValue.split('').reverse().join('');

    for (let i = 0; i < stringfiedValue.length; i++) {
        let local_value = stringfiedValue[i]
        
        switch (stringfiedValue[i]) {
            case "a":
                local_value = 10
                break;
            case "b":
                local_value = 11
                break;
            case "c":
                local_value = 12
                break;
            case "d":
                local_value = 13
                break;
            case "e":
                local_value = 14
                break;
            case "f":
                local_value = 15
                break;
            default:
                local_value = stringfiedValue[i]
                break;
        }

        finalValue += Number(local_value) * base**i;
    };

    return finalValue;
};

function otherToDecimal(base , value) {
    if (value % 2 && (value - 1) % 2 ) {
        // float
    } else {
        // int
        intProcces(value,base);
        console.log(finalValue)
    };
};

otherToDecimal(2,"10100101");