<template>
  <div class="user-view" v-if="user in users" :key="userID">
    <h3>Welcome, {{ user.userName }}!</h3>
    <p>Account Information:</p>
    <ul>
      <li>Email: {{ user.userEmail }}</li>
    </ul>
    <button :disabled="loading" @click="logout">
      <span v-if="loading">Logging out...</span>
      <span v-else>Logout</span>
    </button>
  </div>
  <div v-else>
    <p>Loading user information...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "userView",
  data() {
    return {
      loading: false
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    logout() {
      this.loading = true;
      this.$store.dispatch("logout").finally(() => {
        this.loading = false;
      });
    },
    async fetchUser(userID) {
      this.loading = true;
      try {
        const response = await axios.get(`https://capstone-main-1.onrender.com/user/${userID}`);
        console.log('API response:', response);
        this.user = response.data;
      } catch (error) {
        console.error('Error fetching User Data:', error);
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  }
};
</script>


<style scoped>
.user-view {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 10px;
}

button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #3e8e41;
}
</style>