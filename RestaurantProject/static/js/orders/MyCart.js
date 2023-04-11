const CartList = document.getElementsByClassName("CartList");
const SubmitButton = document.getElementById("SubmitButton");
const ItemName = document.getElementById("ItemName");
const ItemPrice = document.getElementsByClassName("price");

SubmitButton.addEventListener("click",addItemToList());
