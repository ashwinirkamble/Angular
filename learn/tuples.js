//create and initialise tuples
var tuple1 = [10, "marvellous", 3.14];
//create and initialise tuples
console.log(tuple1[0]);
console.log(tuple1[1]);
console.log(tuple1[2]);
console.log("Length of tuple :" + tuple1.length);
//insert elemnt into tuples
tuple1.push("Infosystems");
console.log(tuple1[3]);
console.log("length of tuple after push :" + tuple1.length);
//remove element of tuple 
tuple1.pop();
console.log("Length of tuple after pop" + tuple1.length);
//update value of tuple
tuple1[0] = "Pune";
console.log("Element of tuples are");
//traversing tuples
console.log("Element of tuples are");
for (var i = 0; i < tuple1.length; i++) {
    console.log(tuple1[i]);
}
