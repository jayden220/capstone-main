/* eslint-disable */
<template>
  <div class="product-container">
    <h1>Products List</h1>
    <div v-if="loading" class="loading-message">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="products.length > 0">
      <div class="product-card" v-for="product in products" :key="product.productID">
        <h2>{{ product.productName }}</h2>
        <img :src="product.productUrl || 'https://via.placeholder.com/150'" alt="Product Image" class="product-image" />
        <p>{{ product.productDes }}</p>
        <p>Price: R{{ product.productPrice }}</p>
        <p>Stock: {{ product.weight }}</p>
        <button @click="addToCart(product)">
          {{ isInCart(product) ? 'Added' : 'Add to Cart' }}
        </button>
      </div>
    </div>
    <div v-else-if="!loading && !error">No products found.</div>
  </div>
</template>

<script>
import axios from 'axios';
import { useCart } from '@/composables/cartFunctions'; 

export default {
  setup() {
    const { addToCart, cart } = useCart();

    // Method to check if a product is in the cart
    const isInCart = (product) => {
      return cart.value.some((item) => item.productID === product.productID);
    };

    return {
      addToCart,
      isInCart,
    };
  },
  data() {
    return {
      products: [],
      loading: false,
      error: '',
    };
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await axios.get('https://capstone-main-1.onrender.com/product');
        console.log('API response:', response);
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>
<style scoped>
.product-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4em;
  place-items: center;
  align-items: center;
  border: 2px red solid;
}



/* Make it responsive for 300px */
@media (max-width: 900px) {
  .product-card {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .product-card {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* Message when products are loading or empty */
.loading-message {
  text-align: center;
  font-size: 1.2em;
  color: gray;
}

/* Add some basic styling to the product cards */
.product-card > div {
  background-color: #f7f7f7;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

</style>
