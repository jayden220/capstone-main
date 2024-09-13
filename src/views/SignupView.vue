<template>
  <div>

  </div>
    <div class="container">
      <form class="form">
        <p class="title">Register</p>
        <p class="message">Signup now and purchase your favourite snax</p>
        <div class="flex">
          <label>
            <input class="input" type="text" placeholder="" required v-model="userName">
            <span>Username</span>
          </label>
        </div>
        <label>
          <input class="input" type="email" placeholder="" required v-model="userEmail">
          <span>Email</span>
        </label>
        <label>
          <input class="input" type="text" placeholder="" required v-model="userCell">
          <span>Cellphone</span>
        </label>
        <label>
          <input class="input" type="password" placeholder="" required v-model="userPass">
          <span>Password</span>
        </label>
        <label>
          <input class="input" type="text" placeholder="" required v-model="userProfile">
          <span>Profile</span>
        </label>
        <label>
          <input class="input" type="text" placeholder="user" required v-model="userRole">
          <span>Role</span>
        </label>
        <button @click="addUser()" class="submit" type="submit">Register</button>
        <p class="signin">Already have an account? <a href="/login">Log in</a></p>
      </form>
    </div>
  </template>
  
  <script>


  
import { toast } from 'vue3-toastify'
  
  export default {
    name: "signupView",

methods: {
  addUser() {
   
    if (!this.userName || !this.userEmail || !this.userCell || !this.userPass || !this.userProfile || !this.userRole) {
      toast.error("Please fill in all fields", {
        theme: "dark",
        type: "default",
        position: "top-center",
        dangerouslyHTMLString: true
      });
      return; 
    }try {
      this.$store.dispatch('addUser', {
        userName: this.userName,
        userEmail: this.userEmail,
        userCell: this.userCell,
        userPass: this.userPass,
        userProfile: this.userProfile,
        userRole: this.userRole
      });
      toast.success("User registered successfully!");
      alert('User registered successfully!')
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }
}

}
  </script>
<style scoped>
.container{
  background-image: url('https://jayden220.github.io/hostedImages/images/afa4b08e-dc11-47c3-8b40-79caf9a31298.png');
  background-repeat: no-repeat;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  background-color: #1a1a1a;
  color: #fff;
  border: 1px solid #333;
  margin: 0 auto;
  margin-top: 1em;
  margin-bottom: 1em;
}

.title {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #00bfff;
}

.title::before {
  width: 18px;
  height: 18px;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.title::before,
.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #00bfff;
}

.message, 
.signin {
  font-size: 14.5px;
  color: rgba(255, 255, 255, 0.7);
}

.signin {
  text-align: center;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.signin a {
  color: #00bfff;
}



.form label {
  position: relative;
}

.form label .input {
  background-color: #333;
  color: #fff;
  width: 100%;
  padding: 20px 05px 05px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 12.5px;
  font-size: 0.9em;
}

.form label .input:focus + span,
.form label .input:valid + span {
  color: #00bfff;
  top: 0px;
  font-size: 0.7em;
  font-weight: 600;
}

.input {
  font-size: medium;
}

.submit {
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
  background-color: #00bfff;
}

.submit:hover {
  background-color: #00bfff96;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
    
</style>