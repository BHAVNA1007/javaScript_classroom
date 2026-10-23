function process(name, fun){
    console.log("proccesing user", name)
    fun()
}
function done(){
    console.log("processing completed")
}
process("deepika", done)









function calculate(a, b, operation){
    return operation(a,b)
}
function add(a,b){
    return a+b
}
function multiply(a,b){
    return a*b
}
console.log(calculate(10, 20, add))
console.log(calculate(10, 20, multiply))








// setTimeout
console.log("welcome")
setTimeout(function(){
    console.log("hello guys1")
}, 2000);
console.log("End of the code")









//using arrow function
console.log("welcome")
setTimeout( () => {
    console.log("hellow guys2")
}, 2000)
console.log("End of the code")









//using normal function
console.log("welcome")

function message(){
    console.log("Normal function3")
}
setTimeout(message, 2000)
console.log("end of code")








//setTimeout with arguments
function message(name){
    console.log("arreeee", name)
}
setTimeout(message, 2000, "deepika")
console.log("end of code")







// setInterval

//console.log("code started")
//setInterval(function(){
//    console.log("diwaliiiiii is comming soon")
//}, 2000)
//console.log("code ended")








//using counter

//console.log("code started")
//let count = 1
//setInterval(()=> {
//    console.log(count)
//    count++
//}, 2000)
//console.log("End of the code")









// clearInterval  

console.log("code started")
let count = 1

let id = setInterval(()=>{
    console.log(count)
    count++
    if(count>5){
        clearInterval(id)
        console.log("Interval stopped")
    }
}, 2000)
console.log("code ended")




let x = [10, 20, 30, 40]
console.log(x)



let y = new Array(10, 20, 300, 400)
console.log(y)




let xx = [10, 20, 30, 40]
console.log(xx[0])
console.log(xx[10])



let xxx = [10, "deepika", "indore", 2.5]
console.log(xxx)