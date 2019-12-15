
/****************************
 * Variables and data types
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = false;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

/****************************
 * Variable mutation and type coercion
 */
/*
 var firstName = 'John';
 var age = 28;

 //age is converted to String
 console.log(firstName + ' ' + age)

 var job, isMarried;

 job = 'teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' 
 + job + '. Is he married? ');
 
 // Variable mutation
age = 'twenty eight';
job = 'driver';

//alert(firstName + ' is a ' + age + ' year old ' 
//+ job + '. Is he married? ');

//var lastName = prompt('What is his last Name?');
//console.log(firstName + ' ' + lastName);

/****************************
 * Basic operators
 */
/*
 var year, yearJohn, yearMark;
 now = 2020;
 ageJohn = 28;   
 ageMark = 33; 

 // Math operators
 yearJohn = now - 28;
 yearMark = now - 33;

 console.log(yearJohn);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

 // Logical operators

 var johnOlder = ageJohn > ageMark;
 console.log(johnOlder);

 // typeof operator

 console.log(typeof johnOlder);
 console.log(typeof ageJohn);
 console.log(typeof 'Mark is older than John');
 var x;
 console.log(typeof x);

 /****************************
 * Operator precedence
 */
/*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;
// '-' has a higher precedence than '>-'
 var isFullAge = now - yearJohn >= fullAge;

 console.log(isFullAge);
// grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn  + ageMark) / 2;
 console.log(average);

 // Multiple assignments
 var x, y;

 x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 // 26
 
 console.log(x, y);

 // More operators

 x *= 2;
 console.log(x);
 x += 10;
 console.log(x);
 x++;
 console.log(x);
 x--;
 console.log(x);

  /****************************
 * CODING CHALLENGE 1
 */
/*
 var massMark, massJohn, heightMark, heightJohn;

 massMark = 101; //kg
 heightMark = 1.79;
 massJohn = 86; //kg
 heightJohn = 1.80;


 var isMarkBMIhigher = massMark / Math.pow(heightMark,2) > massJohn / Math.pow(heightJohn,2);

 console.log('Is Mark\'s BMI higher than John\'s ' + isMarkBMIhigher);

  /****************************
 * If / else statements
 */
/*
 var firstName = 'John';
 var civilStatus = 'single';

 if(civilStatus === 'married'){
     console.log(firstName + ' is married!');
 }else{
     console.log(firstName + ' will hopefully marry soon :)');
 }

 var isMarried = true;

 if(isMarried){
    console.log(firstName + ' is married!');
}else{
    console.log(firstName + ' will hopefully marry soon :)');
}



massMark = 101; //kg
heightMark = 1.79;
massJohn = 86; //kg
heightJohn = 1.80;

var BMIMark = massMark / Math.pow(heightMark,2);
var BMIJohn = massJohn / Math.pow(heightJohn,2);

if(BMIMark > BMIJohn){
    console.log('Mark\'s BMI higher than John\'s');

} else{
    console.log('John\'s BMI higher than Mark\'s  ');
}


 /****************************
 * Boolean logic
 */
/*
 var firstName = 'John';
 var age = 20;

 if(age < 13){
     console.log(firstName + ' is a boy.')
 }else if(age >= 13 && age < 20){ // between 13 and 20 = age >= 13
    console.log(firstName + ' is a teenager.')
 }else if(age >= 20 && age < 30){ 
    console.log(firstName + ' is a young man.')
 }
 else{
    console.log(firstName + ' is a man.')
 }
*/

  /****************************
 * The Ternary Operator and Switch Statements
 */

 var firstName = 'John';
 var age = 16;
//Ternary operator
 age >= 18 ? console.log(firstName + ' drinks beer.')
 : console.log(firstName + ' drinks juice.');

 var drink = age >= 18 ? 'beer' : 'juice';
 console.log(drink);


// Switch statement

var job = 'cop';
switch (job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');              
}

age = 17;

switch(true) {

    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');             
}

  /****************************
 * Truthy and Falsy values and equality operators
 */

 