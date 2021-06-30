/*
1. 2 ways to create arrays in Javascript
    -let values = [1, 2, 4];
   - let values = Array.of (1, 2, 3;)

2. We can tell if a variable is holding an array by:
Array.isArray(values) gets true or false depending on if it empty of not

3. What data type is returned from an aray with the "typeof"?
object

4. What is the index in the context of an array?
the location of an item in an array

5. Given the following aray, const carMakes =["Honda", "Toyota", "Mazda"]
On a separate line use a built in array method to add "Mercedes" to the end of the array
On a separate line use a built in array method to add "BMW" to the beginning of the array
Print "Toyota" to the console accessing it by it's index



const carMakes = ["Honda", "Toyota", "Mazda"];

carMakes.push('Mercedes');

carMakes.unshift("BMW");

//console.log(carMakes[2]);
console.log(carMakes);
/*
6. Using a built in array method, create a new array from the first 3 values in the
 carMakes array and store it in a new variable. Your new array should contain the values
["BMW", "Honda", "Toyota"]



const newCarMakes = carMakes.splice(0, 3);
console.log(newCarMakes);

7. Using built-in Array Methods and working with this array:
 const ericInfo = ["Eric", "Senior Instructor", "Florida"];

Remove "Eric" from the ericInfo array
Update "Florida" to "South Carolina"
Add "Schwartz" to the end of the array
The final array should look like this:
 ["Senior Instructor", "South Carolina", "Schwartz"]
Please feel free to look up array methods that you can use to accomplish the transformation above.



const ericInfo = ["Eric", "Senior Instructor", "Florida"];

ericInfo.shift();
ericInfo.splice(1,1, "South Carolina", "Schwartz");


console.log(ericInfo);

8. Print "apple" from each of the arrays below to the console

const fruits1 = ["apple", "pear", "strawberry", "grape"];
const fruits2 = [
  ["strawberry", "grape"],
  ["rambutan", "durian"],
  ["orange", "apple"]
];
const fruits3 = [
  ["strawberry", ["pineapple"]],
  ["grape", ["pear", ["apple"], "kiwi"]]
];

console.log(fruits1[0]);
console.log(fruits2[2][1]);
console.log(fruits3[1][1][1][0]);


9. Loop through the following array with a for() or while() loop printing each name to 
the console.
const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy",
 "Matt", "James", "Nicole", "Todd"]


const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy",
 "Matt", "James", "Nicole", "Todd"]

 for (let i =0; i< studentsArray.length; i++){
     console.log(studentsArray[i]);
 }

 10. Loop through the following array with the forEach() Array method printing each name and 
 the names index to the console.
*/


 const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy",
 "Matt", "James", "Nicole", "Todd"]
 /*

     studentsArray.forEach((i) => {
        console.log(studentsArray.indexOf(i)+ ": " + (i));
    });
    
    

    studentsArray.forEach(function (element, index, originalArray){
        console.log(`${index}: ${element}`)
    })

 11. Using the the map Array method square every number in the following array and save
  the results to a new array called numbersSquaredArray.
 

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersSquaredArray = numbersArray.map(x => x*x);
console.log(numbersSquaredArray);
*/

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersSquared = numbersArray.map(function(element){
   x= element * element; // x= Math.pow(element, 2);
   console.log(x);
});


/*
12. Using a looping method of your choice, loop over and sum all the values the new 
numbersSqauredArray storing the sum in a variable named arraySum. Print arraySum to 
the console.


let i=0;
let arraySum = 0;
while (i<numbersSquaredArray.length){
    arraySum +=numbersSquaredArray[i];
    i++;
}
console.log(arraySum);

/*
13. Given the following array, use a built-in array method to check if the array contains
 "Luke Skywalker" and if it does, print it's index to the console.


const starWarsCharactersArray = ["Yoda", 'Darth Vader', 'Leia Organa', 'Luke Skywalker', 
'Anakin Skywalker'];
let index= starWarsCharactersArray.indexOf("Luke Skywalker");
if (index >=0){
    console.log(index)
}
    else {
        console.log("does not exist in array")
    }
*/