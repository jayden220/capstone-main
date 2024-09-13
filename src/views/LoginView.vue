  <template>
    <div class="login-container">
      <form class="form" @submit.prevent="loginUser()">
        <p class="title">Welcome back</p>
        <p class="message">Log in to purchase your favorite snax</p>
        <label>
          <input class="input" type="email" placeholder="" required v-model="userEmail">
          <span>Email</span>
        </label>
        <label>
          <input class="input" type="password" placeholder="" required v-model="userPass">
          <span>Password</span>
        </label>
        <p class="page-link">
          <span class="page-link-label">Forgot Password?</span>
        </p>
        <button  class="submit">Log in</button>
        <p class="signin">Don't have an account? <a href="/signup">Sign up</a></p>
      </form>
    </div>
  </template>


  <script>
  // import axios from 'axios'
  export default {
    name: "loginView",
    data(){
      return{
        userEmail: '',
        userPass:''
      }
    },

    methods:{
      // async loginUser(){
      //   const response = await axios.post('login',{
      //     userEmail : this.userEmail,
      //     userPass : this.userPass
      //   })
      //   console.log(response);
        
      

      async loginUser() {
          if (!this.userEmail || !this.userPass) {
            console.log('Please fill in all fields');
            return;
          }
          try {
            await this.$store.dispatch('loginUser', {
              userEmail: this.userEmail,
              userPass: this.userPass
            });
            this.$router.push('/');
          } catch (error) {
            console.error('Login failed:', error);
          }
        }
    }
    
  }
  </script>

<style scoped>
.wrapper{
  background: #000;
}
.login-container{
  background-image: url('https://jayden220.github.io/hostedImages/images/Design%20exquisit%2088b6f594-c356-4e97-99ba-4ddffd6a3080.png');
  background-repeat: no-repeat;
  background-size: cover;
  /* background: #000; */
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  background-color: #1a0000;
  color: #fff;
  border: 1px solid #333;
  margin: 5em auto;
  font-family: 'Times New Roman', serif;
  text-align: center;
  
  /* margin-top: 3em; */
  /* margin-bottom: 10em; */
}

.title {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #ffffff;
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

.signin a {
  color: #00bfff;
}

.signin a:hover {
  text-decoration: underline;
}

.form label {
  position: relative;
}

.input {
  background-color: #333;
  color: #fff;
  width: 100%;
  padding: 20px 05px 05px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.input + span {
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.input:placeholder-shown + span {
  top: 12.5px;
  font-size: 0.9em;
}

.input:focus + span,
.input:valid + span {
  color: #00bfff;
  top: 0px;
  font-size: 0.7em;
  font-weight: 600;
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

.page-link {
  text-decoration: underline;
  margin: 0;
  text-align: end;
  color: #747474;
}

.page-link-label {
  cursor: pointer;
  font-size: 9px;
  font-weight: 700;
}

.page-link-label:hover {
  color: #000;
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
