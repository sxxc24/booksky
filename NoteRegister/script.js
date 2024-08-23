var popupOverlay=document.getElementById("popupItm")
popupOverlay.addEventListener("click",function(){
    var popOverlayEl=document.querySelector(".popupOverlay")
    popOverlayEl.style.display="block"
    var popupBoxEl=document.querySelector(".popupBox")
    popupBoxEl.style.display="block"
})

var cancelBook=document.getElementById("cancelBook")
cancelBook.addEventListener("click",function(event){
    event.preventDefault() // prevents automatic refresh when cancel button clicked
    var popOverlayEl=document.querySelector(".popupOverlay")
    popOverlayEl.style.display="none"
    var popupBoxEl=document.querySelector(".popupBox")
    popupBoxEl.style.display="none"
})

var container=document.querySelector(".container")
var bookTitle=document.getElementById("bookNameIp")
var authorName=document.getElementById("authorNameIp")
var shortDescription=document.getElementById("bookDescriptionIp")
var addBook=document.getElementById("AddBook")

addBook.addEventListener("click",function(event){
event.preventDefault()
var div=document.createElement("div")
div.setAttribute("class","bookContainer")
div.innerHTML=`<h1>${bookTitle.value}</h1>
<h2>${authorName.value}</h2>
<h3>${shortDescription.value}</h3>
<button onclick='Delete(event)'>Delete</button>`
container.append(div)
    var popOverlayEl=document.querySelector(".popupOverlay")
    popOverlayEl.style.display="none"
    var popupBoxEl=document.querySelector(".popupBox")
    popupBoxEl.style.display="none"
})

function Delete(event){
    event.target.parentElement.remove()
}
