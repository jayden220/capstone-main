<template>
  <div>
    <h3 class="text-center">Admin Panel</h3>

    <!-- Add Product Button -->
    <div class="text-center mb-4">
      <button type="button" class="cssbuttons-io-button" data-toggle="modal" data-target="#AddProductModal">
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
        </svg>
        <span>Add Product</span>
      </button>
    </div>

    <!-- Product Table -->
    <h4 class="text-center">Products</h4>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Weight</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.productID">
            <td>{{ product.productName }}</td>
            <td>{{ product.productDes }}</td>
            <td>{{ product.weight }}</td>
            <td>
              <button @click="openEditProductModal(product)" class="btn btn-warning">Edit</button>
              <button @click="deleteProduct(product.productID)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add User Button -->
    <div class="text-center mt-5 mb-4">
      <button class="cssbuttons-io-button" type="button" data-toggle="modal" data-target="#AddUserModal">
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
        </svg>
        <span>Add User</span>
      </button>
    </div>

    <!-- User Table -->
    <h4 class="text-center">Users</h4>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.userName }}</td>
            <td>{{ user.userEmail }}</td>
            <td>{{ user.userRole }}</td>
            <td>
              <button @click="openEditUserModal(user)" class="btn btn-warning">Edit</button>
              <button @click="deleteUser(user.userID)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      users: [],
      newProduct: {
        productName: '',
        productPrice: '',
        productDes: '',
        productUrl: '',
        weight: ''
      },
      editProduct: {},
      newUser: {
        userName: '',
        userEmail: '',
        userCell: '',
        userPass: '',
        userProfile: '',
        userRole: ''
      },
      editUser: {},
      loading: false,
      error: '',
    };
  },
  methods: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await axios.get('https://capstone-main-1.onrender.com/product');
        this.products = response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async fetchUsers() {
      this.loading = true;
      try {
        const response = await axios.get('https://capstone-main-1.onrender.com/user');
        this.users = response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async addProduct() {
      try {
        await this.$store.dispatch('addAProduct', this.newProduct);
        this.newProduct = {}; // Reset form
        this.fetchProducts(); // Refresh product list
      } catch (error) {
        this.error = error.message;
      }
    },
    async handleUpdateProduct() {
      try {
        await this.$store.dispatch('updateProduct', this.editProduct);
        this.editProduct = {}; // Reset form
        this.fetchProducts(); // Refresh product list
      } catch (error) {
        this.error = error.message;
      }
    },
    async deleteProduct(productID) {
      try {
        await this.$store.dispatch('deleteProduct', productID);
        this.fetchProducts(); // Refresh product list
        
      } catch (error) {
        this.error = error.message;
      }
    },
    async handleAddUser() {
      try {
        await this.$store.dispatch('addUser', this.newUser);
        this.newUser = {}; // Reset form
        this.fetchUsers(); // Refresh user list
      } catch (error) {
        this.error = error.message;
      }
    },
    async handleUpdateUser() {
      try {
        await this.$store.dispatch('updateUser', this.editUser);
        this.editUser = {}; // Reset form
        this.fetchUsers(); // Refresh user list
      } catch (error) {
        this.error = error.message;
      }
    },
    async deleteUser(userID) {
      try {
        await this.$store.dispatch('deleteUser', userID);
        this.fetchUsers(); // Refresh user list
      } catch (error) {
        this.error = error.message;
      }
    },
    openEditProductModal(product) {
    this.editProduct = { ...product };
    this.$refs.editProductModal.show();
  },
  openEditUserModal(user) {
    this.editUser = { ...user };
    this.$refs.editUserModal.show();
  },
  },
  created() {
    this.fetchProducts();
    this.fetchUsers();
  },
};
</script>

<style scoped>
/* From Uiverse.io by adamgiebl */ 
.cssbuttons-io-button {
  display: flex;
  align-items: center;
  font-family: inherit;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  padding: 0.7em 1.4em 0.7em 1.1em;
  color: white;
  background: #ad5389;
  background: linear-gradient(
    0deg,
    rgba(20, 167, 62, 1) 0%,
    rgba(102, 247, 113, 1) 100%
  );
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
  letter-spacing: 0.05em;
  border-radius: 20em;
}

.cssbuttons-io-button svg {
  margin-right: 6px;
}

.cssbuttons-io-button:hover {
  box-shadow: 0 0.5em 1.5em -0.5em #14a73e98;
}

.cssbuttons-io-button:active {
  box-shadow: 0 0.3em 1em -0.5em #14a73e98;
}
.text-center {
  text-align: center;
}

.table-responsive {
  width: 100%;
  overflow-x: auto;
}

@media (max-width: 768px) {
  .table {
    font-size: 14px;
  }

  .cssbuttons-io-button {
    padding: 0.6em 1.2em;
    font-size: 14px;
  }
  
}

/* For small screens like 320px */
@media (max-width: 576px) {
  /* Ensure table responsiveness with scroll */
  .table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
  }

  .table thead {
    display: none; /* Hide table headers for smaller screens */
  }

  .table tbody tr {
    display: block;
    margin-bottom: 15px;
    border-bottom: 2px solid #ddd; /* Optional: Add some styling for separation */
  }

  .table tbody tr td {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 14px; /* Reduce font size */
  }

  /* Add a pseudo-element for table labels, matching the column headers */
  .table tbody tr td::before {
    content: attr(data-label);
    font-weight: bold;
    width: 45%; /* Adjust this to your liking */
  }
}

/* General responsive adjustments for buttons and tables */
.table-responsive {
  width: 100%;
  overflow-x: auto;
}

.cssbuttons-io-button {
  padding: 0.6em 1.2em;
  font-size: 14px;
}


</style>
