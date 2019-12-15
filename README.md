# udemy-complete-javascript-course

- [Course files](https://github.com/jonasschmedtmann/complete-javascript-course)
- [Resources](http://codingheroes.io/resources/)

#### JavaScript Language Basics

##### Variables and Data types

- Number - floating point and integers
- String - sequence of characters
- Boolean - logical data type
- Undefined - data type of variable that does not have a value yet
- Null: also means 'non-existent'

##### Basic operators

- Math operators: +, -, *, /
- Logical operators: >, <, =>, =<
- typeof operator: `typeof x`

##### Operator precedence

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence>

##### If, else statements

```javascript
 var isMarried = true;

 if(isMarried){
    console.log(firstName + ' is married!');
}else{
    console.log(firstName + ' will hopefully marry soon :)');
}
```

##### Boolean logic

- AND (&&)
- OR (||)
- NOT (!)

##### The Ternary Operator

`age >= 18 ? 'beer' : 'juice';`



##### Switch

```javascript
switch (job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    default:
        console.log(firstName + ' does something else.');
    }    
```

##### Truthy and Falsy values and equality operators

