const urlParams = new URLSearchParams(window.location.search);
const data = urlParams.get('data');

const cartItemsElement = document.getElementById('cart-items');
const cartItemElement = document.createElement('li');
cartItemElement.textContent = data;
cartItemsElement.appendChild(cartItemElement);

function checkoutAlert() {
    alert("Checkout ... but not your normal checkout. Check out my github!");
    window.location.href = "https://github.com/chrisyan04";
  }
  