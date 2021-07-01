 //1.
 /*
let person = {
    name: "Kimmie",
    age: 27,
    faveColor: "rainbow"
};

console.log("Hello, my name is " + person.name + ". I am " + person.age +
 " and my favorite color is " + person.faveColor + ".");


 //2. add a method called sayHello

 let person = {
    name: "Kimmie",
    age: 27,
    faveColor: "rainbow",
    sayHello: function(){
        console.log("Hello, my name is " + person.name + ". I am " + person.age +
 " and my favorite color is " + person.faveColor + ".");
    }
};

person.sayHello();

//3. add method averageGrade that returns average grade from gradesArray

let studentBob = {
    name: "bob",
    age: 23,
    major: "Psychology",
    grades: [70, 92, 84, 75, 100],
    averageGrades: function (){
      sum =0;
      for(let i=0; i< this.grades.length; i++){
          sum += this.grades[i];
          
      }
      console.log(sum / this.grades.length);
    }

}

studentBob.averageGrades();
/*
//4. add new method to studentBob object called printDetails.

let studentBob = {
    name: "bob",
    age: 23,
    major: "Psychology",
    grades: [70, 92, 84, 75, 100],
    averageGrades: function (){
        sum =0;
        for(let i=0; i< this.grades.length; i++){
            sum += this.grades[i];
            
        }
        return sum / this.grades.length;
      },
    printDetails: function (){
        console.log("Hello, My name is " + studentBob.name + " and I am a student. I am " +
        studentBob.age + " years old and my major is " + studentBob.major + "." 
        + "My current average grade is " + studentBob.averageGrades() + ".");
    }
}

studentBob.printDetails();
 

//5. Look through array of object and print out name property of each object to console.
*/
const charactersArray = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
/*
for (let characterName in charactersArray){
    console.log(`${charactersArray[characterName].name}`);
}
//uppercase
for(let i=0; i <charactersArray.length; i++){
    console.log(charactersArray[i].name.toUpperCase());
}


//6. Using the Array.filter() method on charactersArray, create a new array called 
//filteredCharactersArray that only contains characters where the mass is greater than 80.


let filteredCharactersArray =charactersArray.filter(function(element){
    return element.mass > 80;
})
console.log(filteredCharactersArray)


//7. Using the Array.map() method on charactersArray, create a new array called characterNames
// that only contains names of each character as a string.

const characterName =charactersArray.map(nameFunction)

function nameFunction(element){
    return element.name;
}

console.log(characterName);
/*
//8. Using the Array.some() method on charactersArray. Check to see if a character has 
//blue eyes. If they do, print "Some characters have blue eyes" otherwise print 
//"No characters have blue eyes" to the console.

let eyeColorcheck = charactersArray.some(eyeColorFunction)

function eyeColorFunction (element){
   return element.eye_color === 'blue';
}

if (eyeColorcheck === true){
    console.log("Some characters have blue eyes")
}
else{
    console.log("No characters hve blue eyes")
};

//9.Using the Array.every() method on charactersArray. Check to see if all characters 
//are male. If they every character is male, print "All the characters are male" to the
 //console.

let maleCheck= charactersArray.every(maleCheckFunction)

function maleCheckFunction (element){
    return element.gender === 'male';
}

if (maleCheck === true){
    console.log("All the characters are male")
}
else{
    console.log("Not all characters are male")
};

//10. Using a loop or Array.reduce() calculate the total mass of all the characters. 
//Print the total mass to the console.

let massTotal = charactersArray.reduce(function(total, currentCharacter){
    return total + parseInt(currentCharacter.mass);
}, 0);

console.log("This is the total mass of all characters: " + massTotal);
*/
//11.Create a function called tagFavorite that takes an array as one parameter and a string
// that represents your favorite character's name as another parameter. This function does not
 // need to return anything.

//Create a loop inside the function that loops over the array passed in.
//Add a property to each object in the array called favoriteCharacter and default it to false
//If the character name matches the character name passed in, set the favoriteCharacter 
//property to true for that character's object
//Test your function by passing in the charactersArray and your favorite character's name
 //when running the function. Print the charactersArray after you run the function to ensure the objects updated properly.

function tagFavorite(tagArray, favChar){
    tagArray.forEach(character => {
        if (character.name === favChar){
            character.favoriteCharacter =true;
        }
        else{
            character.favoriteCharacter = false;
        }
    });
}

tagFavorite(charactersArray, "Luke Skywalker");
console.log(charactersArray);