// here we will cover problem on loops

/* print '*' in given format 
1
12
123..n */



for(let i=0; i<=4; i++){
    let row = '';
    for(let j=0; j<=i; j++){
        
        row +=  '* ';
    }
    console.log(row);
}

//reverse star

for(let i=1; i<=5; i++){
    let row = '';
    //console.log(row);
    for(let j=4; j>=i; j--){
        row += '* ';
        //console.log(row);
    } 
    console.log(row);
}


// sweet print

let n = 11;
for(let i= 1; i <=n; i++){

    console.log(" ".repeat(n-i) + '*'.repeat(2*i-1));
}

for(let i=n-1; i>=1;i--){

    console.log(" ".repeat(n-i) + '*'.repeat(2*i-1));

}