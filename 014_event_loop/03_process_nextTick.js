

console.log("code started")
setTimeout(function(){
    console.log("timer1")
}, 1000)

Promise.resolve().then(function(){
    console.log("promise")
})


process.nextTick(() => {
  console.log('3. Inside nextTick');
});

console.log('next processing');