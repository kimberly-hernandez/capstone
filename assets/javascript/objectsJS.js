/* //1.
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
 */

//5. Look through array of object and print out name property of each object to console.

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


let charactersNames = charactersArray.filter(charactersArray =>charactersArray.name);
console.log(charactersNames);