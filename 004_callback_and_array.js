
// functions

//  function hello(){
//      console.log("hello")
//  }
//  hello()
//  hello("bhavna")
//  hello
//  hello







//   function hello(name){
//       console.log("hello", name)
//   }
//   hello("bhavna")
//   hello()
//   hello bhavna
//   hello undefined






//   function hello(name){
//       console.log("hello", name)
//   }
//   let r = hello("bhavna")
//   console.log(r)
//   
//   hello bhavna
//   undefined








//    function add(a, b){
//        return a+b
//    }
//    let r = add(10, 20)
//    console.log(r)
//    
//    let r1 = add(100)
//    console.log(r1)
//    
//    30
//    NaN









//   console.log(add(10, 20))
//   function add(a, b){
//       return a+b
//   }
//   30






//   diffrent ways to create functions in js

//   function declaration

//   function add(a, b){
//       return a+b
//   }
//   console.log(add(10, 20));
//   30






//    function expression 

//    let c = function(a, b){
//        return a+b
//    }
//    console.log(c(10, 20))
//    30







//  with function name

//  let c = function add(a, b){
//      return a+b
//  }
//  console.log(c(20, 30))






// Arrow function

//  const add = (a, b) => a+b
//  console.log(add(10, 20))
//  30






//     const add = (a, b) => {
//         console.log("welcome to the jungal")
//         c = a+b
//         return c
//     }
//     console.log(add(10, 20))

//     welcome to the jungal
//     30





//   const fun = (a) => a.length
//   console.log(fun("hello"))






// default parameter

// function hello(name = "default"){
//     console.log(name)
// }
// hello()
// hello("deepika")
// default
// deepika







// rest parameter

//   function hello(a, b, c, ...r){
//       console.log(a,b,c)
//       console.log(r)
//   }
//   hello(10, 20, 30, 40, 50, 60)
//   hello(10, 20, 30)
//   hello(10, 20)
//   
//   10 20 30
//   [ 40, 50, 60 ]
//   10 20 30
//   []
//   10 20 undefined
//   []







// argument parameter

//   function hello(){
//       console.log(arguments)
//       console.log(arguments[0])
//       console.log(arguments.length)
//   }
//   hello("deepika", 30, "indore")
//   [Arguments] { '0': 'deepika', '1': 30, '2': 'indore' }
//   deepika
//   3










// function process(name, fun){
//     console.log("proccesing user", name)
//     fun()
// }
// function done(){
//     console.log("processing completed")
// }
// process("deepika", done)









// function calculate(a, b, operation){
//     return operation(a,b)
// }
// function add(a,b){
//     return a+b
// }
// function multiply(a,b){
//     return a*b
// }
// console.log(calculate(10, 20, add))
// console.log(calculate(10, 20, multiply))








//   setTimeout
//  console.log("welcome")
//  setTimeout(function(){
//      console.log("hello guys1")
//  }, 2000);
//  console.log("End of the code")









//  using arrow function
//  console.log("welcome")
//  setTimeout( () => {
//      console.log("hellow guys2")
//  }, 2000)
//  console.log("End of the code")









//  using normal function
//  console.log("welcome")
//  
//  function message(){
//      console.log("Normal function3")
//  }
//  setTimeout(message, 2000)
//  console.log("end of code")








//  setTimeout with arguments
//  function message(name){
//      console.log("arreeee", name)
//  }
//  setTimeout(message, 2000, "deepika")
//  console.log("end of code")







// setInterval

// console.log("code started")
// setInterval(function(){
//     console.log("diwaliiiiii is comming soon")
// }, 2000)
// console.log("code ended")








//    using counter
    
//    console.log("code started")
//    let count = 1
//    setInterval(()=> {
//        console.log(count)
//        count++
//    }, 2000)
//    console.log("End of the code")









// clearInterval  

//   console.log("code started")
//   let count = 1
//   
//   let id = setInterval(()=>{
//       console.log(count)
//       count++
//       if(count>5){
//           clearInterval(id)
//           console.log("Interval stopped")
//       }
//   }, 2000)
//   console.log("code ended")




//   let x = [10, 20, 30, 40]
//   console.log(x)



//   let y = new Array(10, 20, 300, 400)
//   console.log(y)




//   let xx = [10, 20, 30, 40]
//   console.log(xx[0])
//   console.log(xx[10])



//  let xxx = [10, "deepika", "indore", 20.5, null, undefined]
//  console.log(xxx)






//  let xxx1 = [10, "deepika", "indore", 20.5, null, undefined]
//  console.log(xxx1[-1])




//   let students = [101, 'deepika', [89, 97, 66], {city: 'indore'}]
//   console.log(students)
//   console.log(students[2][0])
//   console.log(students[3].city)
//   console.log(students.length)
//   console.log(students[students.length-1])







//   let xxxx = [10, 20]
//   xxxx[5] = 60
//   console.log(xxxx) //[ 10, 20, <3 empty items>, 60 ]
//   console.log(xxxx[3]) //undefined
