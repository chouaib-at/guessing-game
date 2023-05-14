// comments can make code readable    single line comment

//  Welcome to 30DaysOfJavaScript     single line comment

/*hi
hello        multi line comment
no*/

let firstname ='chouaib' //string
let familyname='Atrous'//string
let mar='married'//string
let age=26             //number
let country='algeria' //string
let kids='null'          //null
let wife             //undefined
 

console.log (firstname,familyname,mar,age ,country,wife) // yatel3o fi line wahda //


console.log (firstname)        /*yatel3o
                                  fog 
                                 ba3dahem*/
console.log (familyname)    
console.log (mar)            
console.log (age)
console.log (country)



// Define some variables with different data types
let aString = "hello";
let aNumber = 42;
let aBoolean = true;
let anArray = [1, 2, 3];
let anObject = {name: "John", age: 30};
let aFunction = function() {
  console.log("Hello, world!");
};

// Check the data types of each variable
console.log(typeof aString); // Output: "string"
console.log(typeof aNumber); // Output: "number"
console.log(typeof aBoolean); // Output: "boolean"
console.log(typeof anArray); // Output: "object"
console.log(typeof anObject); // Output: "object"
console.log(typeof aFunction); // Output: "function"



let myAge = 25;
let yourAge = 30;

console.log("I am " + myAge + " years old");
console.log("You are " + yourAge + " years old"); 

/* tkahrejlek     i am 25 years old
                 you are 3o years old */




/*day 2 lev3 ex04 
let x = 5000 ;
let y =15000 ;
let z=10000 ;

let yearsal=(x+y)*12 +10000 
 console.log(yearsal); */



/* exo day 3 level 2 number 1 

let h = prompt('The Height', 'Enter the height')
console.log(h)

let b =prompt('The Base','enter the Base')

let area=b*h*0.5


console.log(area); */


/* number 2
let a = prompt('Side a', 'Enter the side')


let b =prompt('The side b','enter the side ')

let c =prompt('The side c','enter the side ')


let perimetre = parseInt(a) + parseInt(b) +parseInt(c) ;


console.log(perimetre); */


/* level 3

let now = new Date();

let year = now.getFullYear();
let month = (now.getMonth() + 1)
let day = now.getDate()
let hour = now.getHours()
let minute = now.getMinutes()

let date= `${year}-${month}-${day} ${hour}:${minute}`;
console.log(date);*/

/*  day 4 level1 exo1
let age = prompt('Enter your age');
if (age >= 18) {
  console.log('You are old enough to drive.');
} else {
  let number = 18 - age;
  console.log('You are left with ' + number + ' years to drive.');
}

exo2

let age =prompt ('enter your age')
if (age>30){
console.log('i am older than you')


}
else {
    let number=30-age;
    console.log('you are '+number+'years older than me')
}

exo 1 level 2
let grades=prompt('put your note hrer')
if (100>=grades && grades>=80) {
console.log('your grade is A')
}
if (89>=grades && grades>=70) {
    console.log('your grade is B')

}if (69>=grades && grades>=60) {
        console.log('your grade is C')
        }
if (59>=grades && grades>=50) {
            console.log('your grade is D')
            }
if (49>=grades && grades>=0) {
    console.log('your grade is F')
                }
*/


let guessedNumber = Math.floor(Math.random() * 100);
let a = prompt('Guess the number (between 0 and 99):');

while (guessedNumber != a) {
  if (guessedNumber < a) {
    console.log('Try a lower number.');
  } else if (guessedNumber > a) {
    console.log('Try a higher number.');
  }
  

console.log('Congratulations, you guessed the right number');




