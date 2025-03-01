// part 1 fizz buzz Loop through all numbers from 1 to 100.
//If a number is divisible by 3, log “Fizz.”
//If a number is divisible by 5, log “Buzz.”
//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
//If a number is not divisible by either 3 or 5, log the number.

//for (let i = 1; i <= 100; i++) console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);

// part 2 fnding the next closest prime num set function to check if prime 

//function isNumberPrime(number) {
   // for (let divisor = 2; divisor < number; divisor++) {
   //     if (number % divisor === 0) {
    //        return false; 
  //      }
   // }
   // return number > 1; 
//}
//function primeNum(startingNumber) {
    //let currentNum = startingNumber + 1; 

   // while (!isNumberPrime(currentNum)) { 
    //    currentNum++; 
   // }

  //  console.log(`prime number that comes after ${startingNumber} is: ${primeNum};
//}


//numbers for after prime

//primeNum(1);  
//primeNum(8);  
//primeNum(6);  
//primeNum(18); 
 //primeNum(3); 
 //primeNum(9);  

//part 3 parsing data into a table...making the cells strings storing variables

function processCSV(data) {
    let value = ""; 
    let rowCount = 0; 
    let cell1, cell2, cell3, cell4; 
    
    let row1, row2, row3, row4, row5; 
    let currentRow = ""; 

    for (let char of data) {
        if (char === "," || char === "\n") {
            if (rowCount === 0) {
         
                if (!cell1) cell1 = value;
                else if (!cell2) cell2 = value;
                else if (!cell3) cell3 = value;
                else if (!cell4) cell4 = value;
            } else {
       
                currentRow += value + "\t"; 
            }

            if (char === "\n") {

                if (rowCount === 1) row1 = currentRow;
                else if (rowCount === 2) row2 = currentRow;
                else if (rowCount === 3) row3 = currentRow;
                else if (rowCount === 4) row4 = currentRow;
                else if (rowCount === 5) row5 = currentRow;

                rowCount++;
                currentRow = ""; 
            }

            value = "";
        } else {
            value += char; 
        }
    }

    //table
    console.log("-------------------------------------------------");
    console.log(cell1 + "\t" + cell2 + "\t" + cell3 + "\t" + cell4); 
    console.log("-------------------------------------------------");
    if (row1) console.log(row1);
    console.log("-------------------------------------------------");
    if (row2) console.log(row2);
    console.log("-------------------------------------------------");
    if (row3) console.log(row3);
    console.log("-------------------------------------------------");
    if (row4) console.log(row4);
    console.log("-------------------------------------------------");
    if (row5) console.log(row5);
   
}

// sample data given
const csvText = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26\n101,Ben,Engineer,30";


processCSV(csvText);
