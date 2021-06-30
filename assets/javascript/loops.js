/*
//1. Write a for loop that counts from 0 to 100, printing each number to the console.
for(let i=0; i<=100; i++){
     console.log(i);
};


//2. Write loop 0-1000, prints out increments of 2.

for(let i=0; i<=100; i+=4){
   
    console.log(i);
};


//3. print loop that counts down from 100 to 0

for (let i=100; i>=0; i--){
    console.log(i);
}


//4.  write a loop that counts from 0-50, prints odd 

for(let i=0; i<=50; i++){
    if (i % 5 === 0 && i % 2 !== 0){
        console.log(i)
    };
};


// keep track of total in loop

let total = 0;

for(let i=1; i<=10; i++){
    total += 3;
    console.log(total);
};

//refactor last loop with while()loop

let total = 0;
let i=1;
while (i<=10){
    i++;
    total+=3;
    console.log(total);
};
*/
/*
7. The break statement can be used to jump out of a loop.
The continue statement breaks one iteration of the loop if a specific 
condition occurs, and continues with the next iteration in the loop.


8.loop prints 1-100
divisible by 3 - print fizz instead of //#
divisible by 5- print buzz
if divisible by 3 & 5 - print fizzbuzz
*/
for(let i=1; i<= 100; i++){

   if (i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
   }
   else if(i % 3 === 0){
       console.log("fizz");
   }
   else if (i % 5 === 0){
       console.log("buzz");
   } 

   else{
   console.log(i);
   }
}
/*
9. 
for() loop used only when we already know # of iterations.
while() # of iterations not known. L:oops checks condition before iteration of loop (entry controlled)
Do...while() verifies condtion after execution of statements inside loop (exit controlled)
will run at least once.*/

