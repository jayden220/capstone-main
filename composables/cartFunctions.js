import { ref } from 'vue';
const cart = ref([]);
export function useCart() {
  const addToCart = (product) => {
    const productInCart = cart.value.find((item) => item.productID === product.productID);
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };
  const removeFromCart = (product) => {
    cart.value = cart.value.filter((item) => item.productID !== product.productID);
  };
  return {
    cart,
    addToCart,
    removeFromCart,
  };
}