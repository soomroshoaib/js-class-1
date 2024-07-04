// console.log("hello array");

// function totalarr(arr = []){
//     let total = 0; 
//      for (let i = 0; i < arr.length; i++){
//         total = total + arr[i];
//      }
//         return total;

// }

// let arr = [1,3,7, 9,7];
// console.log(totalarr(arr))
 
// let num  = 20;


// {
//  var  num = 30
// //  console.log(num);
// }

// console.log(num)

// let num = 66; /// 
// num  

// let a = [];
// for(let i = 0; i < 100; i++){
//     a.push("shoaib")
// }

// console.log(a)

//Array

//   quenty start hoge 0 se 
// let month = ['january', "sept", "feb", "marach", "april"]  //saquare bareket

//month[4] = "may"  // not recommended

// let should = prompt("value ko add karun")
//  if(should === "yes"){
//     month.push("may")
//  }

// month.shift() // remove -1st value
// month.unshift("jan") //add value on first indexe
// month.pop()      // remove last value  arry 
//month.length() // tells the quantity of value

// month.splice(1,1, "may", 'june') // remove and add and  replace value 

// let newarry = month.slice(0, 2)
// console.log(newarry)
// console.log(month)


// let arr = [1,2,3,4,5,6,7,8] // index- 7 length 8

// arr.forEach(function(val, ind){ // loops through arr value
//     console.log( ind , val)
// })


// filter method

// let arr = [1,2,3,4,5,6,7,8];

// let filterarray =  arr.filter(function(val){ // filter array value 
//      return val % 2 != 0

    // if(val % 2 === 0){
    //     return true
    // }else{
    //     return false
    // }
// })

// console.log(arr)
// console.log(filterarray)


//sort method 

// let arr1 = [1,2,4,0,8,7,5,3,1,4,6,]


// let arrsort = arr1.sort(function(a , b){ // sort array value
//     if(a > b){
//         return 1;
//     }else {
//         return - 1;
//     }
// })

// console.log(arrsort)



///////////////////reduce

// let arr = [1,2,4,0,8,7,5,3,1,4,6,];

// let arres = arr.reduce(function(preval, curval){
//     return preval + curval
// },0)

// console.log(arres)



// var names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']

// for(let elem in names){
//     console.log(elem)            //  for in Loop  jo hai humein array ki index bat hai 
// }

// var names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']

// for(let elem of names){
//     console.log(elem)          or for of loop jo hai humein array ki value bat hai 
// }


// let arr = ["happy", "birthday", "haseeb"]; 

// let newarr = arr.reduce(function(preval, curval){
//    return preval + " " + curval
// })

// console.log(newarr)

// console.log(arr)




















































// what is Array =>    

// 1variable mei multple date ko store karta hai is called array 

// var names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']
// length mei array k under kitna element hai 

// console.log(names[names.length -1 ])
//(names[names.length -1 ])  array name .length -1 mean last wala nane check 


// var names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']

// for(var i=0; i<names.length; i++){
//     console.log(names[i])
// }


// var names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']

// for(var i = 0; i<names.length; i++){
//     console.log(names[i])
// }


var names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']

for(let elem in names){
    console.log(elem)            //  for in Loop  jo hai humein array ki index bat hai 
}

// var names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']

// for(let elem of names){
//     console.log(elem)          or for of loop jo hai humein array ki value bat hai 
// }


// var names = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']

// names.forEach(function(elem , ind){
//     console.log(ind + " " + elem)      forEach loop jo hai wo humein array ki value bhi or array ki index bhi show kara ata hai
// })


// Array Push mmethod 

// const add = ["shoaib", 'husssan', 'abdullah',"tanveer"];

// add.push('ali hussan ')
// console.log(add)



/// push mean array ki end mei value ko add karna 


// Array unshift method 

// const add = ["shoaib", 'husssan', 'abdullah',"tanveer"];

// add.unshift("abbas",'hussan Ahmed')
// console.log(add)

// unshift meaning array ki frist mei value ko add karna


// Array pop method 

// const add = ["shoaib", 'husssan', 'abdullah',"tanveer"];
// console.log(add.pop())

// pop method meaning k array ki end wali value ko remove karna 

//array  shift   Method

// const add = ["shoaib", 'husssan', 'abdullah',"tanveer"];
// console.log(add.shift());


// array shift method mean array ki frist ko remove karna


//const frnd = ["shoaib",'abdullah', 'hussain',"noman"];

// frnd.splice(4,0,"ali hussan");
// frnd.splice(1,2,"Abdullah soomro");
// frnd.splice(3,1,)


// console.log(frnd)


// const frnd = ["shoaib",'abdullah', 'hussain',"noman"];


// frnd.splice(1,1,"Abdullah")
// console.log(frnd)



// const frnd = ["shoaib",'abdullah', 'hussain',"noman"];
// const friendupdate = frnd.indexOf('abdullah')

// if(friendupdate / -1){
//     const  fridupdate = frnd.splice(friendupdate,1, "shoaib soomro")
//     console.log(frnd)
//     console.log(fridupdate)


// }else{
// console.log(" no found data")
// }

////////////////////////////////////////            Map method in Array

// const  frnd = ['shoaib', 'soomro', "abdullah", "tanveer",'noman']

// const newArr = frnd.map((elem, ind, Array)=>{
//          return `${elem} ,  ----- ${ind}   =================== ${Array}`
// })
// console.log(newArr)


///////////////////////////////////////////////// Map method square Root 

// const arr = [25,36,49,64,81]



// const newarr = arr.map((elem)=>{
//       return Math.sqrt(elem)
// })

// console.log(newarr)


// const frnd = ["shoaib",'abdullah', 'hussain',"noman"];

// const indexfrind = frnd.indexOf("abdullah")

// if(indexfrind / -1){
//       const friends = frnd.splice(indexfrind,1,"ABDULLAH")
//       console.log(friends)
//       console.log(frnd) 
// }else{
//       console.log("this data is valid ")
// }


// const num = [25,35,50,100]
//   const swt = num.map((elem)=>{
//         return Math.sqrt(elem)
//   })


// console.log(swt)


// const frnd = ["shoaib",'abdullah', 'hussain',"noman"];
// for(let elem of frnd){
//       console.log(elem)
// }
// const frnd = ["shoaib",'abdullah', 'hussain',"noman"];
// for(let elem in frnd){
//       console.log(elem)
// }

// const frnd = ["shoaib",'abdullah', 'hussain',"noman"];
// frnd.forEach((ele,ind)=>{
//       console.log(ind + " " + ele)
// });


//  var name = new String("shoaib soomro")  string constrorure
//  console.log(name)

// const num = "shoaib soomro "
// console.log(num.toUpperCase)

