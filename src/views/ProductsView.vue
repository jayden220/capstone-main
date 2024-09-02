<template>
  <div class="product-main">

 
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

.product-main{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minMax(300px, 1fr));
  place-items: center;
  gap:1em;

}

</style>