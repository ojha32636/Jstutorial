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


// Diamond print

let n = 11;
for(let i= 1; i <=n; i++){

    console.log(" ".repeat(n-i) + '*'.repeat(2*i-1));
}

for(let i=n-1; i>=1;i--){

    console.log(" ".repeat(n-i) + '*'.repeat(2*i-1));

}

// print all even numbers from 1 to 50.

let num = 50;

for (let i=1; i<=num; i++){

    if (i%2 == 0){

        console.log(i);
    }
}

// Sum of first N numbers

let x = 50, s=0;

for(let i=1;i<=x;i++){

    s += i;
}
console.log (s); 


// multiplication of 5

let t=5, ta;

for(let i=1; i<=10; i++){

    ta= i*t;

    console.log(ta);

}

//same program using while loop
let i =1;
while(i<=10){

    ta =i*t;

    console.log(ta);
i++;
}

// reverse counting using while loop

let r = 10;
while(r>=1){

    console.log(r);

    r--;
}

// find factorial

let fact = 5, sol = 1;

for(let i=fact; i>=1; i--){

    sol = sol*i;
    
    
}
console.log(sol);