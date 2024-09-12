<template>
  <div class="container">
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
<style scoped>
main{
  background-color: black;
  margin: 0 0;
  height: 200vh;
}
/* .container {
  width: 100%;
  height: 100%;
  --bg: linear-gradient(
      45deg,
      rgb(0, 0, 0) 25%,
      transparent 25%,
      transparent 75%,
      rgb(0, 0, 0) 75%,
      rgb(0, 0, 0)
    ),
    linear-gradient(
      45deg,
      rgb(0, 0, 0) 25%,
      white 25%,
      white 75%,
      rgb(0, 0, 0) 75%,
      rgb(0, 0, 0)
    );
  --bgsize: 60px 60px;
  --bgposition: 0 0, 30px 30px;
  background-color: rgb(0, 0, 0);
  background-image: var(--bg);
  background-size: var(--bgsize);
  background-position: var(--bgposition);
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  overflow: hidden;
  box-shadow: inset 0px 0px 500px rgb(15, 15, 15);
  /* margin: 0 0; */
  /* padding: 0 0; */
/* } */

/* .container::before {
  content: "";
  width: 100%;
  background-size: cover;
  height: 150%;
  box-shadow: 0px -100px 500px black, inset 0px 100px 500px rgb(15, 15, 15);
  position: absolute;
  top: 55%;
  background-image: var(--bg);
  background-size: var(--bgsize);
  background-position: var(--bgposition);
  transform-origin: top;
  transform: rotateX(80deg);
  background-color: black;
}  */

.container{
  /* margin: 3em; */
  background-color: aqua;
}

.about-header{
  background: darkgoldenrod;
  height: 30vh;
  /* margin: 2em ; */
}
.about-header h3{
  display: flex;
  justify-content: center;
  /* margin: 5em 0; */
  padding-top: 2.5em;
}
.about-footer{
  background: darkgoldenrod;
  height: 30vh;
  padding-top: 5em;
  /* margin: 2em ; */
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
