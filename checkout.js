let value_1 = document.getElementById("value1").value;
let value_2 = document.getElementById("value2").value;
let value_3 = document.getElementById("value3").value;
let value_4 = document.getElementById("value4").value;
let subtotalV;

subtotalV = value_1 + value_2 + value_3 + value_4;

document.getElementById("subtotal").innerText = parseInt(subtotalV);