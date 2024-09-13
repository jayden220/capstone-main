
<template>
 
  <div>
    <SpinnerComp v-if="showSpinner"/>
    <div v-else>
      <NavBarComp/>
      <router-view/>
      <FooterComp/>
    </div>
  </div>
  
</template>
<script>
import FooterComp from '@/components/FooterComp.vue';
import NavBarComp from './components/NavBarComp.vue';
import SpinnerComp from './components/SpinnerComp.vue';
export default {
  components: {
    NavBarComp,
    FooterComp,
    SpinnerComp
  },
  data(){
    return{
      showSpinner: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.showSpinner = false
    }, 5000)
  },

}
</script>
<style>

</style>