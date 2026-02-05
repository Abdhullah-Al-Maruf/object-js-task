// ### Task-3
// Display the physics marks as output.
// ```js
const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

 // WE CAN  use for in loop for  object
 // for of  loop for array


 // at first i  access the physics subject key then put it on the marks variable
const marks=student.physics;

// then i iterate  it in loop for print the all key inside of the physics object 
for( const mark in marks){
    console.log(mark ,"=",marks[mark]);// after accessing all the key of the object i print them and then print the values together 
    // thats how we can show the output 
}
