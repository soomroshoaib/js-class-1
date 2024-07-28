// promise  async await  
 
//synchronous vs
// alert("hello world ");

// console.log("hello pakistan")


//  asynchronous 

// function cale (){
//     setTimeout(function(){
//         console.log(
//             "hello pakistan "
//         )
//     }, 3000)
// }

// cale()
// console.log("hello student")
// callback

//callback humera pass function hota hai jo  asynchronous behavir humera kaam complete hona k bad chalta hai

// function runaftersec(cbs){
//     setTimeout(function(){
//         console.log("abc")
//         cbs()
//         console.log(typeof cbs)
//     },2000)
// }

// function tobeExcecute (){
//   console.log("done")
// }
// runaftersec(tobeExcecute);
// console.log("hello students")

// exp 2

// function runaftersec(cbs){
//     setTimeout(function(){
//         let data = 5 + 123
//         cbs(data)
//         console.log(typeof cbs)
//     },2000)
// }

// function tobeExcecute (datatoget){
//   console.log("done", datatoget)
// }
 

// runaftersec(function(datatoget){
//     console.log("done", datatoget)
//   });

// console.log("hello students")

//callback hell


// function runaftersec( val, cbs){
//     setTimeout(function(){
//         let data = 5 + val
//         cbs(data)
        
//     },2000)
// }

// runaftersec(10, function(datatoget){
//     runaftersec(datatoget,function(datatoget1){

//         runaftersec(datatoget1, function(datatoget2){ // call back hell
//             console.log(datatoget2 )

//         })
//     })
//   });


//promise 

// function runtime (val){
//     return new Promise (function(resolve ){
//         setTimeout(function(){
//             let data = 5 + val;
//             resolve(data)

//         }, 3000)
//     })
// }

// runtime(5).then(function(data){
//     console.log(data)
// })

// runtime(5).then(function(data){
//     return runtime(data)
// }).then(function(data){
//     return runtime(data)
// }).then(function(data){
//     return runtime(data)
// }).then(function(data){
//     return runtime(data)
// }).then(function(data){
//     console.log(data) // 30  
// })

//async await

// function runtime (val){
//     return new Promise (function(resolve ){
//         setTimeout(function(){
//             let data = 5 + val;
//             resolve(data)

//         }, 1000)
//     })
// }

// (async function (){
//     // let data = await runtime(5); example 1
//     // console.log(data)

//     let data = await runtime(5); // example 2
//     let data1 = await runtime(data); 
//     let data2 = await runtime(data1); 
//     let data3 = await runtime(data2); 
//     console.log(data3)
// })(); //ife

// async function run (){
//     // let data = await runtime(5); example 1
//     // console.log(data)

//     let data = await runtime(5); // example 2
//     let data1 = await runtime(data); 
//     let data2 = await runtime(data1); 
//     let data3 = await runtime(data2); 
//     return  data3
// }; 

// run().then(function(res){
//     console.log(res)
// })

//exp

function runtime (val){
    return new Promise (function(resolve, reject ){
        setTimeout(function(){
            let data = 5 + val;
            if(data % 2 === 0){
             resolve(data)   
            }else{
                reject("ood num error ")
            }
            

        }, 1000)
    })
}

runtime(1)
.then(function(data){
return runtime(data)
}).catch(function(error){
    console.log(error)
})