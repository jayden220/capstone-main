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
        const { result, msg } = await (await axios.get(`${'apiUrl'}user/${id}`)).data
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
    async addUser({ dispatch }, payload) {
      try {
        const { msg, err, token } = await (await axios.post(`https://capstone-main-1.onrender.com/user/register`, payload)).data
        if (token) {
          dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          })
          router.push({ name: 'login' })
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        console.error("Registration error:", e.response ? e.response.data : e.message);
        toast.error(`${e.response ? e.response.data.err : e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.TOP_CENTER
        });
      }
    },
    async updateUser(info, payload) {
      try {
        const { msg, err } = await (await axios.patch(`${'https://capstone-main-1.onrender.com'}user/${payload.userID}`, payload)).data
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
        const { msg, err } = await (await axios.delete(`${'https://capstone-main-1.onrender.com'}user/${id}`)).data
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
    
    // async fetchProducts(info) {
    //   try {
    //     const { results } = await (await axios.get(`${apiUrl}/product`)).data
    //     if (results) {
    //       info.commit('getProducts', results)
    //       console.log('if no products render issue')
    //     } else {
    //       // router.push({ name: 'login' })
    //       console.log('LOginin')
    //     }
    //   } catch (error) {
    //     console.error('Error fetching items:', error)
    //   }
    // },
 
 
    async fetchProduct(info, id) {
      try {
        const { result, msg } = await (await axios.get(`${'https://capstone-main-1.onrender.com'}product/${id}`)).data
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
        const { msg } = await (await axios.post(`${'https://capstone-main-1.onrender.com'}product/add`, payload)).data
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
        
        const { msg } = await (await axios.patch(`${'https://capstone-main-1.onrender.com'}product/${payload.prodID}`, payload)).data
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
        
        const { msg } = await (await axios.delete(`${'https://capstone-main-1.onrender.com'}product/${id}`)).data
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
    async loginUser({ commit }, payload) {
      try {
        const response = await axios.post(`${apiUrl}/user/login`, payload);
        const data = response.data;
        if (data.token) {
          cookies.set('token', data.token);
          toast.success("Logged In Successfully", {
            autoClose: 2000,
            position: toast.POSITION.TOP_CENTER
          });
          // Redirect user after successful login
          router.push({ name: 'home' }); // Change 'home' to your desired route
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
    }


  },

  
  modules: {
    
  }
})

