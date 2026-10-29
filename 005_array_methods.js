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




// length

//  let arr = [10, 20, 30];
//  console.log(arr.length)
//  3





// toString()

//  let arr = [10, 20, 30];
//  console.log(arr.toString());
//  10,20,30




// join()

//    let arr = ["HTML", "CSS", "JS"];
//    console.log(arr.join("-"));
//    HTML-CSS-JS





// concate()

//   let a = [1, 2], b = [3, 4];
//   console.log(a.concat(b));
//   [ 1, 2, 3, 4 ]






// slice()

//    let arr = [10, 20, 30, 40];
//    console.log(arr.slice(1,3));
//    [ 20, 30 ]







// flat()

//    let arr = [1, [2, [3, 4]]];
//    console.log(arr.flat());
//    
//    let arr1 = [1, [2, [3, 4]]];
//    console.log(arr1.flat(2));







// flateMap()

//  let arr = [1, 2, 3, 4];
//  console.log(arr.flatMap(x => [x, x*2]))




// map()

// let arr = [1, 2, 3];
// console.log(arr.map(x => x*2));

//[ 2, 4, 6 ]






// forEach()

//  let arr = [10, 20, 30]
//  arr.forEach( x => console.log(x));
//  10
//  20
//  30




// filter()

//  let arr = [10, 15, 20, 25];
//  console.log(arr.filter(x => x > 15));
//  
//  [ 20, 25 ]






// includes()

// let arr = [10, 20, 30];
// console.log(arr.includes(20));
// true





// find()

//  let arr = [10, 20, 30, 40]
//  console.log(arr.find(x => x > 20));
//  30






// findIndex()

//  let arr = [10, 20, 30, 40];
//  console.log(arr.findIndex(x => x > 10));
//  1




// some()

//  let arr = [10, 20, 30];
//  console.log(arr.some(x => x > 25));
//  true





//  every()

//  let arr = [10, 20, 30, 40];
//  console.log(arr.every(x => x > 5))

//  true





// reduce()

//  let arr = [10, 20, 30, 40];
//  console.log(arr.reduce((sum, x) => sum + x, 0));
//  
//  100






// fill()

//   let arr = [1, 2, 3, 4]
//   arr.fill(0, 1, 3);
//   console.log(arr);





// sort()

//   let arr = [30, 5, 20, 10];
//   arr.sort((a, b) => a-b);
//   console.log(arr);
//   
//   [ 5, 10, 20, 30 ]








// reverse()

//    let arr = [10, 20, 30];
//    arr.reverse();
//    console.log(arr);
//    
//    [ 30, 20, 10 ]







// values()

//   let arr = ["HTML", "CSS", "js"];
//   console.log(...arr.values());
//   
//   HTML CSS js








// delete operator

//  let arr = [10, 20, 30];
//  delete arr[1];
//  console.log(arr);
//  console.log(arr.length)
//  
//  [ 10, <1 empty item>, 30 ]
//  3




















