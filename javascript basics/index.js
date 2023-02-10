const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let name="bob";
let age=10;
let x=true;
let y=["alice",10,34];

let a=10;
let b=20;
let c=a+b;
let fname="shreya";
let lname="P J"
let fullname=fname+lname;

let icecream="vanilla";
if(icecream==="vanilla"){
    alert("I love icecreams");

}
else{
    alert("I do not like icecream");
}

function addition(a,b){
    let res=a+b;
    return res;
}

const sum=document.querySelector("h2");
sum.textContent=addition(a,b);

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

  document.querySelector("html").addEventListener("click", ()=>{
    alert("hello everyone");
  })
