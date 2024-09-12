
<template>

  <h3>Admin Panel</h3>

  <!-- Product Table -->
  <h4>Products</h4>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addProductModal">
    Add Product
  </button>

  <table class="table">
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

  <!-- User Table -->
  <h4>Users</h4>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addUserModal">
    Add User
  </button>

  <table class="table">
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

 

 





</template>

<script>
</script>