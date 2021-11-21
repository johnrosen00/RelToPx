'use strict';



let currentRelType = "vw"

let vhButton = document.getElementById("vh")
let vwButton = document.getElementById("vw")
let relString = "Relative Size Type: "
vwButton.classList.toggle("active")

let r2aButton = document.getElementById("r2a")
let a2rButton = document.getElementById("a2r")
let currentConvType = "r2a"


vwButton.addEventListener('click', ()=>{
    currentRelType = "vw"
})

vhButton.addEventListener('click', ()=>{
    currentRelType = "vh"
})

r2aButton.addEventListener('click', ()=>{
    currentConvType = "r2a"
})

a2rButton.addEventListener('click', ()=>{
    currentConvType = "a2r"
})


let outputbtn = document.getElementById("submit")
outputbtn.addEventListener("click", ()=> {
    console.log(convert(currentConvType, currentRelType, parseInt(document.getElementById("amt").textContent)))
    console.log(document.getElementById("amt").value)
    document.getElementById("output").textContent = convert(currentConvType, currentRelType, parseInt(document.getElementById("amt").value))
})


function vhToPxConsole(vh) {
    console.log( (vh/100) * window.innerHeight)
}

function vwToPxConsole(vw) {
    console.log((vw/100) * window.innerWidth)
}

function pxToVhConsole(px) {
    console.log(100*px/window.innerHeight)
}

function pxToVwConsole(px) {
    console.log(100*px/window.innerWidth)
}

function convert(direction, type, amount) {
    let rel = type === "vw" ? window.innerWidth : window.innerHeight
    return direction === "a2r" ? 100*amount/rel + " " + type: amount*rel/100 + " px"
}
