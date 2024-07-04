//object


// let person = { 
//     name: "abdullah",
//     last : "ali",
//     cnic : 231234556,
//     language : "sindhi",
//     cast : "Mahar",
// // yah function humera method hai
//     speack : function ( sentence){ // method humera pass kya hota hai object k under koi bhi function ho us ko hum method bolta hai 
//        console.log(sentence + this.name)
//     }
// }

// let person2 = {  // person2 = object 
//     name: "abdullah", // property 
//     last : "ali",
//     cnic : 231234556, // key 
//     eyecolor : 'black', // value
//     language : "sindhi",
//     cast : "Mahar",
// // yah function humera method hai
//     speack : function ( sentence){ // method humera pass kya hota hai object k under koi bhi function ho us ko hum method bolta hai 
//        console.log(sentence + this.name)
//     }
// }
// person.speack(" hello i m ")

// let students = {
//     name : "Abdullah",
//     rollNumber : 33,
//     teacher : "qari sahab ",
//     className: "javaScript"
// }
// let students2 = {
//     name : "wasif",
//     rollNumber : 44,
//     teacher : "qari sahab ",
//     className: "css"
// }

// let student = [students , students2];

// console.log(student)


// function Students (name1 , rollNumber1 , teacher1, className1 ){
//     return {
//             name : name1,
//             rollNumber : rollNumber1,
//             teacher : teacher1,
//             className: className1,
//     };
// }

// let student1 = [Students( 'Abdullah', 33, 'qarisahab', 'javascript' )]
// console.log(student1)



// function Students (){
//     return {
//             name : prompt("inter your name "),
//             rollNumber : +prompt("inter your rollNo "),
//             teacher : prompt("inter your teacher name  "),
//             className: prompt("inter your class "),
//     };
// }

// let student1 = [Students()]
// console.log(student1)

 /////////////////////////// example 
// let student1 = []
// function Students (){
//     let std = {
//             name : prompt("inter your name "),
//             rollNumber : +prompt("inter your rollNo "),
//             teacher : prompt("inter your teacher name  "),
//             className: prompt("inter your class "),
//     };
//     student1.push(std)
//     console.log(student1)
// }

// setitem ko hum n 2 cheez batna hoti 1st data hum jb bhi rakhna chacha us data k naam
// 2nd us data ki value 
// localStorage.setItem("name ", "shoaib")

// localStorage jo hai object ko aceept nhi karta us ko object ko 
// convert  string mei   humera pass hota hai stringfy 
// let student1 = []
// function Students (){
//     let std = {
//             name : prompt("inter your name "),
//             rollNumber : +prompt("inter your rollNo "),
//             teacher : prompt("inter your teacher name  "),
//             className: prompt("inter your class "),
//     };
//     student1.push(std)
//     console.log(student1)
//     let stringfy = JSON.stringify(student1)
//     localStorage.setItem("student1", stringfy)
// }



// let stdss = {name: "shoaib " , rollNumber : 234 };
// stdss.name = "asid"
delete stdss.rollNumber
console.log(stdss)

 let prestudents =  localStorage.getItem("student1 ") // get from loical stroge 

let student1 =  prestudents ?  JSON.parse(prestudents) : []; // wapse object value parse 
function Students (){
    let std = {
            name : prompt("inter your name "),
            rollNumber : +prompt("inter your rollNo "),
            teacher : prompt("inter your teacher name  "),
            className: prompt("inter your class "),
    };
    student1.push(std)
    console.log(student1)
    let stringfy = JSON.stringify(student1) // object convert  to string 
    localStorage.setItem("student1", stringfy) // save loical storage 
}