/* eslint-disable */
<template>
  <div class="product-container">
    <h1>Products List</h1>
    <input type="text" class="search" v-model="searchItem">
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
.product-container {
  background-color: #f4f4f4;
  padding: 2em;
  font-family: 'Times New Roman', serif;
  text-align: center;
  gap: 5em;
  
}

h1 {
  font-size: 2.5em;
  color: #222;
  margin-bottom: 1em;
}

.product-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin: 3em;
  padding: 1.5em;
  background-color: #fff;
  border: 1px solid #222;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product-card:hover {
  background-color: #f0e4d7; 
}

.product-image {
  width: 8em;
  height: 8em;
  border-radius: 50%;
  margin: 0 auto;
  border: 2px solid #222; 
}

button {
  background-color: #222;
  color: #fff;
  border: none;
  padding: 0.5em 1em;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #555;
}


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

.loading-message {
  text-align: center;
  font-size: 1.5em;
  color: #555;
  font-family: 'Times New Roman', serif;
}


.product-card > div {
  background-color: #f7f7f7;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.error {
  color: red;
  font-size: 1.2em;
  margin-top: 1em;
}
</style>