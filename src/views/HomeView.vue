<template>
  <div class="home">
    <div class="landing">
      <div class="land-left">
        <div class="left-content">
          <h1>Savor Local Flavours</h1>
          <p>Discover the best dishes in Cape Town. Fresh ingredients and authentic recipes right here in your neighborhood.</p>
        </div>
      </div>
      
      <div class="land-right">
        <div class="right-content">
          <img src="https://jayden220.github.io/capstone-images/240_F_931728578_y7DhaNSHwTXlejxcDtsW0GKCqxZusUkj.jpg" class="img1">
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
  name: 'homeView'

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
  height: 110vh;
  background: darkcyan;
}
.landing3{
  /* margin-top: 3em; */
  height: 50vh;
  background: rgb(142, 70, 31);
}
.land-left{
  background: #c15144;
  color: antiquewhite;
  height: 100vh;
  width: 50%;
  /* padding: 30px 3px 30px 30px; */
}
.land-right{
  background: rgb(0, 13, 255);
  height: 100vh;
  width: 50%;
}
/* .img1{
  width: 43.5em;
  height: 43.5em;
} */
.img1{
  max-width: 100%; 
  /* max-height: 100vh; */
  object-fit: cover; 
  /* margin: 20px;  */
    /* padding: 10px; */
    height: 43.45em;
    width: 40em;

  /* border-radius: 10px;  */
}
.left-content{
  justify-content: center;
  margin-top: 3em;
  text-align: center;
}

/* .right-content{
  justify-content: center;
  margin-top: 3em;
  text-align: center;
} */

@media (max-width: 768px) {
  .landing {
    flex-direction: column;
    height: auto; 
  }

  .land-left,
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
  .land-left,
  .land-right {
    width: 100%;
    height: auto;
    padding: 20px;
  }
  .landing2 {
    height: 50vh; 
  }

  .landing3 {
    height: 50vh; 
  }
}


</style>