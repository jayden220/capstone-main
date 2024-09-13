import { ref } from 'vue';


const cart = ref(JSON.parse(localStorage.getItem('cart')) || []);

export function useCart() {
  const saveCartToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart.value));
  };

  const addToCart = (product) => {
    const productInCart = cart.value.find((item) => item.productID === product.productID);
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
    saveCartToLocalStorage();
  };

  const removeFromCart = (productID) => {
    const product = cart.value.find((item) => item.productID === productID);
    if (product) {
      const index = cart.value.indexOf(product);
      if (index !== -1) {
        cart.value.splice(index, 1);
        cart.value = [...cart.value];
        saveCartToLocalStorage();
        console.log('trying to remove');
      }
    }
  };

  return {
    cart,
    addToCart,
    removeFromCart,
  };
}
