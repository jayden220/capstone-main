/* eslint-disable */
<template>
  <h1>hi</h1>
  <div class="product-container">

    <!-- <div v-if="!products || products.length === 0" class="loading-message">
      Loading products or no products available...
    </div> -->

    <card-comp v-for="product in products" :key="product">

      <template #cardHeader>
        <img :src="product.productUrl || 'default-image-url.jpg'" loading="lazy" class="img-fluid" :alt="product.productName || 'Product Image'" />
      </template>

      <template #cardBody>
        <h5 class="card-title fw-bold">{{ product.productName }}</h5>
        <p class="lead">
          <span class="text-success fw-bold">Amount</span>: R{{ product.productPrice }}
        </p>
        <p>{{ product.productDes }}</p>
    
        <div class="button-wrapper d-md-flex d-block justify-content-between">
          <router-link :to="{ name: 'ProductDetailView', params: { id: product.productID } }">
            <button class="btn btn-success">View More</button>
          </router-link>
        </div>
      </template>
 
      <template #cardFooter></template>
    </card-comp>
  </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue';

export default {
  name: 'productsView',
  components: {
    CardComp,
  },
  computed: {
    products() {
      console.log('Computing products:', this.$store.state.products);
      // Ensure the products exist, otherwise return an empty array to avoid undefined issues.
      return this.$store.state.products;
      
    },
  },
  methods: {
    fetchProducts(){
      this.$store.dispatch('fetchProducts');
      console.log(`fetchProducts()`)
      console.log('products')

    }
  },
  mounted() {
    // Dispatch action to fetch products from the store.
    this.fetchProducts();
    
  },
};
</script>

<style scoped>

.product-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1em;
  place-items: center;
}

/* Message when products are loading or empty */
.loading-message {
  text-align: center;
  font-size: 1.2em;
  color: gray;
}
</style>
