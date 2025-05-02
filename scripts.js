/* 
Om Kanabar 2025
All Rights Reserved
*/

const elementMainP = document.getElementById("elements");
const body = document.body;
const footer = document.getElementById("footer")
const clickme = document.getElementById("click-arrow")
const s1 = document.getElementById("s1")

function transitionScreen() {
    // Set the body and elementMainP to black
    body.style.backgroundColor = "black";
    elementMainP.style.color = "black";
    clickme.style.color = "black";
    
    // Wait for 2500ms
    setTimeout(() => {
        elementMainP.remove();
        body.style.backgroundColor = "#adadad";
        footer.className = "text-center lightfooter mt-auto"
        elementMainP.style.opacity = "0";
        section1();
    }, 1500);
}

const wind = document.getElementById("wind")
function windTrans() {
    // Set the body and elementMainP to black
    body.style.backgroundColor = "black";
    wind.style.color = "black";
    wind.style.opacity = "0";
    s1.style.opacity="0"
    // Wait for 2500ms
    setTimeout(() => {
        s1.remove()
        body.style.backgroundColor = "rgb(56, 128, 163)";
        footer.className = "text-center footer mt-auto"
    }, 1500);
}


/* Sections */

function section1(){
    s1.classList.replace("h","s1")
    footer.className = "text-center lightfooter mt-auto"
}

elementMainP.addEventListener("click", transitionScreen);
wind.addEventListener("click", windTrans)