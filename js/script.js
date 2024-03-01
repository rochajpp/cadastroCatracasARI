function mode(){
    const body = document.querySelector("body");
    body.classList.toggle("mode-on");
}


function closeWarning(){
    const warningBox = document.querySelector(".warning-box");
    warningBox.style.top = "-100rem";
}

function checkRa(){
    const ra = document.querySelector("#ra");
    const button = document.querySelector("#button");
    console.log(ra.value.length);

    if(ra.value.length != 7){
        button.disabled = true;
        button.style.cursor = "default"
        button.style.backgroundColor = "#1e73be9c";

        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#1e73be9c";
        })
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "#1e73be9c";
        })

    } else{
        button.disabled = false
        button.style.cursor = "pointer"
        button.style.backgroundColor = "#1E73BE";

        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#4688c2e4";
        })
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "#1E73BE";
        })
    }
}
