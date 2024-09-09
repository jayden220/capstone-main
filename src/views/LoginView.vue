<!-- <template>
  <div>
    <h1>dee</h1>
    
  </div>
</template> -->


<template>
<!-- <form class="form">
  <input placeholder="Enter your name" class="input" type="text">
  <input placeholder="Enter your email" class="input" type="text">
    <input placeholder="*********" class="input" type="password">

  <button>Submit</button>
</form> -->
  <div class="login-container">
    <h5>Login View</h5>
    <div class="main-container">
      <div class="head-container">
        <div class="left-container">
         
        </div>
        <div class="right-container">
     
        </div>
      </div>
      <form class="login-form" @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
        <br />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginView",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      // TO DO: implement login logic here
      console.log("Login button clicked!");
    }
  }
};
</script>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
} 

.main-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.head-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.left-container {
  height: 2em;
  width: 2em;
  background-color: black;
  margin-right: 10px;
}

.right-container {
  margin-left: 10px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-form label {
  margin-bottom: 10px;
}

.login-form input {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.login-form button[type="submit"] {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.login-form button[type="submit"]:hover {
  background-color: #3e8e41;
}

@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
    align-items: center;
  }
  .head-container {
    flex-direction: column;
    align-items: center;
  }
  .login-form {
    width: 100%;
  }
} 
 /* From Uiverse.io by aboalsim114 */ 
/* .form {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: linear-gradient(to bottom, #0077be, #3b8df2);
  border-radius: 10px;
  overflow: hidden;
  perspective: 1000px;
  transform-style: preserve-3d;
  transform: rotateX(-10deg);
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  animation: form-animation 0.5s ease-in-out;
}

@keyframes form-animation {
  from {
    transform: rotateX(-30deg);
    opacity: 0;
  }

  to {
    transform: rotateX(0deg);
    opacity: 1;
  }
}

.input {
  padding: 10px;
  border-radius: 5px;
  background-color: transparent;
  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  color: rgb(255, 255, 255);
  border: 2px solid #3b8df2;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.input::placeholder {
  color: #fff;
}

.input:hover,
.input:focus {
  border-color: #3b8df2;
  background-color: rgba(255, 255, 255, 0.2);
  transform: scale(1.05) rotateY(20deg);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  outline: none;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #3b8df2;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: rotateX(-10deg);
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

button:hover {
  background-color: #0077be;
  font-size: 17px;
  transform: scale(1.05) rotateY(20deg) rotateX(10deg);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
} */

</style>