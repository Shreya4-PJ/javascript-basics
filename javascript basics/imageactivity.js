const myImg=document.querySelector("img");
myImg.onclick=()=>{
    const mySrc=myImg.getAttribute("src");
    
    if (mySrc==="jerry.jpg"){
        myImg.setAttribute("dora.jpg");
    }
    else{
        myImg.setAttribute("jerry.jpg")
    }
}

let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");



  function setUserName() {
    const myName=prompt("enter your name");
    localStorage.setItem("name",myName);
    myHeading.textContent=`cartoons,${myName}`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };