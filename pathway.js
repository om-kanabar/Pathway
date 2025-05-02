/* 
Om Kanabar 2025
All Rights Reserved
*/

const section1 = document.getElementById("s1")
const section2 = document.getElementById("s2")
const elementMainP = document.getElementById("elements");
const body = document.body;
const footer = document.getElementById("footer")
const clickme = document.getElementById("click-arrow")
const fireT = document.getElementById("fire")

function transitionScreen() {
    // Set the body and elementMainP to black
    body.style.backgroundColor = "black";
    elementMainP.style.color = "black";
    clickme.style.color = "black";
    
    // Wait for 2500ms
    setTimeout(() => {
        elementMainP.remove();
        section1.classList.replace("h","s1")
        body.style.backgroundColor = "#adadad";
        footer.className = "text-center lightfooter mt-auto"
        elementMainP.style.opacity = "0";
    }, 2500);
}

function fireTrans(){
        // Set the body and elementMainP to black
    body.style.backgroundColor = "black";
    fireT.style.color = "black";
    section1.style.color = "black !important";
    section1.style.opacity = "0"
    
    // Wait for 2500ms
    setTimeout(() => {
        fireT.remove();
        section1.remove();
        section2.classList.replace("h","s2");
        body.style.backgroundColor = "#c28f43";
        footer.className = "text-center ofooter mt-auto"
    }, 2500);
}

elementMainP.addEventListener("click", transitionScreen);
fireT.addEventListener("click", fireTrans)