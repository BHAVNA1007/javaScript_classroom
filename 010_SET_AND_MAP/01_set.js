// set creation

// using an array

let s1 = new Set([10, 20, 30, 40, 40]);
console.log(s1);

let s2 = new Set(["gfg", "js", "geeks"]);
console.log(s2)

//Set(4) { 10, 20, 30, 40 }
//Set(3) { 'gfg', 'js', 'geeks' }



// using string
let s3 = new Set("foooooddd");
console.log(s3);




// an empty set 

let s4 = new Set();
console.log(s4)






// methods of set 
// Set.add() :
// Adds the new element with a specified value at the end of the Set object.



// let myset = new Set();
// 
// myset.add(75)
// myset.add(15)
// console.log(myset)






// delete()

// Create a new set using Set() constructor
let myset = new Set();

// Append new elements to the set
// using add() method
myset.add(75);
myset.add(12);

// Print the modified set
console.log(myset);

// As 75 exists, it will be removed 
// and it will return true
console.log(myset.delete(75));
console.log(myset);





// clear()
let myset2 = new Set();

myset2.add(30);
myset2.add(60);

console.log(myset2);
console.log(myset2.size);

myset2.clear()
console.log(myset2.size)




let numbers = new Set([10, 20, 30]);
console.log(numbers.has(20));
console.log(numbers.has(70));



//4. How to iterate over a Set?

//
//A. for...of loop

let fruits = new Set(["apple", "mango", "banana"]);
for(let fruit of fruits){
    console.log(fruit)
}



//B. forEach()

let numbers2 = new Set([10, 20, 30]);
numbers2.forEach(function(value){
    console.log(value)
})




//C. keys(), values(), entries()

let numbers3 = new Set([10, 20, 30])

console.log(numbers3.keys())
console.log(numbers3.values())
console.log(numbers3.entries())



let numbers7 = new Set([10, 20, 20, 30]);

let arr = Array.from(numbers7);

console.log(arr);






let A = new Set([1, 2, 3, 4]);
let B = new Set([3, 4, 5, 6]);


let union = new Set([...A, ...B]);

console.log(union)



let intersection = new Set(
    [...A].filter(value => B.has(value))
);

console.log(intersection);



let difference = new Set(
    [...A].filter(value => !B.has(value))
);

console.log(difference);