//Arrow function

// function add (x,y){ // normal function 

//     return x + y;
// }

// const subtrack =(x,y)=>{ // arrow function 
//     return x - y
// }

// const multply = (x,y)=> x * y; 

// console.log(add(10 , 5))
// console.log(subtrack(10 , 5))
// console.log(multply(10 , 5))



// const obj = {
//     name: "saylani",
//     print : function (){
//         console.log(this.name)
//     }
// }

// obj.print()

// const obj = {
//     name: "saylani",
//     print : function (){
//         setTimeout(function(){
//             console.log(this.name)
//         }, 1000)
//     }
// }

// obj.print()

// function add (x=10,y=20){// defult parameter
//     return x + y
// }

// console.log(add(20, 80))


// function sum (x, y , ...z){// rest parameter
//     console.log(x,y,z)
// }

// sum(1,2,3,5,67,8,9)


// const firstName = "shoaib ";
// const lastName = "soomro"

// const obj = {
//     firstName, 
//     lastName,
//     print : function (){
//         console.log(this.firstName, this.lastName)
//     }
// }
// obj.print()
                                     // destructuring
// const firstName = "shoaib ";
// const lastName = "soomro"

// const obj = {
//     firstName:"shoaib" ,
//     lastName: "soomro",
//     print  (){
//         // console.log(this.firstName, this.lastName)
//     }
// }

// const  {firstName} = obj;
// console.log(firstName)

// const {firstName, lastName} = obj;

// console.log(firstName)

// const arr = ["shoaib ", "abdullah", "wasif"];

// const [, lastName, abc ] = arr;

// console.log(abc)

/////////////////////////// spread operators
// const arr = ["shoaib ", "abdullah", "wasif"];

// const arr1 = ["some data ",...arr, "haseeb", "ahmad "];
// console.log(arr1)


const obj = {
    firstName:"shoaib" ,
    lastName: "soomro",
  
}

const obj1 ={
    ...obj,
    cast: "soomro"
}

console.log(obj1)