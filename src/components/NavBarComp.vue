<template>
    <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary sticky-top" data-bs-theme="dark">
        <div class="container-fluid">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/products">Products</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/checkout">Checkout</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/admin">Admin</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact us</router-link>
                    </li>
                    <ul class="userAccount navbar-nav">
                        <button>
                            <li class="nav-item">
                            <router-link class="nav-link" to="/login">Login</router-link>
                        </li>
                        </button>
                        
                        <button>
                            <li class="nav-item">
                            <router-link class="nav-link" to="/signup">Register</router-link>
                        </li>
                        </button>
                        
                        <li class="nav-item">
                            <button @click="$store.dispatch('logout')" class="logout">Logout</button>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default{
    name: 'NavBarComp'
}
</script>
<style>

.navbar-nav .nav-link {
    color: #bbaa93;
    transition: color 0.3s ease, background-color 0.3s linear; 
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link:focus {
    color: #ffffff; 
    text-decoration: underline;
    text-decoration-color: #d97b70;
    border-radius: 0.25rem; 
    
    
}
button,
button:focus {
  font-size: 17px;

  border-radius: 0.7rem;
  background-image: linear-gradient(rgb(214, 202, 254), rgb(158, 129, 254));
  border: 2px solid rgb(50, 50, 50);
  border-bottom: 5px solid rgb(50, 50, 50);
  box-shadow: 0px 1px 6px 0px rgb(158, 129, 254);
  transform: translate(0, -3px);
  cursor: pointer;
  transition: 0.2s;
  transition-timing-function: linear;
  margin: 0 .5em;
}

button:active {
  transform: translate(0, 0);
  border-bottom: 2px solid rgb(50, 50, 50);
}


.userAccount .nav-link {
    color: #007bff; 
}

.userAccount .nav-link:hover,
.userAccount .nav-link:focus {
    color: #f1f2f4; 
    
}


.navbar-toggler {
    border-color: #ffffff; 
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16m-7 6h7' /%3e%3c/svg%3e");
}


.navbar-nav .nav-link.active {
    color: #c15144;
    font-weight: bold; 
 
}

</style>