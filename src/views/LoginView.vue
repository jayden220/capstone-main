<template>
  <div>
    <h1>dee</h1>
    
  </div>
</template>


<!-- <template>
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
  /* background-color: black; */
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
</style> -->