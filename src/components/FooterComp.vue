<template>
  <footer class="footer">
    <div class="footer-container">
     
      <div class="footer-left">
        <h2 class="fade-in-left">About Us</h2>
        <p class="fade-in-left">
          We provide premium quality chess sets, crafted with precision and passion. Our goal is to offer elegant, durable chess pieces that enhance your playing experience.
        </p>

        <h3 class="fade-in-left">Contact Us</h3>
        <p class="fade-in-left">Email: info@royalchessmarket.com</p>
        <p class="fade-in-left">Phone: +27 12 345 6789</p>

        <h3 class="fade-in-left">Operating Hours</h3>
        <p class="fade-in-left">Mon-Fri: 8am - 6pm</p>
        <p class="fade-in-left">Sat-Sun: 9am - 4pm</p>

    
        <h3 class="fade-in-left">Policies</h3>
        <ul class="fade-in-left list-unstyled">
          <li><a href="/privacy-policy" class="text-light">Privacy Policy</a></li>
          <li><a href="/return-policy" class="text-light">Return Policy</a></li>
          <li><a href="/terms-of-service" class="text-light">Terms of Service</a></li>
        </ul>
      </div>

      
      <div class="footer-right">
        <h2 class="fade-in-left">Royal Chess Market</h2>
        <p class="fade-in-left">
          Elevating the game of chess with beautifully designed, premium chess sets. Whether you’re a casual player or a chess master, our pieces are crafted to enrich your experience.
        </p>
    
  
        <div class="text-center py-2">
          <p>© 2024 <br> JAYDEN VAN ROOYEN. <br> All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style scoped>

.footer {
  background-color: #2c2a29;
  color: white;
  padding: 2em;
  text-align: left;
  font-family: 'Times New Roman', serif;

}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-left, .footer-right {
  flex-basis: 45%;
}

.footer-left h2, .footer-right h2 {
  font-size: 1.5em;
  margin-bottom: 0.5em;
  position: relative;
}

/* Text Styling */
.footer-left p, .footer-right p, .footer-left ul {
  margin-bottom: 1em;
  font-size: 1em;
}

.footer-left ul li {
  margin-bottom: 0.5em;
}

/* Social Icons */
.social-icons a {
  color: white;
  font-size: 1.5em;
  margin-right: 15px;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icons a:hover {
  color: #ffcc00; /* Add hover effect color */
  transform: scale(1.3);
}

/* Animations */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* Apply Animations */
.fade-in-left {
  animation: fadeInLeft 1.5s ease;
}

.bounce-icons a {
  animation: bounce 2s infinite;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
  }

  .footer-left, .footer-right {
    flex-basis: 100%;
    margin-bottom: 1.5em;
  }
}

@media (max-width: 430px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
  }

  .footer-left, .footer-right {
    flex-basis: 100%;
    margin-bottom: 1.5em;
    text-align: center;
  }

  .footer-left h2, .footer-right h2 {
    font-size: 1.2em;
  }

  .footer-left p, .footer-right p {
    font-size: 0.9em;
  }

  .social-icons a {
    font-size: 1.2em;
  }
}
</style>


