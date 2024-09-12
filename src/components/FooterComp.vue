<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Left Section: Store Info -->
      <div class="footer-left">
        <h2 class="fade-in-left">About Us</h2>
        <p class="fade-in-left">We provide premium quality biltong, sourced locally and made with passion. Experience the authentic taste of Cape Town with every bite.</p>
        
        <h3 class="fade-in-left">Contact Us</h3>
        <p class="fade-in-left">Email: info@biltongstore.com</p>
        <p class="fade-in-left">Phone: +27 12 345 6789</p>
        
        <h3 class="fade-in-left">Operating Hours</h3>
        <p class="fade-in-left">Mon-Fri: 8am - 6pm</p>
        <p class="fade-in-left">Sat-Sun: 9am - 4pm</p>
      </div>
      
      <!-- Right Section: Social Media & Icons -->
      <div class="footer-right">
        <h2 class="fade-in-left">Follow Us</h2>
        <div class="social-icons bounce-icons">
          <a href="#"><i class="fa fa-facebook">ddcc</i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
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
.footer-left p, .footer-right .social-icons {
  margin-bottom: 1em;
  font-size: 1em;
}

/* Social Icons */
.footer-right .social-icons a {
  color: white;
  font-size: 1.5em;
  margin-right: 15px;
  transition: transform 0.3s ease, color 0.3s ease;
}

.footer-right .social-icons a:hover {
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

/* Apply animations */
.fade-in-left {
  animation: fadeInLeft 1.5s ease;
}

.bounce-icons a {
  animation: bounce 2s infinite;
}

/* Responsive Styling */
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
      align-items: center; /* Center the content horizontally */
    }

    .footer-left, .footer-right {
      flex-basis: 100%;
      margin-bottom: 1.5em;
      text-align: center; /* Center the text */
    }

    .footer-left h2, .footer-right h2 {
      font-size: 1.2em; /* Reduce font size for better readability */
    }

    .footer-left p, .footer-right .social-icons {
      font-size: 0.9em; /* Reduce font size for better readability */
    }
  }

</style>

