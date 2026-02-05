// ---
// ### Task-5 (Hard)

// Loop through an object and print the key-value pairs with their `types`

// **Input:**
// <br>

// let myObject = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true

// };

// **Output:**

// <br>

//     key: name | type:  string
//     key: age | type:  number
//     key: city | type:  string
//     key: isStudent | type:  boolean


let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};


for (const ob in myObject){
       const values =myObject[ob];
       const type=typeof(values);
    console.log(ob,":",values,"|",`type: ${type}`);
}

// const arr=Object.entries(myObject);
//  const newArry=arr.join("|")
//  console.log(newArry);
