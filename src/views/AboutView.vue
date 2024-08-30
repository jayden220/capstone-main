<template>
  <div class="about-container">
    <div class="about-header">
      <h3>About Our Store</h3>
    </div>
    <div class="about-info">
        <div class="about-comp">
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore error possimus, iure similique repellendus perferendis non aliquid animi reiciendis explicabo, nesciunt voluptas culpa hic fuga quidem distinctio blanditiis at? Voluptatum.</h3>
        </div>
        <div class="about-prod">
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore minus qui iure minima est dolore itaque, sed voluptatem doloribus? Officiis illum, velit vel aliquam nostrum atque ad id molestias magnam?</h3>
        </div>
      </div>
      <div class="about-footer">

      </div>
    
    
  </div>
</template>
<style>
.about-header{
  background: darkgoldenrod;
  height: 30vh;
  margin: 2em ;
}
.about-footer{
  background: darkgoldenrod;
  height: 30vh;
  margin: 2em ;
}
.about-info {
  margin: 2em 2em;
  display: flex;
  /* justify-content: space-between; */
  justify-content: space-evenly;
  line-height: 40px;

}
h3 {
  font-size: 24px; /* default font size */
}
@media (max-width: 768px) {
  h3 {
    font-size: 20px; /* adjust font size for smaller screens */
  }
}
@media (max-width: 600px) {
  h3 {
    font-size: 18px; /* adjust font size for even smaller screens */
  }
  .contact-container {
    padding: 15px;

  }
  
  .submit-button {
    font-size: 14px;
  }
  .about-info{
    display: flex;
    flex-direction: column;
    flex: wrap;
    /* margin: 0 auto; */
    padding: 0 0;
    margin: 2em 2em;
}
}
@media (max-width: 480px) {
  h3 {
    font-size: 16px; /* adjust font size for mobile screens */
  }
  .about-info{
    display: flex;
    flex-direction: column;
    flex: wrap;
    /* margin: 0 auto; */
    padding: 0 0;
    margin: 1em 2em;
}
}
</style>
