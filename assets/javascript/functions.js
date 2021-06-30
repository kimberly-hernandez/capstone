//1. create function named greeting that prints "hello world"

function greeting(){
    console.log("hello world");
}

greeting();

//create a function named countingCharacters that takes strings.
//if length is <10, print string length
//if length is >10, pring message that says string is too long and include string 

function countingCharacters(x){
    
    if (x.length < 10){
        console.log(x.length);
    }
    else {
       (console.log("String is too long. Your string has " +x.length + " characters."))
    }
};

countingCharacters("dogsandcats");

//create function called difference that accepts 2 #s.
//if either paramater is not #, return error.
//return difference of two #s
//call function within a console.log() statement

function difference (x, y){
    if(typeof(x || y) != 'number'){
        console.log("Input(s) must be a number!");
    }
    else{
        console.log(y-x);
    }
};

difference(15, 100);

//problem 4

function advancedGreeting(hour){
    if(hour<12){
        console.log("Good Morning");
    }
    else if (hour >= 12 && hour < 18){
        console.log("Good afternoon");
    }
    else if (hour >=18 && hour <= 24){
        console.log("Good night");
    }
    else{
        console.log("invalid hour input");
    }

}
advancedGreeting(25);

//we can't access variables inside the scope of a function outside of that function.
//A function can access variables created in a parent scope
