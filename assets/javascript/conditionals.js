/*let x = 3,
    y = 5;

    if(x>y){
        console.log("Hello World");
    }
    else{
        console.log("Goodbye World")
    };
    /*4. What are some examples of falsy values in JavaScript?
    false, 0, " ", null, undefined, Nan
   

    let number1 = 8;
let number2 = "9";

if("0" === 0){
    console.log("condition 1 is true")
}else if(number1 > number2){
    console.log("condition 2 is true")
}else if(typeof number2 === "number"){
    console.log("condition 3 is true")
}else if(typeof number2 !== "number" && number1 > number2){
    console.log("condition 4 is true")
}else if("0" == 0){
    console.log("condition 5 is true")
}else{
    console.log("no condition was true")
}

//we are comparing a string to value

/*6. the difference between = and === is that === is strictly a comparison operator, it will return
false for values that aren't a similar type. = assigns a value to the left */

 /* function sayHello(name){

 
 rewrite using ternary operator
 
 if(name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello, person!"
    }

}

console.log( sayHello("Class") ) */

function sayHello(name){

    return(name ? `Hello, ${name}!` : "Hello, person");
}
console.log( sayHello("bob"));

/*
let soldOut = true;
let onSale = true

soldOut = !soldOut

let message = (!soldOut && onSale) ? "I got tickets!" : "I did not get tickets";

console.log(message);

// If tickets are not sold out and on sale, then print. */

let soldOut = true;
let onSale = true;
soldOut = !soldOut;

if(soldOut = !soldOut && onSale){
    console.log("I got tickets");
    
}
else (console.log("I did not get tickets"));
