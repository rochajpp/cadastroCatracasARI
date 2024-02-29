function mode(){
    const body = document.querySelector("body");
    body.classList.toggle("mode-on");
}


function closeWarning(){
    const warningBox = document.querySelector(".warning-box");
    warningBox.style.top = "-100rem";
}