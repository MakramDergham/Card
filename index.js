var outside = document.getElementById("page1")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
button1.addEventListener("click", open_card)
button2.addEventListener("click", close_card)
function open_card(){
    outside.className="open_card"
    
}
function close_card(){
    outside.className=""
}