// aj ki humeri class hai hum date or time  // in k uper hum kase kaam kar skhta hain 


const date = new Date() ; // agr ap ko class k pta hai toh yah jo humera pass date es ko humera 
// pass ek clas hai // class humein ek object create kar k deta hai  /
//  Date() kyun lata hai es6 se constructor use karta tha 


//console.log(date.getDate()) // . get ko humein method bolta hai 
//console.log(date.getMonth())
//console.log(date.getFullYear())
// console.log(date.getHours())


// date.setDate(15);
// console.log(date)


// const examday = new Date();

// examday.setDate(15);
// examday.setMonth(0);
// examday.setFullYear(2026);
// examday.setHours(0);
// examday.setMinutes(0)


// console.log(examday)

const hoursElem = document.getElementById("hours");
const MinutesElem = document.getElementById("Minutes")
const SecondsElem = document.getElementById("Seconds")
const ampmElem = document.getElementById("ampm")





// setInterval(function(){
//     const newDate = new Date();
//     hoursElem.innerText = newDate.getHours();
// MinutesElem.innerText = newDate.getMinutes();
// SecondsElem.innerText = newDate.getSeconds();
// }, 1000)


setInterval(function(){
    const newDate = new Date();

    let hours = newDate.getHours()
    let amPm = "AM"
    if(hours > 11 ) { // hours agr humera bara hoge hai toh
      amPm = "PM";
      if(hours > 12) {
        hours -= 12;
      }
    }
    hoursElem.innerText = newDate.getHours();
MinutesElem.innerText = newDate.getMinutes();
SecondsElem.innerText = newDate.getSeconds();
ampmElem.innerText = amPm
}, 1000)
