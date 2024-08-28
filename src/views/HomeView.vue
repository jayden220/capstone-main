<template>
  <div class="home">
    <div class="landing">
      <div class="land-left">
        <div class="left-content">
          <h1>Hello</h1>
        </div>
      </div>
      <div class="land-center">
        <h2></h2>
      </div>
      <div class="land-right">
        <div class="right-content">
          <h1>Hello</h1>
        </div>
      </div>

    </div>

  </div>
</template>

<script>


export default {
  name: 'HomeView'

}
</script>
<style>
.landing{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.land-left{
  background: red;
  height: 50em;
  width: 50em;
  /* padding: 30px 3px 30px 30px; */
}
.land-right{
  background: rgb(0, 13, 255);
  height: 50em;
  width: 50em;
}
.land-center{
  background: rgb(87, 130, 87);
  height: 50em;
  width: 50em;
}
.left-content{
  justify-content: center;
  margin-top: 3em;
  text-align: center;
}
.right-content{
  justify-content: center;
  margin-top: 3em;
  text-align: center;
}



</style>