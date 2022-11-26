function solve(input) {
    let num1 = Number(input[0]); 
    let num2 = Number(input[1]); 
    let operator = input[2]; 

    let result = 0
    
    switch(operator) {

         case '+': 
         result = num1 + num2 
        if (result % 2 === 0) {
            console.log(`${num1} ${operator} ${num2} = ${result} - even`)
         } else {
            consol.log(`${num1} ${operator} ${num2} = ${result} - odd`)
         } break;


         case '-': 
         result = num1 - num2 
        if (result % 2 === 0) {
            console.log(`${num1} ${operator} ${num2} = ${result} - even`)
         } else {
            console.log(`${num1} ${operator} ${num2} = ${result} - odd`)
         } break;


         case '*': 
         result = num1 * num2; 
         if (result % 2 === 0) {
            console.log(`${num1} ${operator} ${num2} = ${result} - even`)
         } else {
            console.log(`${num1} ${operator} ${num2} = ${result} - odd`)
         } break;


         case '/': 
         result = (num1 / num2).toFixed(2); 
         if(num2 > 0 ) {
            console.log(`${num1} ${operator} ${num2} = ${result}`)
         } else {
            console.log(`Cannot divide ${num1} by zero`)
         }break;
         
         case '%': 
         result = num1 % num2; 
         if(num2 > 0 ) {
         console.log(`${num1} ${operator} ${num2} = ${result}`)
         } else {
            console.log(`Cannot divide ${num1} by zero`)
         }

         }
    }
        






//     if(operator === '+') {
//         result = num1 + num2; 
//         if (result % 2 === 0) {
//             console.log(`${num1} ${operator} ${num2} = ${result} - even`)
//         } else {
//             console.log(`${num1} ${operator} ${num2} = ${result} - odd`)
//         }
//     } else if(operator === '-') {
//         result = num1 - num2; 
//         if (result % 2 === 0) {
//             console.log(`${num1} ${operator} ${num2} = ${result} - even`)
//         } else {
//             console.log(`${num1} ${operator} ${num2} = ${result} - odd`)
    
//         }
//     }
// }
solve(["7",

"3",

"*"]) 

