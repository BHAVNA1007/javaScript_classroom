// var x = 5;
// console.log(x);
// console.log(0.10);
// console.log("sum of " + 0.1 + " and " + 0.2 + " is " + (0.1 + 0.2));



// //variables   var keyword 
// var name11 = "John";
// var age = 30;
// console.log("My name is " + name11 + " and I am " + age + " years old.");



// var x = 5;
// var x = 10;
// console.log(x); //output: 10



// //it will give error because we are trying to redeclare a variable using let keyword which is not allowed in JavaScript.
// let x = 5;
// let x = 10;
// console.log(x); //Cannot redeclare block-scoped variable 'x'.




// const x = 5;
// const x = 10;
// console.log(x); //Cannot redeclare block-scoped variable 'x'




// function display() {
//     if (true) {
//         var message = "Hello, World!";
//     }
//     console.log(message); // Hello, World!
// }
// display(); 
// // if we try to access message outside the if block, it will give ReferenceError
// console.log(message); // ReferenceError: message is not defined



// let keyword

// let name1 = "John";
// let marks = 85;
// console.log("name is: ", name1 + " and marks is", marks)



// //Cannot redeclare block-scoped variable 'a'.
// let a = 10;
// let a = 90;
// console.log(a)


// function display() {
//     if (true) {
//         let message = "hellow"
//         console.log(message); 
//     }
//     //console.log(message); // ReferenceError: message is not defined   
// }
// display()


// function display() {
//     let message = "hellow"
//     if (true) {
        
//         console.log(message); 
//     }
// }
// display()




// function display() {
//     let message = "hellow"
//     if (true) {
        
//         console.log(message); 
//         let x = 10
//     }
//     //console.log(x); // ReferenceError: x is not defined
// }
// display()



// //const keyword

// const name1 = "John";
// console.log("name is: ", name1) //ouput: name is:  John



// const name1 = "John";
// const name1 = "Doe";
// console.log("name is: ", name1) //Cannot redeclare block-scoped variable 'name1'.



// function display() {
//     const name1 = "John";
//     if (true) {
//         console.log("name is " , name1)
//     }
// }
// display()




// function display() {
   
//     if (true) {
//         const name1 = "John";
//         console.log("name is " , name1)
//     }
// }
// display()




// function display() {
   
//     if (true) {
//         const name1 = "John";
//     }
//     console.log("name is " , name1) // ReferenceError: name1 is not defined
// }
// display()



 


// const name1 = "John";
// name1 = "Doe"; // TypeError: Assignment to constant variable.



// let name2 = "John";
// name2 = "Doe"; // This is allowed because name2 is declared with let


// var name3 = "John";
// name3 = "Doe"; // This is allowed because name3 is declared with var
// console.log("name3 is: ", name3) //output: name3 is:  Doe




// var x;
// console.log(x) // output : undefined



// let x
// console.log(x) // output : undefined



// const x
// console.log(x) //'const' declarations must be initialized.



// //another concept

// var student = {
//     name1 : 'bhavna',
//     roll : 78
// }
// student.name1 = "shikha"
// console.log(student.name1)
// console.log(student.roll)





// const student = {
//     name1 : 'bhavna',
//     roll : 78
// }

// student.name1 = "shikha"
// console.log(student.name1)
// console.log(student.roll)




// var student = {
//     name1 : 'bhavna',
//     roll : 78
// }

// student = {
//     roll : 100
// }
// console.log(student.name1)
// console.log(student.roll)





// const student = {
//     name1 : 'bhavna',
//     roll : 78
// }

// student = {
//     roll : 100
// }
// console.log(student.name1)
// console.log(student.roll)  // TypeError: Assignment to constant variable.





// var student = {
//     name1 : 'bhavna',
//     roll : 78
// }

// student = {
//     roll : 100
// }
// console.log(student.roll) // 100





// let student = {
//     name1 : 'bhavna',
//     roll : 78
// }
// student = {
//     roll : 100
// }
// console.log(student.roll) // 100




// const number = [10, 20, 30, 40]
// number = [60, 70, 80]
// console.log(number)    //TypeError: Assignment to constant variable.



// const number = [10, 20, 30, 40]
// number.push(90)
// console.log(number)    // [ 10, 20, 30, 40, 90 ]



// let numbers = [10, 20, 30, 40]
// numbers = [90,100]
// console.log(numbers)   //[ 90, 100 ]




// //Hoisting 

// console.log(a) //undefined
// var a = 10
// console.log(a) // 10



// console.log(a) //ReferenceError: Cannot access 'a' before initialization
// let a = 10
// console.log(a)




// console.log(a) //ReferenceError: Cannot access 'a' before initialization
// const a = 10
// console.log(a)



