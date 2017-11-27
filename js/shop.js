var customername = "Vini";
var price = 0;
var quantity = 0;
var totalprice = 0;
var time = 0;
var greeting = "";

time = new Date().getHours();
if (time > 17)
document.getElementById("greeting").innerHTML = "Good Evening";
else if (time > 12)
document.getElementById("greeting").innerHTML = "Good Afteroon";
else
document.getElementById("greeting").innerHTML = "Good Morning";


var products = [
"Shurikens",
"Bijuu",
"Jutsu",
"Running Shoes",
"Hokage Cloak"
];

var price=[40,100,20,80,100];

var productsText = "";
var productsElement = document.getElementById("product-list");
for (var i = 0; i <5; i++){
productsText +=  "<li class='list-group-item'>" + products[i] + "<span class='badge'>$" + price[i] + "</span></li>";
totalprice += price[i];
};

var discount = totalprice * 0.75;

productsElement.innerHTML = productsText;

document.getElementById("customer-name").innerHTML = "Vini";

document.getElementById("price").innerHTML =  "$" + discount + " <span class='badge progress-bar-success'>25% off</span>";
