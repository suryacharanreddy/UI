function add(a,b,c=1){  //c=1 is a default value if we didn't mention no it will take default value
    console.log(a+b+c)
}
add(1,2,3)
add(1,2)


function mult(a,b){
    let c=100
    return a+b+c;
}
let r1=mult(10,20)
console.log(r1)
let r2=mult(1,2)
console.log(r2)

function ult(a,b){
    let c=100
    return a+b+c; // return statement ends the function execution and returns the value to the caller
    console.log("good bye") // this line will never execute because return statement ends the function execution
    
}
let n1=mult(10,20)
console.log(r1)
