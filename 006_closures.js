function outer(){
    let message = "hello";
    function inner(){
        console.log(message)
    }
    return inner;
}
let result = outer();
result();




