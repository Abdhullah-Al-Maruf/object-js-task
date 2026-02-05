// **Input:**
// <br>
// ```js
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// ```
// **Output:**

// <br>

//     4

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const count = Object.keys(student).length;
console.log(count);