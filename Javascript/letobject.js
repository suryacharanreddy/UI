let emp={
    'eid':101,
    'ename':'Surya',
    'esal':50000,
}
console.log(emp);
// Accessing object properties
console.log(emp.eid); // Accessing using dot notation
console.log(emp.loc); // Accessing using dot notation (undefined since 'loc' is not defined)
emp.email='sc@gmail.com'; // Adding a new property
console.log(emp); // Displaying the updated object
//delete
delete emp.eid; // Deleting a property
console.log(emp); // Displaying the object after deletion