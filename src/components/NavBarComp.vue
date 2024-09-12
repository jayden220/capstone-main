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
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/signup">Register</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/profile">icon</router-link>
                        </li>
                        <li class="nav-item">
                            <button @click="$store.dispatch('logout')">Logout</button>
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
    color: #e8a64f;
    transition: color 0.3s ease, background-color 0.3s linear; 
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link:focus {
    color: #ffffff; 
    background-color: maroon;
    border-radius: 0.25rem; 
    
    
}

/* Styles for the login and register links */
.userAccount .nav-link {
    color: #007bff; /* Primary color for login/register links */
}

.userAccount .nav-link:hover,
.userAccount .nav-link:focus {
    color: #0056b3; /* Darker primary color on hover */
    text-decoration: underline; /* Underline on hover */
}

/* Styling for the navbar toggler */
.navbar-toggler {
    border-color: #007bff; /* Border color for the toggler */
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16m-7 6h7' /%3e%3c/svg%3e");
}

/* Styles for active or current page link */
.navbar-nav .nav-link.active {
    color: #c15144;
    font-weight: bold; 
    /* background-color: #575149; */
}

</style>