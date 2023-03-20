$(function () {
   $('[data-toggle="tooltip"]').tooltip()
 })



function addCart(){
   document.getElementById("cartValue").innerText = "1"; 
    
}
   


function addCart2(){
    document.getElementById("cartValue2").innerText = "2"; 
     
 }

 function addCart4(){
   document.getElementById("cartValue2").innerText = "3"; 
    
}

// CHECKOUT JS

function remove()  {
   var removeItem = document.getElementById("removeItem");
   
   removeItem.innerText = "";
   document.getElementById("subtotal").innerText = "₱102,999";
   document.getElementById("misceleneous").innerText = "₱7,000";
   document.getElementById("tot").innerText = "₱109,999";
   document.getElementById("cartValueFinal").innerText = "3";

}