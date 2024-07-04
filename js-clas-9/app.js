// let para = document.getElementById("hading");

// para.innerText = "shoaib"

// dom manu plaction 
// query selector dond k dage  

// let para = document.querySelector("h1")
// para.innerHTML = "pakistan-zindabad";
// para.style.backgroundColor = "#000"
// para.style.color = "#fff"
// console.log(para)


 // koi bhi kaam ap ko perform karna hai bari bari  
// setInterval( function(){
//     console.log("hello ")
// } , 1000)


// let para = document.querySelector("h1")
// para.innerHTML = "pakistan-zindabad";
// para.style.backgroundColor = "#000"
// para.style.color = "#fff"
// console.log(para)
// setInterval(function(){
//     if(para.style.display === "none"){
//         para.style.display = "block"

//     }else {
//         para.style.display = "none "
//     }
// }, 1000)


// let mypara = document.getElementById("my-para");
// mypara.innerHTML = "hello students "
// setInterval(function (){
//     let colr1 = Math.round(Math.random() * 100000);
//     let  colr2 = Math.random( Math.random() * 100000 )
//     console.log(colr1 , colr2);
//     mypara.style.backgroundColor = "#" + colr1 ;
//     mypara.style.color = " # " + colr2
// }, 1000)



let mypara = document.getElementById("my-para");
mypara.innerHTML = "hello students "
setInterval(function (){
    let colr1 = Math.round(Math.random() * 100000).toString(16);
    let  colr2 = Math.random( Math.random() * 100000 ).toString(16)
    console.log(colr1 , colr2);
    mypara.style.backgroundColor = "#" + colr1 ;
    mypara.style.color = " # " + colr2
}, 1000)