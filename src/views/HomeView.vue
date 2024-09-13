<template>
  <div class="home">
    <div class="landing">
      <div class="land-left">
        <div class="left-content">
          <h1>Royal Chess Market</h1>
          <p>Master Your Game with Premium Chess Pieces</p>

          <a href="products">          <button class="cta">
  <span class="hover-underline-animation"> Explore Our Collecion </span>
  <svg
    id="arrow-horizontal"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
height="10" viewBox="0 0 46 16"><path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path></svg>
  </button></a>
        </div>
      </div>
      
      <div class="land-right">
        <div class="right-content">
          <img src="https://jayden220.github.io/hostedImages/images/pexels-worldspectrum-1099298.jpg" class="img1">
        </div>
      </div>
    </div>
    <div class="landing2">

      <h2 class="promise">Our Promise To You</h2>
      <div class="content2">
        <p>"At Royal Chess Market , we are committed to providing exceptional products and outstanding customer service. We promise to deliver high-quality chess pieces that meet your expectations and enhance your gaming experience. Your satisfaction is our top priority, and we are here to support you every step of the way."</p>
        <img src="https://jayden220.github.io/hostedImages/images/67f247f0-c3c7-4212-9810-17554427a3d5%20(1).png" alt="" class="img2">
      </div>
    </div>
    <div class="landing3">
      <div class="content3">
        <img src="https://jayden220.github.io/hostedImages/images/61eb4b9e-3063-4569-a752-b986b916b56f.png" alt="" class="img3">
        
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

.home {
  display: flex;
  flex-direction: column;
  font-family: 'Times New Roman', serif;
  text-align: center;
}

.landing {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100vh;
}

.landing2 {
  height: 110vh;
  background: #1c0e02;
  padding: 20px; 
}

.landing3 {
  width: 100%;
  height: 80vh;
  --color1: rgb(111, 66, 7);
  --color2: #1c0e02;
  background-color: var(--color1);
  background-image: linear-gradient(45deg, var(--color2) 25%, transparent 25%, transparent 75%, var(--color2) 75%, var(--color2)), 
                    linear-gradient(45deg, var(--color2) 25%, var(--color1) 25%, var(--color1) 75%, var(--color2) 75%, var(--color2));
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
}

.land-left {
  background: rgb(111, 66, 7);
  color: rgb(150, 92, 16);
  height: 100vh;
  width: 50%;
  display: flex;
  align-items: center;
  padding: 30px;
}

.land-right {
  background: #c15144;
  height: 100vh;
  width: 50%;
}

.img1 {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.img2 {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.img3{
  width: 100%;
  height: 30em;
}

.left-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  height: 100%;
  width: 100%;
  color: #d0afaf;
}

.left-content h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 10px;
}

.left-content p {
  font-size: 1.25rem;
  margin-bottom: 20px;
}

.cta {
  border: none;
  background: none;
  cursor: pointer;
}

.cta span {
  padding-bottom: 7px;
  letter-spacing: 4px;
  font-size: 14px;
  padding-right: 15px;
  text-transform: uppercase;
}

.cta svg {
  transform: translateX(-8px);
  transition: all 0.3s ease;
}

.cta:hover svg {
  transform: translateX(0);
}

.cta:active svg {
  transform: scale(0.9);
}

.hover-underline-animation {
  position: relative;
  color: black;
  padding-bottom: 20px;
}

.hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000000;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.cta:hover .hover-underline-animation:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}


.content2 {
  color: rgb(244, 254, 254);
  display: flex;
  justify-content: space-evenly;
  flex-direction: row-reverse;
  padding: 20px;
  font-size: 24px;
}
.promise{
  
 
  color: #ffffff;
}

.content2 p {
  margin: 1em 0;
  padding: 15px;
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

.content3 {
  align-items: center;
  text-align: center;
  padding: 20px;
}
.content3-info{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #007bff;
  height: 2em;
  width: 3em;
}

@media (max-width: 768px) {
  .landing {
    flex-direction: column;
    height: auto; 
  }

  .land-left, .land-right {
    width: 100%;
    height: auto;
    padding: 20px;
  }

  .land-right {
    background: #0f0302;
  }

  .landing2 {
    height: auto;
    background: rgb(0, 0, 0);
  }

  .landing3 {
    height: auto;
    background: rgb(255, 255, 255);
  }

  .img1 {
    height: auto;
    width: 100%;
  }

  .img2 {
    height: auto;
    width: 100%;
  }

  .left-content {
    text-align: center;
  }

  .content2 {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .land-left, .land-right {
    padding: 10px;
  }
  .promise{
    margin: 2em 0em;
  }
  .landing2 {
    height: auto;
    background-color: #000000;
  }

  .landing3 {
    height: auto;
    background: rgb(0, 0, 0);
  }

  .img1, .img2, .img3 {
    height: auto;
    width: 100%;
  }

  .left-content {
    margin: 1em 0;
  }

  .content2 {
    background: rgb(142, 70, 31);
  }
}

</style>
