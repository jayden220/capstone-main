<template>
    <div class="spinner-container" v-if="loading">
      <img src="https://jayden220.github.io/hostedImages/images/chess-10327_256.gif" alt="Loading..." class="spinner-image" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
    },
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
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 9999;
  }
  
  .spinner-image {
    width: 100px;
    height: 100px;
    animation: spin 1.5s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  