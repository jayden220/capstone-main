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
            <button @click="decreaseQuantity(item.productID)" class="quantity-button">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)" class="quantity-button">+</button>
          </td>
          <td class="contents">R{{ item.productPrice.toFixed(2) }}</td>
          <td class="contents">R{{ (item.productPrice * item.quantity).toFixed(2) }}</td>
          <td class="contents">

            
            <button @click="removeFromCart(item.productID)" class="remove-button">×</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="cart-footer">
      <p class="total-summary">Total: R{{ cartTotal.toFixed(2) }}</p>
      <button @click="clearCart" class="action-button clear-cart">Clear Cart</button>
      <button @click="checkout" class="action-button checkout">Checkout</button>
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
    const cartItems = computed(() => cart.value);
    const cartTotal = computed(() => {
      return cart.value.reduce((total, item) => total + (item.productPrice * item.quantity), 0);
    });
    const increaseQuantity = (item) => {
      addToCart(item); 
    };

 
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

 
    const clearCart = () => {
      cart.value = [];
      localStorage.removeItem('cart'); 
    };

    const checkout = () => {
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

<style scoped>
.item-image {
  height: 6em;
  width: 6em;
}

.cart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
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
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  overflow-x: auto;
}

.contents {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
}

.cart-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}

.total-summary {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border: 0px solid transparent;
  background-color: rgba(100, 77, 237, 0.08);
  border-radius: 1.25em;
  transition: all 0.2s linear;
}

button:hover {
  box-shadow: 3.4px 2.5px 4.9px rgba(0, 0, 0, 0.025),
    8.6px 6.3px 12.4px rgba(0, 0, 0, 0.035),
    17.5px 12.8px 25.3px rgba(0, 0, 0, 0.045),
    36.1px 26.3px 52.2px rgba(0, 0, 0, 0.055),
    99px 72px 143px rgba(0, 0, 0, 0.08);
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 4em;
  background-color: rgba(0, 0, 0, 0.253);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 25%;
  left: 110%;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent rgba(0, 0, 0, 0.253) transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.action-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.action-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.clear-cart {
  background-color: #dc3545;
}

.clear-cart:hover {
  background-color: #c82333;
}

.checkout {
  background-color: #28a745;
}

.checkout:hover {
  background-color: #218838;
}

/* For screens larger than 768px */
@media (max-width: 768px) {
  .cart-table {
    display: block;
    overflow-x: auto;
  }

  .table-headings,
  tbody tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .table-headings th,
  tbody td {
    flex: 1;
    text-align: center;
    padding: 10px 5px;
  }

  .cart-footer {
    flex-direction: column;
  }
}

/* For screens smaller than 480px */
@media (max-width: 480px) {
  .cart-title {
    font-size: 1.2rem;
  }

  .contents {
    font-size: 12px;
    padding: 8px;
  }

  .item-image {
    height: 4em;
    width: 4em;
  }

  .total-summary {
    font-size: 1.2rem;
  }

  .cart-table {
    display: block;
    overflow-x: auto;
    border-collapse: separate;
  }

  /* Stack items vertically */
  .cart-table thead,
  .cart-table tbody,
  .cart-table tr {
    display: block;
  }

  .cart-table thead {
    display: none;
  }

  .cart-table tbody tr {
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .cart-table tbody td {
    padding: 0.5rem 0;
    text-align: left;
  }

  .cart-table tbody td:before {
    content: attr(data-label);
    font-weight: bold;
    margin-right: 10px;
  }

  .cart-footer {
    width: 100%;
    margin-top: 10px;
  }
}

</style>



