let age = 20 
let result = age >= 18 ? "Eligible": "NOT Eligilble";
console.log(result)






let a = 10
let b = 20

let result1 = a>b ? "a is  greater" : "b is greater"
console.log(result1) 







//let user = {
//    name1 : "  ",
//    age1 : 0,
//    email : null
//}
//
//let name1 = user.name1 ?? "guist"
//let age1 = user.age1 ?? 18
//let mail = user.email ?? "NOt Eligible"
//console.log(name1, age1, mail)










let user = {
    name1 : "Bhavna",
    age1 : 25,
    email : null
}

console.log(user.name1 ?? "default")
console.log(user.age1 ?? 18)
console.log(user.email ?? "NOt Eligible")
console.log(user.city ?? "default")










// Nullish with fuction
function getUserAge(){
    return null
}
let age2 =getUserAge() ?? 18
console.log(age2)






function display(message){
    let value = message ?? "welcome";
    console.log(value)
}
display("hello guys")
display()
display("bye")








// optional chaning operators
 let  student = {
    name3 : "bhavna",
    age3 : 25
 }
console.log(student.name3)
//console.log(student.address.city)        //TypeError: Cannot read properties of undefined (reading 'city')







let employee = {

    name4 : "deepika",
    department : {
        dpname : "IT",
        location : "indore"
    }
}
console.log(employee.name4)
console.log(employee.department ?. name4)
console.log(employee.address ?. city)










let student1 = {
    id : 101,
    name$ : "deepika",
    contact :{
        address:{
            city : "indore",
            state : "mp"
        }
    }
}
console.log(student1.contact ?. address ?. city)
console.log(student1.contact ?. address ?. state)








let student2 = {
    id : 101,
    name1 : "deepika"
}
//console.log(student.contact.address?.state) //TypeError: Cannot read properties of undefined (reading 'address')








 let students = null
 console.log(students ?. contact ?. address ?. city)





let arr = ['deepika', 'rashmika', 'virat']
console.log(arr[0])
let arr1
console.log(arr1 ?. [0])





