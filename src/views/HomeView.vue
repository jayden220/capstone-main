<template>
  <div class="home">
    <div class="landing">
      <div class="land-left">
        <div class="left-content">
          <h1>Hello</h1>
        </div>
      </div>
      <div class="land-center">
        <h2>fjg</h2>
      </div>
      <div class="land-right">
        <div class="right-content">
          <h1>Hello</h1>
        </div>
      </div>
    </div>
    <div class="landing2">
      <div class="content2">
        <h1>rrrr</h1>
      </div>
    </div>
    <div class="landing3">
      <div class="content3">
        <h3>tttt</h3>
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
  height: 100vh;
}
.landing2{
  /* margin-top: 3em; */
  height: 100vh;
  background: darkcyan;
}
.landing3{
  /* margin-top: 3em; */
  height: 50vh;
  background: rgb(142, 70, 31);
}
.land-left{
  background: red;
  height: 100vh;
  width: 90vh;
  /* padding: 30px 3px 30px 30px; */
}
.land-right{
  background: rgb(0, 13, 255);
  height: 100vh;
  width: 90vh;
}
.land-center{
  background: rgb(87, 130, 87);
  height: 100vh;
  width: 90vh;
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

@media (max-width: 768px) {
  .landing {
    flex-direction: column;
    height: auto; 
  }

  .land-left,
  .land-center,
  .land-right {
    width: 100%;
    height: auto;
    padding: 20px;
  }
  .landing2{
  /* margin-top: 3em; */
  height: 100vh;
  background: darkcyan;
}
.landing3{
  /* margin-top: 3em; */
  height: 50vh;
  background: rgb(142, 70, 31);
}
}

@media (max-width: 480px) {
  .landing2 {
    height: 50vh; 
  }

  .landing3 {
    height: 50vh; 
  }
}


</style>