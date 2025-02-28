let initialDiapers = 100; // amount of diapers we began with
let months = 12; 
let diapers = initialDiapers;

for (let i = 1; i <= months; i++) {
    diapers *= 2; // doubling the amount
    console.log("Month " + i + ": " + diapers + " diapers");

}


// #kidsAreExpensive