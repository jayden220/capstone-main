<template>
  <div class="about-page">
    <div class="about-header">
      <h3>About Us</h3>
      <p>Learn about our mission and the craftsmanship behind our chess pieces.</p>
    </div>
    <div class="about-info">
      <div class="about-comp">
        <h3>
          At Royal Chess Market, we take pride in the meticulous craftsmanship that goes into every chess set we create. Our chess pieces are handcrafted by skilled artisans who use only the finest materials, ensuring durability and elegance in every set. From the selection of premium woods and marbles to the precision carving and polishing, every detail is carefully considered. Our commitment to quality means that each chess set is not just a game piece but a work of art, designed to stand the test of time.
        </h3>
      </div>
      <div class="about-prod">
        <h3>
          Founded by chess enthusiasts, Royal Chess Market is driven by a deep love for the game and a desire to share that passion with others. We believe that chess is more than just a game; it’s a rich tradition that brings people together and challenges the mind. Our mission is to make high-quality chess sets accessible to players of all levels, from beginners to grandmasters. By blending tradition with innovation, we aim to provide chess sets that enhance your playing experience and inspire your love for the game.
        </h3>
      </div>
    </div>

  </div>
</template>

<style scoped>

.container {
  background: linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff),
              linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff);
  background-size: 40px 40px;
  background-color: #f5f5f5; 
  padding: 2em;
  min-height: 100vh;
  box-sizing: border-box;
  font-family: 'Times New Roman', serif;
  text-align: center;
}
.about-page {
  width: 100%;
  height: 80vh;
  padding: 3em 2em;
  background-color: black;
  font-family: 'Times New Roman', serif;
  text-align: center; 
}


.about-header, .about-footer {
  background-color: rgb(91, 66, 4);
  color: #fff;
  padding: 2em;
  text-align: center;
}

.about-header h3, .about-header p, .about-footer {
  margin: 0;
  color: white;
}

.about-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2em 0;
}

.about-info h3 {
  font-size: 1.2rem;
  margin: 1em 0;
  max-width: 600px;
  color: white;
}

@media (max-width: 768px) {
  .about-info {
    flex-direction: column;
    align-items: center;
  }

  .about-info h3 {
    font-size: 1rem;
    text-align: center;
    margin: 1em 0;
  }
}

@media (max-width: 480px) {
  .about-info h3 {
    font-size: 0.9rem;
  }
}
</style>
