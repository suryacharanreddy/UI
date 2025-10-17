var enames=["surya","charan","reddy","hari"]
console.log(enames)
//Finding the length of an array
console.log(enames.length)
//indexing
console.log(enames[2])
console.log(enames[10])
//update
enames[2]="Siva";
enames[12]="ravi";
console.log(enames)
//delete
delete enames[1];
console.log(enames)
//we can delete the entire array with the below method
enames.length=0;
console.log(enames)
