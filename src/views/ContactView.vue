<template>
  <div class="main-container">
    <div class="info-container">
      <h2>Keep in touch</h2>
        <div class="contact-group">
          <h3>How to get a hold of us</h3>
          <p>phone number</p>
          <p>email</p>
          <p>location</p>
        </div>
    </div>
    <div class="contact-container">
    <h2>Contact Us</h2>
    <form class="contact-form" action="https://formspree.io/f/mdknbjkj" method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit" class="submit-button">Send Message</button>
    </form>
    
  </div>
  </div>
  
 
</template>

<script>
export default {
  name: "contactView"
}
</script>

<style>
.main-container{
  display: flex;
}
.info-container {
  max-width: 600px;
  margin: 5em auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.contact-container {
  max-width: 600px;
  margin: 5em auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-container h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}
.contact-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-button {
  background-color: #5a9;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #478;
}
.contact-info{
  margin: 3em 5em;
}

@media (max-width: 600px) {
  .contact-container {
    padding: 15px;

  }
  
  .submit-button {
    font-size: 14px;
  }
  .main-container{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 0;
}
}
</style>
