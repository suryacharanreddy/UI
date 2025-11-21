let stake={
    "eid":"101",
    "ename":"John Doe",
    "product":{
        "pid":"501",
        "pname":"Laptop",
        "price":"1200"
    }
}
let {eid,ename,product:{pname}}=stake;
console.log(eid);
console.log(ename);
console.log(pname);