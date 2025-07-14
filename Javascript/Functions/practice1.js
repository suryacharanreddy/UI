/* let lapsCompleted=0;
function incrementLaps(){
    lapsCompleted=lapsCompleted + 1;

}
incrementLaps();
console.log(lapsCompleted);  */

/* let lapsCompleted=0;
function incrementLaps(){
    let laps=lapsCompleted + 1;
    return laps;
}
lapsCompleted= incrementLaps();
lapsCompleted= incrementLaps();
lapsCompleted= incrementLaps();

console.log(lapsCompleted);  */
/* 
function multiply(a, b) {
    console.log(a * b);   // Just prints, does NOT return
}

let result = multiply(3, 4);
//console.log(result); // What will this print?  */

/* function greet(a,b) {
    //console.log(a+b);
    return a+b;
}

let x=greet(2,3); 
console.log(x) */
/* for (i=1;i<=x;i++){
    console.log(i)
} */
/* function multiply(a, b) {
    return a * b;  // return the value
}

let result = multiply(3, 4);
console.log("Result is:", result); // ✅ Output: Result is: 12
 */

let lapsCompleted = 0;

function incrementLap() {
    lapsCompleted=lapsCompleted+1
    return ;
}

incrementLap(); // 0 → 1
incrementLap(); // 1 → 2
incrementLap(); // 2 → 3

console.log(lapsCompleted); // Output: 3
