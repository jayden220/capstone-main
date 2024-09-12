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
          <img src="https://jayden220.github.io/hostedImages/images/pexels-worldspectrum-1099298.jpg" class="img1">
        </div>
      </div>
    </div>
    <div class="landing2">

      <div class="content2">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione at commodi doloremque ducimus, odio asperiores voluptatum. Neque at distinctio minima cumque, alias dolorum numquam repellendus sequi esse ab nesciunt ratione.</p>
        <img src="https://jayden220.github.io/hostedImages/images/67f247f0-c3c7-4212-9810-17554427a3d5%20(1).png" alt="" class="img2">
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
  background: #1c0e02;
}

.landing3 {
  width: 100%;
  height: 100vh;
  --color1: rgb(111, 66, 7);
  --color2: #1c0e02;
  background-color: var(--color1);
  background-image: linear-gradient(45deg, var(--color2) 25%, transparent 25%, transparent 75%, var(--color2) 75%, var(--color2)), 
                    linear-gradient(45deg, var(--color2) 25%, var(--color1) 25%, var(--color1) 75%, var(--color2) 75%, var(--color2));
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
}
/* .landing3{

  height: 50vh;
  background: #ffffff;
  display: flex;
  align-items: center;
} */
.land-left{
  background: rgb(111, 66, 7);
  color: rgb(150, 92, 16);
  height: 100vh;
  width: 50%;
  display: flex;
  align-items: center;
  /* padding: 30px 3px 30px 30px; */
}
.land-right{
  background:#c15144;
  height: 100vh;
  width: 50%;
}
/* .img1{
  width: 43.5em;
  height: 43.5em;
} */
.img1 {
    width: 100%; /* Set the maximum width to 100% of its parent container */
    height: 99.98vh; /* Set the height to auto to maintain the aspect ratio */
    object-fit: cover; /* Scale the image to cover the entire container */
     /* Add some margin for better visibility */
    /* Add some padding for better visibility */
     /* Add a border radius for a rounded corner effect */
  }
  .img2{
    width: 108.4%; /* Set the maximum width to 100% of its parent container */
    height: 110vh; /* Set the height to auto to maintain the aspect ratio */
    object-fit: cover;
  }


.left-content h1{

  display: flexbox;
  flex-direction: row;
  margin-left: .5em;
  /* flex-flow:wrap ; */
  /* justify-content: flex-end; */
  /* margin: 2em 0 ; */
  /* text-align: center; */
}
.left-content p {
  margin-left: 1.2em
  ;
}
.content2{
  /* margin-left: 1.2em; */
  color: aqua;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row-reverse;
  /* margin: 2em 0 ; */
}
.content2 h1{
  margin: 2em 0;

}



@media (max-width: 768px) {
  .landing {
    flex-direction: column;
    height: auto; 
  }

  .land-left
   {
    width: 100%;
    height: auto;
    /* padding: 20px; */
  }
  .land-right{
    width: 100%;
    height: 90vh;
  }
  .landing2{
  /* margin-top: 3em; */
  height: 100vh;
  background: darkcyan;
  margin-top: 4.5em;
}
.landing3{
  margin-top: 8em;
  height: 50vh;
  background: rgb(142, 70, 31);
  
}
.img1{
    height: 102vh;
    width: 100cqi;
  }
  .left-content {
     flex-flow:wrap ; 
     justify-content: flex-end;
     margin: 5em 0 ;
     text-align: center; 
  }
  .content2{
  /* margin-left: 1.5em; */
  color: aqua;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex-wrap: wrap;
  /* margin: 2em 0 ; */
}
/* .content2 p{
 flex-wrap: wrap;
 margin: 2em auto
} */
.content2 p {
  margin: 5em 0;
  padding: 15px;
  text-align: left;
  /* border-bottom: 1px solid #ddd; */
  word-wrap: break-word; /* Enables wrapping of long words */
  overflow-wrap: break-word; /* Allows wrapping within words for long texts */
  word-break: break-word; /* Breaks long words at arbitrary points */
  white-space: normal; /* Ensures text wraps normally */
}

.img2{
  height: 80vh;
  width: 100cqi;

  /* margin: 0 auto; */
}
.content3{
  align-items: center;
  text-align: center;
}
}
@media (max-width: 1025px){
  /* .img1{
    height: 99.98vh;
  } */
}
@media (max-width: 480px) {
  .land-left
   {
    width: 100%;
    height: auto;
    padding: 20px;
  }
  .land-right{
    width: 100%;
    height: 60vh;
  }
  .landing2 {
    height: 138vh;
    margin: 0 0 0 0; 
    background-color:#c15144;
  }


  .landing3 {
    height: 100vh; 
    margin: 0 0;
    background-color:#c15144;

  }
  .img1{
    height: 60vh;
    width: 100%;
    
  }
  .img2{
    height: 80vh;
    width: 100cqi;
    
  }
  .left-content {
     flex-flow:wrap ; 
  justify-content: flex-end;
  margin: 2em 0 ;
   text-align: center; 
  }
}


</style>