/*eslint-disable*/
<template>
    <div>
        <h1>hi</h1>
    </div>
</template>
<style>

</style>


<!-- <template>
    <div>
        
    </div>
</template>
<script>
export default {
    name: "productView"
}
</script>
<style>
    
</style> -->
<!-- <template>
    <div v-if="loading" class="loading-message">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="product">
      <h1>{{ product.productName }}</h1>
       <img :src="product.productUrl || 'https://via.placeholder.com/150'" alt="Product Image" class="product-image" /> -->
      <!-- <p>{{ product.productDes }}</p>
      <p>Price: ${{ product.productPrice }}</p> -->
      <!-- Adjust this if stock field is different -->
      <!-- <router-link :to="{ name: 'ProductView', params: { id: product.productID } }">
          <h2>{{ product.productName }}</h2>
          <p>{{ product.productDes }}</p>
          <p>Price: ${{ product.productPrice }}</p>
        </router-link> -->
    <!-- </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        product: null,
        loading: true,
        error: '',
      };
    },
    async created() {
      const productId = this.$route.params.id; // Get product ID from route params
      try {
        const response = await axios.get(`https://capstone-main-1.onrender.com/product/${productId}`);
        this.product = response.data;
      } catch (error) {
        console.error('Error fetching product:', error);
        this.error = 'Failed to fetch product details';
      } finally {
        this.loading = false;
      }
    },
  };
  </script>
  
  <style scoped>
  .product-image {
    max-width: 300px;
  }
  </style> -->
   