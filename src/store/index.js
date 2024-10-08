/* eslint-disable */
import { createStore } from 'vuex'
import { toast } from 'vue3-toastify'    
import router from '@/router'
import 'vue3-toastify/dist/index.css'
import axios from 'axios'
// import {useCookies} from 'vue-cookies'


// axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.get('token')}`;
// const { cookies } = useCookies()
// useCookies()
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
    cartItems: (state) => state.cart, 
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
    setUsers(state, users){
      state.users = users
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
        const { result, msg } = await (await axios.get(`https://capstone-main-1.onrender.com/user/singleUser/${id}`)).data
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
        console.log('newdata', data)
        if (data && data.message) { 
          toast.success("User Added Successfully", {
            theme: "dark",
            type: "default",
            position: "top-center",
            dangerouslyHTMLString: true
          })
          console.log(data);
          
        } else {
          console.log('No message returned from API') 
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
        const { msg, err } = await (await axios.delete(`https://capstone-main-1.onrender.com/user/${id}`)).data;
        if (msg) {
          info.dispatch('fetchUsers');
          toast.success('User deleted successfully', {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          });
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        });
      }
    },

    async fetchProducts(info) {
      try {
        const response = await axios.get('https://capstone-main-1.onrender.com/product');
        console.log('API Response:', response.data); 
        const { results } = response.data;
        if (results) {
          info.commit('getProducts', results);
        } else {
          router.push({ name: 'login' });
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
          alert('user deleted')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
        }
      } catch (error) {
        console.error('Error deleting product', error)
      }
    },
    async loginUser({ commit }, payload) {
      try {
        const response = await axios.post(`https://capstone-main-1.onrender.com/user/login`, payload);
        const data = response.data;
        if (data.token) {
          cookies.set('token', data.token);
          toast.success("Logged In Successfully", {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          });
          router.push({ name: 'home' }); 
        } else {
          toast.error(data.message, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          });
        }
      } catch (error) {
        toast.error(error.message, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        });
      }
    },

    async logout({ commit }) {
      let hasLoggedOut = false; 
      try {
        if (hasLoggedOut) {
          toast.info("User is already logged out", {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          });
          return;
        }
        $cookies.remove('token');
        commit('setUser', null);
        router.push({ name: 'login' });
        hasLoggedOut = true;
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
  },  
  modules: {
    
  }
})

