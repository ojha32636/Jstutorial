// here we will cover problem on loops

/* print '*' in given format 
1
12
123..n */

// for(let i=0; i<=4; i++ ){
//     console.log("*");
// }

for(let i=0; i<=4; i++){
    let row = '';
    for(let j=0; j<=i; j++){
        
        row +=  '* ';
    }
    console.log(row);
}
