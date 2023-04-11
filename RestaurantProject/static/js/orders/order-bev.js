// get the relevant elements
const sizeSelect = document.getElementById('size-select');
const quantityInput = document.getElementById('quantity-input');
const itemPriceElement = document.querySelector('.price');

// set the initial item price to 0
let itemPrice = 0;

// update the item price whenever the size or quantity changes
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
