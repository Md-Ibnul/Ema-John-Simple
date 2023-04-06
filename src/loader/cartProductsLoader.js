import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
    const loadProducts  = await fetch('products.json');
    const products = await loadProducts.json();

    // if cart data in database, you have to use async await

    const storeCart = getShoppingCart();
    const savedCart = [];
    for(const id in storeCart){
        const addProduct = products.find(pd => pd.id === id);
        if (addProduct){
            const quantity = storeCart[id];
            addProduct.quantity = quantity;
            savedCart.push(addProduct);
        }
    }
    return savedCart;
}

export default cartProductLoader;