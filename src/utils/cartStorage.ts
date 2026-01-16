
export interface CartItem {
    id: number; // specific instance id
    productId: number; // reference to master product
    title: string;
    price: number;
    image: string;
    size: string;
    color: string;
    quantity: number;
}

const CART_KEY = 'luga_nepal_cart';

export const getCart = (): CartItem[] => {
    try {
        const cart = localStorage.getItem(CART_KEY);
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        console.error("Failed to fetch cart:", error);
        return [];
    }
};

export const addToCart = (item: Omit<CartItem, 'id'>) => {
    const cart = getCart();
    // Check if same product variant exists
    const existingItemIndex = cart.findIndex(
        (i) => i.productId === item.productId && i.size === item.size && i.color === item.color
    );

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        cart.push({ ...item, id: Date.now() });
    }
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
};

export const removeFromCart = (itemId: number) => {
    const cart = getCart();
    const updatedCart = cart.filter((i) => i.id !== itemId);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
};

export const updateQuantity = (itemId: number, quantity: number) => {
  if (quantity < 1) return;
  const cart = getCart();
  const item = cart.find(i => i.id === itemId);
  if (item) {
    item.quantity = quantity;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  }
}

export const clearCart = () => {
    localStorage.removeItem(CART_KEY);
    window.dispatchEvent(new Event("cartUpdated"));
};
