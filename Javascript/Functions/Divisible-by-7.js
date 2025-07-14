let a=500;
let b=220;
let c=4000;

/* let a = 12;
let b = 5;
let c = 9; */

let x = a;
let y = b;
let z = c;

// Sort x, y, z using simple swaps inside for loop
for (let i = 0; i < 2; i++) {
    if (x > y) {
        let temp = x;
        x = y;
        y = temp;
    }
    if (y > z) {
        let temp = y;
        y = z;
        z = temp;
    }
}

// After two passes, x, y, z will be sorted in ascending order
console.log("Numbers in ascending order:", x, y, z);
