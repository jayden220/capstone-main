<template>
  
<footer>
        <div class="sectionContainer footer__container">
          <div class="footer__col">
            <h4>Our Products</h4>
            <ul class="footer__links">
              <li><a href="#">C</a></li>
              <li><a href="#">R</a></li>
              <li><a href="#">P</a></li>
              <li><a href="#">F</a></li>
              <li><a href="#">P</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Biltog</h4>
            <ul class="footer__links">
              <li><a href="#">Why</a></li>
              <li><a href="#">Our</a></li>
              <li><a href="#">I</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Adv</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Resources</h4>
            <ul class="footer__links">
              <li><a href="#">Download</a></li>
              <li><a href="#">Help Centers</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Partner Network</a></li>
              <li><a href="#">Developer</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Extras</h4>
            <ul class="footer__links">
              <li><a href="#">Purchase Deal</a></li>
              <li><a href="#">Repair Shop</a></li>
              <li><a href="#">View Booking</a></li>
              <li><a href="#">Hire Companies</a></li>
              <li><a href="#">New Offers</a></li>
            </ul>
          </div>
        </div>
        <div class="section__container footer__bar">
          <h4><a href="/"></a></h4>
            <p class="lead">Saba Biltong &copy; <span id="currYear"></span></p>
          <ul class="footer__socials">
            <li>
              <a href="#"><i class="bi bi-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i class="bi bi-facebook"></i></a>
            </li>
            <li>
              <a href="#"><i class="bi bi-twitter-x"></i></a>
            </li>
          </ul>
        </div>
</footer>
</template>

<script>
export default {
    name: "FooterComp",
}
</script>
<style>

footer {
  background-color: #3e3b32; 
  color: #f5f5f5; 
  padding: 40px 20px;
}

.footer__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}


.footer__col {
  flex: 1;
  min-width: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.footer__col h4 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #d1b99d; 
}

.footer__links {
  list-style: none;
  padding: 0;
}

.footer__links li {
  margin-bottom: 10px;
}

.footer__links a {
  text-decoration: none;
  color: #f5f5f5; 
  font-size: 16px;
}

.footer__links a:hover {
  text-decoration: underline;

}
.footer__bar {
  background-color: #2c2a21; 
  color: #d1b99d;
  text-align: center;
  padding: 20px;
}

.footer__bar h4 {
  margin: 0;
}

.footer__bar p.lead {
  margin: 10px 0;
  font-size: 16px;
}

.footer__bar ul.footer__socials {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.footer__bar ul.footer__socials li {
  margin: 0 10px;
}

.footer__bar ul.footer__socials a {
  color: #d1b99d;
  font-size: 24px;
  text-decoration: none;
}

.footer__bar ul.footer__socials a:hover {
  color: #f5f5f5; 
}

/* Responsive design adjustments */
@media (max-width: 768px) {
  .footer__container {
    flex-direction: column;
    align-items: center;
  }

  .footer__col {
    margin-right: 0;
    width: 100%;
    text-align: center;
  }
  
  .footer__bar ul.footer__socials {
    flex-direction: column;
  }

  .footer__bar ul.footer__socials li {
    margin: 10px 0;
  }
}
</style>