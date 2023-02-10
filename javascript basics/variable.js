const buttonA=document.querySelector("#button_A");
const headingA=document.querySelector("#heading_A");

buttonA.onclick = function () {
    const name = prompt("enter your name");
    alert(`hello ${name}`);
    headingA.textContent = (`welcome ${name}`);
}