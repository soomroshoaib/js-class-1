function cal (val){
        document.getElementById("a").value +=val;
}

function mpt (){
    document.getElementById("a").value = " ";
}

function solution (){ // plus add 
   let a =  document.getElementById("a").value;
   let b = eval(a);
   document.getElementById('a').value = b;

}
