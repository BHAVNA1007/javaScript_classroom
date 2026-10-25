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







// TDZ    ReferenceError: Cannot access 'a' before initialization
//console.log(a)
//const a = 10







// variables in js
//let a$ = 10
//console.log(a$)
//let _age = 10
//console.log(_age)





//let first name = "abc"
//let #age = 20






//let $price = 899
//console.log($price)







//let a = 10
//let b = 9
//console.log(a)//10
//console.log(b)//10
//b = 90
//console.log(a)//10
//console.log(b)//899








//let student1 = {name: "deepika"}
//let student2 = student1
//console.log(student1) 
//console.log(student1.name)
//console.log(student2.name)
//student2.name = "virat"
//console.log(student1.name)
//console.log(student2.name)

//{ name: 'deepika' }
//deepika
//deepika
//virat
//virat








//let age = 25
//let salary = 2345.3666
//let temp = -67
//console.log(age)
//console.log(salary)
//console.log(temp)
//console.log(2e3)
//console.log(0b1010)
//console.log(0o17)
//console.log(0xff)
//console.log(typeof age)
//console.log(typeof 0xff)






//let result = 'hello'/2;     
//console.log(result)           //NaN
//console.log(typeof result)    //number
//console.log(1/0)              //Infinity
//console.log(-1/0)             //-Infinity
//console.log(typeof Infinity)    //number






//x = "hello" * 5
//console.log(x)                 //NaN
//console.log(Number.isNaN(x))   //true





//x = Number("10")
//console.log(x*x)     //100




//x = Number("abc")
//console.log(x)       //NaN






//console.log(Number(""))       //0
//console.log(0/0)              //NaN
//console.log(Math.sqrt(25))    //5
//console.log(Math.sqrt(-1))    //NaN





//console.log(NaN = NaN)      // NaN
//console.log(NaN == NaN)     // false
//console.log(NaN === NaN)    // false





//x = 'hello'*5
//y = 'welcome'/5
//console.log(Number.isNaN(x) == Number.isNaN(y)) // ture








//console.log(Number.isNaN("abc"))         //false
//console.log(Number.isNaN("NaN"))             //true
//console.log(Number.isNaN(Number("abc")))        //true








//let result = Number("abc")
//console.log(result + 10)      //NaN
//console.log(result * 10)     //NaN
//console.log(result - 10)     //NaN








//console.log(Number.MAX_SAFE_INTEGER)
//console.log(Number.MIN_SAFE_INTEGER)
//console.log(Number.isInteger(25))
//console.log(Number.isFinite(100))
//console.log(Number.isFinite(Infinity))
//console.log(Number.isSafeInteger(25))
//
//9007199254740991
//-9007199254740991
//true
//true
//true
//false
//true









//let name1 = "abc"
//let address = "indore"
//console.log(name1)        
//console.log(address)
//let age = 20
//let message = `Name is ${name1} and address is ${address} and age is ${age}`
//console.log(message)
//
//abc
//indore
//Name is abc and address is indore and age is 20








//a = 10
//b = 20
//console.log(`sum is ${a+b}`)
//console.log(`hyy kaise ho
//    party krenge`)
//
//sum is 30
//hyy kaise ho
//    party krenge    







//let message = `hyy \"guys" `
//console.log(message)






//let  m = "welcome";
//console.log(m[0])
//console.log(m[1])
//console.log(m[2])
//console.log(m[10])
//console.log(m[-1])
//console.log(m.charAt(0))
//console.log(m.length-1)
//console.log(m[m.length-1])
//console.log(m.at(-1))
//w
//e
//l
//undefined
//undefined
//w
//6
//e
//e







//let m = "hello";
//console.log(m)
//m[0] = 'y'
//console.log(m)
//
//hello
//hello








//let m = "welcome";
//console.log(m)
//m = m + "home"
//console.log(m)





//console.log(10+20)
//console.log("10" + "20")
//console.log("10" + 20)
//console.log(10 + "20" + 5)
//console.log(10 + 5 + "20")
//
//30
//1020
//1020
//10205
//1520








//console.log("20" - 5)
//console.log("20" * 5)
//console.log("20" / 5)
//console.log("abc" - 5)
//console.log("xyz" * 5)
//
//15
//100
//4
//NaN
//NaN






//converting values into string

//console.log(String(100))
//console.log(String(true))
//console.log(typeof (String(100)))
//console.log(typeof (String(true)))
//100
//true
//string
//string








//console.log("hello" == "hello")
//console.log("hello" === "hello")
//console.log("10" == 10)
//console.log("10" === 10)
//true
//true
//true
//false






//console.log("abc" < "bcd")
//console.log("bcd" < "abc")
//true
//false






// boolean datatype

//let a = true
//let b = "true"
//console.log(typeof a)
//console.log(typeof b)
//boolean
//string







// falsy values and truthy values

// console.log(Boolean(false))
// console.log(Boolean(""))
// console.log(Boolean("bhavna"))
// console.log(Boolean(0))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean([]))
// console.log(Boolean({}))
// console.log(!!"hello")
// console.log(!!" ")
// console.log(!!"")
// console.log(!!0)
// false
// false
// true
// false
// false
// false
// true
// true
// true
// true
// false
// false








// if else statements


// let a = 10
// let b = 20
// let c = 30
// 
// if (a > b) {
//     if (a > c) {
//         console.log("a is greater")
//     }
//     else {
//         console.log("c is greater")
//     }
// }
// else {
//     if (b > c) {
//         console.log("b is greater")
//     }
//     else {
//         console.log("c is greater")
//     }
// }














// lader if else

//let x = 10
//let y = 20
//let z = 30

//if (a>b  && a>c){
//    console.log("a is greater")
//}
//else if(b>c){
//    console.log("b is greater")
//}
//else{
//    console.log("c is greater")
//}








// increment and decrement 

// a = 10
// console.log(a)
// ++a
// console.log(a)
// b = 10
// console.log(b)
// b++
// console.log(b)
// 10
// 11
// 10
// 11





// let  a = 10
// let y = ++a
// console.log(a)
// console.log(y)
// 11
// 11





// let a = 10
// let y = a++
// console.log(a)
// console.log(y)
// 11
// 10







// let a = 10
// let y = --a
// console.log(a)
// console.log(y)
// 9
// 9









// let a = 10
// let y = a--
// console.log(a)
// console.log(y)
// 9
// 10