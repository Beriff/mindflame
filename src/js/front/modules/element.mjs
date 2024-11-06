export function initElements() {
    for(let el of document.getElementsByClassName("toggle-button")) {
        el.addEventListener("click", () => {
            let roller = el.childNodes[0]
            if(roller.style.marginLeft == "23px") { roller.style.marginLeft = "-1px" }
            else {roller.style.marginLeft = "23px"}
        })
    }
}