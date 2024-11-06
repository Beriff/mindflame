import { initElements } from './modules/element.mjs'

function createWindow(parent = null) {

    let win = document.createElement('div')
    win.classList.add('window')
    if(parent != null) {parent.appendChild(win)}
    return win

}

document.addEventListener("DOMContentLoaded", () => {
    initElements()
})