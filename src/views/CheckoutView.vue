<template>
  <!-- <NavBarComp/> -->
  <div class="cart-container">
    <h1 class="cart-title">MY CART</h1>
    <table class="cart-table">
      <thead class="table-headings">
        <tr>
          <th class="contents car-item">Item</th>
          <th class="contents car-description">Description</th>
          <th class="contents car-quantity">Quantity</th>
          <th class="contents car-price">Price</th>
          <th class="contents car-total">Total</th>
          <th class="contents clear-cart"><button class="clear-cart-button">Clear</button></th>
        </tr>
      </thead>
      <tbody class="showBought">
        <!-- Your dynamic rows will be added here -->
        <!-- Example row -->
        <tr>
          <td class="contents">
            <img src="path-to-image" alt="Item Image" class="item-image">
          </td>
          <td class="contents">Almonds Raw CSSR Great Value 450g<br>12930</td>
          <td class="contents">
            <button class="quantity-button">-</button>
            <span class="quantity-value">1</span>
            <button class="quantity-button">+</button>
          </td>
          <td class="contents">R114.90</td>
          <td class="contents">R114.90</td>
          <td class="contents">
            <button class="remove-item-button">×</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="cart-footer">
      <button class="continue-shopping-button">Continue Shopping</button>
      <div class="summary-box">
        <h4 class="summary-title">Summary</h4>
        <p class="summary-total-label">Total:</p>
        <p class="summary-total-value">R114.90</p>
        <div class="promo-code-section">
          <input type="text" placeholder="Promo Code" class="promo-code-input">
          <button class="apply-promo-button">Apply</button>
        </div>
        <button class="checkout-button">Checkout Now</button>
      </div>
    </div>
  </div>
</template>


<script>
// import NavBarComp from '@/components/NavBarComp.vue';
export default {
    name: 'checkoutView',
  components: {
    
  }
}
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