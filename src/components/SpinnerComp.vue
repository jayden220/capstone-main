<template>

    <div class="spinner-container">
      <img src="https://jayden220.github.io/hostedImages/images/chess-10327_256.gif" alt="Loading..." class="spinner-image" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'SpinnerComp',
    data() {
        return{
            loading: true
        }
    },
    mounted() {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
    // props: {
    //   loading: {
    //     type: Boolean,
    //     default: false,
    //   },
    // },
  };
  </script>
  
  <style>
  .spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
  
    background-image: url('https://jayden220.github.io/hostedImages/images/e22f1762-af26-4217-a00c-c8869258446d.png');
    z-index: 9999;
  }
  
  /* .spinner-image {
    width: 100px;
    height: 100px;
    animation: spin 1.5s linear infinite;
  } */
  
  /* @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } */
  </style>
  