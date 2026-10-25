// push()

//let x = [10, 20]
//x.push(90)
//x.push(100, 110)
//console.log(x)
//[ 10, 20, 90, 100, 110 ]







// pop()

//  let x = [10, 20, 30, 40, 50]
//  let element = x.pop();
//  console.log(element)
//  console.log(x)
//  50
//  [ 10, 20, 30, 40 ]





// unshift()

//   let x = [10, 20, 30, 40]
//   x.unshift(99)
//   console.log(x)
//   [ 99, 10, 20, 30, 40 ]






// shift

//   let x = [10, 20, 30];
//   let y = x.shift();
//   console.log(y)
//   console.log(x)
//   10
//   [ 20, 30 ]





// iterating array ele
// using for loop

//    let x = [10, 20, 30, 40]
//    for (let i = 0; i<x.length; i++)
//    {
//        console.log(x[i])
//    }
//    10
//    20
//    30
//    40



// using while

//    let x = [10, 20, 30]
//    let i = 0
//    while(i < x.length){
//        console.log(i, "and", x[i])
//        i++
//    }
//    0 and 10
//    1 and 20
//    2 and 30







// for...of loop

//   let x = [10, 20, 30]
//   for (let i of x){
//       console.log(i)
//   }





// for ... each

//   let x = [10, 20, 30]
//   x.forEach(function(i){
//       console.log(i)
//   })
//   10
//   20
//   30







//  let names = ["dipu", "rashmika", "vaibhav"]
//  names.forEach(function(n){
//      console.log(n)
//  })








//  let names = ["dipu", "rashmika", "vaibhav"]
//  names.forEach(function(n, i){
//      console.log(i, "and",n)
//  })
//  0 and dipu
//  1 and rashmika
//  2 and vaibhav







// with arrow function

//   let x = [10, 20, 30]
//   x.forEach(i=>{
//       console.log(i)
//   })
//   10
//   20
//   30







//  let names = ["dipu", "rashmika", "vaibhav"]
//  names.forEach(n =>{
//      console.log(n)
//  })
//  dipu
//  rashmika
//  vaibhav   






//   let names1 =["bhavna", "shikha", "manu"]
//   names1.forEach((n, i)=>{
//       console.log(i, "and", n)
//   })
//   0 and bhavna
//   1 and shikha
//   2 and manu







//   let names = ["bhavna", "nishi", "mishika"]
//   names.forEach((n, i, x) =>{
//       console.log(i, "AND", n, x[i])
//   })
//   0 AND bhavna bhavna
//   1 AND nishi nishi
//   2 AND mishika mishika






// for ....in

//  let x = [10, 20, 30]
//  for (let i in x){
//      console.log(i, " ", x[i])
//  }

//  0   10
//  1   20
//  2   30
