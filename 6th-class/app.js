// function
// asa pice of code jis ko hum apni marzi se run kar seekh

// function greet ( students){ // parameter;
//   console.log("Hello students " + students)
// }

// greet =   yah humera pass coustom function kyun hum n es jo khud bna hai 

// greet("Abdullah") // argument
// greet("waseem")
// greet("javeed")
// greet("asif")

// jaha par hum round barket laga rha hai us ko hum bolta hai builting function 

// function employee ( fileNo){ // parameter;
//   console.log("working on file " + fileNo)
// }

// employee(7)

//  ab chacha rha hoon yah log ko print na kara or mujh b kbhi mei n kaam complete kar liya hai
// function employee ( fileNo){ // parameter;
//   return "working on file " + fileNo
// }

// let data = employee(7);
// console.log(data);

// function add (num1 , num2 , num3){
//     return num1 + num2 + num3;

// }

//  let data = add(22, 33, 44);
//  console.log(data);


//Recursion 
// recursion = mean kiss bhi kaam ko bar bar ko yah for loop ki tarh hi hota hai 
// Recursion  k mean concept hota hai koi bhi function apna apko khud call kara 

// function writaData (data, times){
//   document.write(data);
//    //Recursion  k under jb bhi function k mei function kara ge toh hum if k cindidtion use kara ge  
//  if (times > 0 ){ //time greater bara hai 5 se
//   writaData(data, times -1)
//  }


// }
// writaData("hello ", 25)


//// closures ==> scope
// global scope =====================> pure file k hota hai mean whole file 

///local scope ===================================> 

  // jo global scope  file k under lakh hota hai wo har function k X-able 
  // jo local n scope  k under lakh howa hai wo x-able nhi hai global scope ko global us ko use nhi kar skhta 

  // let name = "shoaib "/  global scope k
//  function print(){  
//           let def = "abc " //// local scope 
//   //   console.log(name)
//   return function (){ // anonymous function ;
//            console.log(def);
//   }
//    }
// let innerfunction = print()
// innerfunction()

  //  print()

  // function print (def){
  //   // def = local scope 
  //   return function (gh){
  //     console.log(def + gh);
  //   } 
  // }

  // let innerfunction = print(7);
  // let innerfunction2 = print(8)

  // innerfunction(7);
  // innerfunction2(5);

  
  // function saveurl (url){
  //   return function (){
  //     fetch(url)
  //     .then(response => response.json())
  //     .then(json => console.log(json))

  //   }
    
  // }
    //save url
  //let makesrequest =  saveurl('https://jsonplaceholder.typicode.com/todos');

  // Request attemp
  // makesrequest();
  // makesrequest()