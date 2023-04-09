import { getShoppingCart } from "../utilities/fakedb";

const productsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  const storeCart = getShoppingCart();
  const saveCart = [];
  for (const id in storeCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storeCart[id];
      addedProduct.quantity = quantity;
      saveCart.push(addedProduct);
    }
  }
  return saveCart;
};
export default productsLoader;
