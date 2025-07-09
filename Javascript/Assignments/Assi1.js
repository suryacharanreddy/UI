let employees=[{"eid":1,"ename":"John","gender":"male","salary":50000,"department":"HR"},
    {"eid":2,"ename":"Jane","gender":"female","salary":60000,"department":"Finance"},
    {"eid":3,"ename":"Doe","gender":"female","salary":55000,"department":"IT"},
    {"eid":4,"ename":"Smith","gender":"male","salary":70000,"department":"Marketing"}];
let no_males_employees=0;
let no_females_employees=0;

for(let emp of employees ){
    if(emp.gender==="male"){
        no_males_employees++;
    }
    if(emp.gender==="female"){
        no_females_employees++;
    }
}
console.log("number of male employees:"+no_males_employees);
console.log("number of female employees:"+no_females_employees);