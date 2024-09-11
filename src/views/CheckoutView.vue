<template>
  <div class="cart-container">
    <h1 class="cart-title">MY CART</h1>
    <table class="cart-table">
      <thead class="table-headings">
        <tr>
          <th class="contents">Item</th>
          <th class="contents">Description</th>
          <th class="contents">Quantity</th>
          <th class="contents">Price</th>
          <th class="contents">Total</th>
          <th class="contents">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.productID">
          <td class="contents">
            <img :src="item.productUrl" alt="Item Image" class="item-image">
          </td>
          <td class="contents">{{ item.productName }}</td>
          <td class="contents">
            <button @click="decreaseQuantity(item.productID)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)">+</button>
          </td>
          <td class="contents">R{{ item.productPrice.toFixed(2) }}</td>
          <td class="contents">R{{ (item.productPrice * item.quantity).toFixed(2) }}</td>
          <td class="contents">
            <button @click="removeFromCart(item.productID)">×</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="cart-footer">
      <p>Total: R{{ cartTotal.toFixed(2) }}</p>
      <button @click="clearCart">Clear Cart</button>
      <button @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useCart } from '../composables/cartFunctions.js';

export default {
  name: 'checkoutView',
  setup() {
    const { cart, addToCart, removeFromCart } = useCart();

    // Computed property to get the cart items
    const cartItems = computed(() => cart.value);

    // Computed property to calculate the total price
    const cartTotal = computed(() => {
      return cart.value.reduce((total, item) => total + (item.productPrice * item.quantity), 0);
    });

    // Method to increase item quantity
    const increaseQuantity = (item) => {
      addToCart(item); // Reuses the addToCart function to increase quantity
    };

    // Method to decrease item quantity
    const decreaseQuantity = (productID) => {
      const product = cart.value.find((item) => item.productID === productID);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          removeFromCart(productID);
        }
      }
    };

    // Method to clear the cart
    const clearCart = () => {
      cart.value = [];
      localStorage.removeItem('cart'); // Remove cart from localStorage
    };

    // Method for checkout (implement as needed)
    const checkout = () => {
      // Implement checkout logic
      alert('Checkout functionality is not implemented yet.');
    };

    return {
      cartItems,
      cartTotal,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      clearCart,
      checkout,
    };
  },
};
</script>

<style>
/* Base styles for the table */
/* Existing styles... */

.cart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px; /* Add some padding for mobile */
}

.cart-title {
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: #3a3a3a;
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
}

.cart-table {
  width: 100%; /* Make table width 100% for responsiveness */
  border-collapse: collapse;
  margin-bottom: 20px;
}

.contents {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px; /* Slightly reduce font size for mobile */
}

.cart-footer {
  display: flex;
  flex-direction: column; /* Stack elements vertically on mobile */
  align-items: center;
  width: 100%;
  margin-top: 20px;
}

.summary-box {
  width: 100%; /* Full width on mobile */
  max-width: 350px; /* Limit max width */
  margin-top: 20px; /* Add margin for spacing */
}

/* Media queries for mobile responsiveness */
@media (max-width: 768px) {
  .cart-table {
    display: block; /* Stack table for smaller screens */
    overflow-x: auto; /* Horizontal scrolling */
  }

  .table-headings, .showBought tr {
    display: flex; /* Flex layout for rows */
    flex-direction: row;
    justify-content: space-between; /* Space out table cells */
    align-items: center;
  }

  .table-headings th, .showBought td {
    flex: 1; /* Allow cells to expand equally */
    text-align: center; /* Center text for a neat look */
    padding: 10px 5px; /* Adjust padding for mobile */
  }

  .quantity-button {
    padding: 5px 10px; /* Increase padding for easier tapping */
  }

  .cart-footer {
    flex-direction: column; /* Stack buttons on mobile */
  }

  .continue-shopping-button, .checkout-button {
    width: 100%; /* Full width for buttons */
    margin-top: 10px; /* Add spacing between buttons */
  }

  .promo-code-section {
    flex-direction: column; /* Stack input and button on mobile */
    align-items: stretch; /* Make items stretch to fill width */
  }

  .promo-code-input, .apply-promo-button {
    width: 100%; /* Full width on mobile */
    margin: 5px 0; /* Add margin for spacing */
  }
}

@media (max-width: 480px) {
  .cart-title, .summary-title {
    font-size: 1.2rem; /* Adjust font size for smaller screens */
  }

  .contents {
    font-size: 12px; /* Smaller font size for very small screens */
  }

  .quantity-value {
    font-size: 14px; /* Make quantity value text smaller */
  }

  .summary-total-value {
    font-size: 1rem; /* Adjust font size for totals */
  }
}

</style>