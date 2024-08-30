<template>
  <div class="product-container">
    <CardComp>
      <h1>img</h1>
      <template #cardHeader>
        <h2>Product 1</h2>
      </template>
      <!-- Card body content -->
      <template #cardBody>
        <p>This is a product description.</p>
      </template>
      <!-- Card footer content -->
      <template #cardFooter>
        <button>Buy Now</button>
      </template>
    </CardComp>
  </div>
  <div class="product-container">
    <CardComp>
      <h1>img</h1>
      <template #cardHeader>
        <h2>Product 1</h2>
      </template>
      <!-- Card body content -->
      <template #cardBody>
        <p>This is a product description.</p>
      </template>
      <!-- Card footer content -->
      <template #cardFooter>
        <button>Buy Now</button>
      </template>
    </CardComp>
  </div>
  <div class="product-container">
    <CardComp>
      <h1>img</h1>
      <template #cardHeader>
        <h2>Product 3</h2>
      </template>
      <!-- Card body content -->
      <template #cardBody>
        <p>This is a product description.</p>
      </template>
      <!-- Card footer content -->
      <template #cardFooter>
        <button>Buy Now</button>
      </template>
    </CardComp>
  </div>
  <div class="product-container">
    <CardComp>
      <h1>img</h1>
      <template #cardHeader>
        <h2>Product 3</h2>
      </template>
      <!-- Card body content -->
      <template #cardBody>
        <p>This is a product description.</p>
      </template>
      <!-- Card footer content -->
      <template #cardFooter>
        <button>Buy Now</button>
      </template>
    </CardComp>
  </div>
</template>


<script>
import CardComp from '@/components/CardComp.vue';

export default {
     name: 'productsView',
  components: {
    CardComp
  }
}
</script>

<style>

.product-container{
  margin: 2em 3em;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
}
/* @media (max-width: 600px) {
  .contact-container {
    padding: 15px;

  }
  
  .submit-button {
    font-size: 14px;
  }
  .main-container{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 0;
}
.product-container{
  margin: 2em 3em;
  display: flex;
  flex-direction: row;
}
} */
</style>