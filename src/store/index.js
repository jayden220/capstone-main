/* eslint-disable */
import { createStore } from 'vuex'
import { toast } from 'vue3-toastify'
import router from '@/router'
import 'vue3-toastify/dist/index.css'
import axios from 'axios'
import {useCookies} from 'vue-cookies'


axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = `Bearer ${$cookies.get('token')}`;
// const { cookies } = useCookies()
const apiUrl = 'https://capstone-main-1.onrender.com'

export default createStore({
  state: {
    users: [],
    user: null,
    products: [],
    recentProducts: [],
    product: {},
    cart: []
  },
  getters: {
    singleProduct:(state)=>state.product,
    singleProduct: (state) => state.product,
    cartItems: (state) => state.cart, // Get cart items from the state
    cartTotal: (state) => {
        return state.cart.reduce((total, item) => total + (item.productPrice * item.quantity), 0);
    
  },
  isLoggedIn(state) {
    return state.user !== null;
  }
},
  mutations: {
    getUser(state,payload){
      state.user = payload
    },
    getUsers(state,payload){
      state.users = payload
    },
    setUser(state, user){
      state.user = user
    },
    getProduct(state,payload){
      state.product = payload
    },
    getRecentProducts(state,payload){
      state.recentProducts = payload
    },
    getProducts(state,payload){
      state.products = payload
    },
    addProduct(state,newProduct){
      console.log('Add product mutation called!');
      state.products.push(newProduct)
    }
  },
  actions: {

    async fetchUser(info, id) {
      try {
        const { result, msg } = await (await axios.get(`https://capstone-main-1.onrender.com/user/${id}`)).data
        if (result) {
          info.commit('getUser', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },


    async fetchUsers(info) {
      try {
        const { results, msg } = await (await axios.get(`https://capstone-main-1.onrender.com/user`)).data
        if (results) {
          info.commit('getUsers', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
  
    async addUser({ commit }, user) {
      try {
        const response = await axios.post(`https://capstone-main-1.onrender.com/user/register`, user)
        const { data } = response
        console.log('newdata', data) // log the entire data object to see what's being returned
        if (data && data.message) { // check if data is not null and data.message is truthy
          toast.success("User Added Successfully", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
          console.log(data);
          
        } else {
          console.log('No message returned from API') // log a message if data.message is empty or null
        }
      } catch (error) {
        console.log(error)
      }
    },
    async updateUser(info, payload) {
      try {
        const { msg, err } = await (await axios.patch(`https://capstone-main-1.onrender.com/user/${payload.userID}`, payload)).data
        if (msg) {
          info.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION._CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },
    async deleteUser(info, id) {
      try {
        const { msg, err } = await (await axios.delete(`https://capstone-main-1.onrender.com/user/${id}`)).data
        if (msg) {
          info.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        })
      }
    },

    async fetchProducts(info) {
      try {
        const response = await axios.get('https://capstone-main-1.onrender.com/product');
        console.log('API Response:', response.data); // Log the entire response
        const { results } = response.data;
        if (results) {
          info.commit('getProducts', results);
        } else {
          // router.push({ name: 'login' });
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    

 
 
    async fetchProduct(info, id) {
      try {
        const { result, msg } = await (await axios.get(`https://capstone-main-1.onrender.com/product/${id}`)).data
        if (result) {
          info.commit('getProduct', result)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (error) {
        console.error('Error fetching items:', error)
      }
    },
    async addAProduct({ dispatch }, payload) {

      try {
        const { msg } = await (await axios.post(`https://capstone-main-1.onrender.com/product/addProduct`, payload)).data
        if (msg) {
          dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (error) {
        console.error('Error fetching items:', error)
      }
    },
    async updateProduct(info, payload) {
      try {
        console.log(payload);
        
        const { msg } = await (await axios.patch(`https://capstone-main-1.onrender.com/product/${payload.prodID}`, payload)).data
        if (msg) {
          info.dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (error) {
        console.error('Error updating items:', error)
      }
    },
    async deleteProduct(info, id) {
      try {
        console.log('here');
        
        const { msg } = await (await axios.delete(`https://capstone-main-1.onrender.com/product/${id}`)).data
        if (msg) {
          info.dispatch('fetchProducts')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (error) {
        console.error('Error deleting product', error)
      }
    },
    // async loginUser({ commit }, payload) {
    //   try {
    //     const response = await axios.post(`https://capstone-main-1.onrender.com/user/login`, payload);
    //     const data = response.data;
    //     if (data.token) {
    //       cookies.set('token', data.token);
    //       toast.success("Logged In Successfully", {
    //         autoClose: 2000,
    //         position: toast.POSITION.TOP_CENTER
    //       });
    //       // Redirect user after successful login
    //       router.push({ name: 'home' }); // Change 'home' to your desired route
    //     } else {
    //       toast.error(data.message, {
    //         autoClose: 2000,
    //         position: toast.POSITION.TOP_CENTER
    //       });
    //     }
    //   } catch (error) {
    //     toast.error(error.message, {
    //       autoClose: 2000,
    //       position: toast.POSITION.TOP_CENTER
    //     });
    //   }
    // },
    // Local variable to track logout status

    async logout({ commit }) {
      let hasLoggedOut = false; 
      try {
        // Check if the user has already logged out
        if (hasLoggedOut) {
          toast.info("User is already logged out", {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          });
          return;
        }
    
        // Remove the token from the cookies
        $cookies.remove('token');
    
        // Clear the user data from the state
        commit('setUser', null);
    
        // Redirect the user to the login page
        router.push({ name: 'login' });
    
        // Set the flag to indicate the user has logged out
        hasLoggedOut = true;
    
        // Show the success toast notification
        toast.success("Logged out successfully", {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        });
      } catch (error) {
        toast.error(error.message, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        });
      }
    },
    
  
    async loginUser({ commit }, info) {
      console.log(info);
      let { data } = await axios.post(`https://capstone-main-1.onrender.com/user/login`, info);
      console.log(data);
      $cookies.set('token', data.token);
      if (data.message) {
        toast("Logged In Successfully", {
          "theme": "dark",
          "type": "default",
          "position": "top-center",
          "dangerouslyHTMLString": true
        });
      }
    }


  },

  
  modules: {
    
  }
})

