const sizeSelect = document.getElementById('size-select');
const quantityInput = document.getElementById('quantity-input');
const itemPriceElement = document.querySelector('.price');
const submitButton = document.getElementById('SubmitButton');


let itemPrice = 0;


function updateItemPrice() {
  const initialPrice = {
    'small': 3.99,
    'medium': 4.99,
    'large': 5.49
  }[sizeSelect.value];
  itemPrice = initialPrice * quantityInput.value;
  itemPriceElement.textContent = `$${itemPrice.toFixed(2)}`;
}

sizeSelect.addEventListener('change', updateItemPrice);
quantityInput.addEventListener('input', updateItemPrice);

submitButton.addEventListener('click', function() {
  const itemName = document.getElementById('ItemName').textContent;
  const quantity = quantityInput.value;
  const totalPrice = itemPrice.toFixed(2);
  const data = `${itemName}\nQuantity: ${quantity}\nTotal Price: $${totalPrice}`;
  const url = `MyCart.html?data=${encodeURIComponent(data)}`;
  window.location.href = url;
});