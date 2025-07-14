function add(a,b){
    console.log(a+b);
}
add(10,20)
//writing a function and converting into a fat arrow function.
let addi=(b,c)=>{
    console.log(b*c);
}
addi(2,3)

//Fat arrow function without using return value and closing braces.
let ad=(a,b)=>a+b;

let r1=ad(1,2);
console.log(r1)

let r2=ad('surya',4)
console.log(r2)

let r3=ad(1);
console.log(r3)

//same as without using closing pranthesis
let wish=ename=>'hello MR '+ ename;

let e1=wish("surya");
console.log(e1);