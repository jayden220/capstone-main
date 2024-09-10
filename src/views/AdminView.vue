<template>
  <h3>Admin</h3>
  <!-- user table -->
   <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Edit Users
</button>
<!-- User Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" placeholder="username">
        <input type="text" placeholder="cellphone">
        <input type="text" placeholder="email">
        <input type="text" placeholder="user role">
        <input type="text" placeholder="user profile">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  <!-- <button type="button" @click.prevent="updateUser(JSON.stringify(user.userID))">Save changes</button> -->
</template>

<script>
export default {
 name: 'adminView',
  components: {

  },
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      priceSortOrder: 'asc',

      payload: {
        productName: "",
        productDes: "",
        weight: 0,
        productUrl: "",
      },
      
      userPayload: {
        userName: "",
        userCell:"",
        userRole: "",
        userEmail: "",
        userProfile: "",
        userPass: "",
      },
      categories: [],
    };
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    searchedProducts(){
      this.filteredProducts = this.products.filter(product => product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase()));
      this.filterProducts();
    },
    filteredProducts() {
      let filtered = this.products;
      if (this.searchQuery) {
        filtered = filtered.filter(product =>
          product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      if (this.selectedCategory) {
        filtered = filtered.filter(product =>
          product.category === this.selectedCategory
        );
      }

      if (this.priceSortOrder) {
        filtered = filtered.slice().sort((a, b) => {
          return this.priceSortOrder === 'asc'
            ? a.amount - b.amount
            : b.amount - a.amount;
        });
      }

      return filtered;
    },
    sortProducts(propertyName) {
      this.filteredProducts = this.filteredProducts.slice().sort((a, b) => {
        if (this.priceSortOrder === 'asc') {
          return a[propertyName] - b[propertyName];
        } else {
          return b[propertyName] - a[propertyName];
        }
      });
    },
    addProduct() {
      console.log("added");
      this.$store.dispatch("addAProduct", this.payload).then(() => {
        console.log("Product added to store!");
        // this.resetPayload();
      });
    },

    updateProduct(id) {
      const productPayload = {
        prodID: JSON.parse(id),
        ...this.payload,
      };
      this.$store.dispatch("updateProduct", productPayload).then(() => {
        console.log("Product updated in store!");
        location.reload();
      });

    },
    deleteProduct(prodID) {
      this.$store.dispatch("deleteProduct", prodID).then(() => {
        console.log("Product deleted from store!");
      });
    },
    addUser() {
      this.$store
        .dispatch("addUser", this.userPayload)
        .then(() => {
          console.log("User added to store!");
          // this.resetPayload();
        })
        .catch((error) => {
          console.error("Error adding user", error);
        });
    },
    updateUser(id) {
      const userPayload = {
        userID: JSON.parse(id),
        ...this.userPayload,
      };
      this.$store.dispatch("updateUser", userPayload).then(() => {
        console.log("User updated");
        location.reload();
      });
    },
    deleteUser(userID) {
      this.$store.dispatch("deleteUser", userID).then(() => {
        console.log("User deleted from store!");
      });
    },
    async submitUpdateForm() {
      this.errors = {};
      for (const [key, value] of Object.entries(this.userPayload)) {
        if (!value) {
          this.errors[key] = `${key} is required`;
        }
      }
      if (Object.keys(this.errors).length === 0) {
        await this.$store.dispatch("updateUser", {
          userID: this.userId,
          ...this.userPayload,
        });
      } else {
        console.log(this.errors);
      }
    },
    async submitProductForm() {
      this.errors = {};
      for (const [key, value] of Object.entries(this.productPayload)) {
        if (!value) {
          this.errors[key] = `${key} is required`;
        }
      }
      if (Object.keys(this.errors).length === 0) {
        await this.$store.dispatch("addAProduct", this.productPayload);
        this.productPayload = {
          name: "",
          price: "",
          category: "",
          description: "",
        };
      } else {
        console.log(this.errors); // Handle errors appropriately
      }
    },
  },
  searchedProducts() {
    if (!this.searchQuery) return this.products;
    return this.products.filter(product => {
      const productName = product.prodName.toLowerCase();
      const searchQuery = this.searchQuery.toLowerCase();
      return productName.includes(searchQuery);
    });
  },
};
</script>


<style>

</style>