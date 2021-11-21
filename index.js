'use strict';




//default relative css type
let currentRelType = "vw"

let vhButton = document.getElementById("vh")
let vwButton = document.getElementById("vw")
let relString = "Relative Size Type: "
vwButton.classList.toggle("active")

let r2aButton = document.getElementById("r2a")
let a2rButton = document.getElementById("a2r")
let currentConversionType = "r2a"

let convType = document.getElementById("conversiontype")
let floating = document.getElementById("floating")

vwButton.addEventListener('click', ()=>{
    currentRelType = "vw"
})

vhButton.addEventListener('click', ()=>{
    currentRelType = "vh"
})
