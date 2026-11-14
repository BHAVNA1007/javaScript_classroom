let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 1000, "first")
})


let promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, "second")
})



let promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, "third")
})


Promise.all([promise3, promise2, promise1])
.then((values)=>{
    console.log(values)
}).catch((error)=>{
console.error(("error: " + error));
})

