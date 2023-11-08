'use strict'

// // Находим элементы с классами
// let quantityElement = document.querySelector('.quantity');
// let submitButton = document.querySelector('#order-form__button');
// let productStatus = document.querySelector('.quantity');

// submitButton.addEventListener('click', function() {
//   let quantity = parseInt(quantityElement.textContent);
  
//   if (quantity > 0) {
//     quantity--;
//     quantityElement.textContent = quantity;
    
//     if (quantity === 0) {
//       productStatus.style.display = 'block';
//     }
//   }
// });


const card = document.querySelector('.card');
const quantityElement = card.querySelector('.quantity');

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Check if the form is valid
  if (this.checkValidity()) {
    // Get the current quantity
    let quantity = parseInt(quantityElement.textContent);

    if (quantity > 0) {
      // Decrease the quantity by 1
      quantity--;

      // Update the quantity element
      quantityElement.textContent = quantity;

      // Do something with the order (e.g., send it to the server)
      console.log('Order submitted!');

      if (quantity === 0) {
        // Show "Товар закончился!" message
        const message = document.createElement('p');
        message.textContent = 'Товар закончился!';
        card.appendChild(message);
      }
    }
  }
}

// Add event listener
const orderForm = card.querySelector('.order-form__item-1');
const orderFormButton = orderForm.querySelector('#order-form__button');
orderForm.addEventListener('submit', handleFormSubmit);