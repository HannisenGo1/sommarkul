import { create } from 'zustand';

const saveInCartStore = create((set) => ({
  items: [],
  totalPrice: 0,
  totalItems: 0,

  addToCart: (item) => {
    const newItem = { ...item, quantity: 1 };
    set((state) => ({
      ...state,
      items: [...state.items, newItem],
      totalPrice: state.totalPrice + parseFloat(item.price),
      totalItems: state.totalItems + 1,
    }));
  },

  updateItemQuantity: (itemKey, quantityChange) => {
    set((state) => {
      const updatedItems = state.items.map((item) => {
        if (item.key === itemKey) {
          const newQuantity = Math.max(item.quantity + quantityChange, 0);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });

      return { ...state, items: updatedItems };
    });
  },

  calculateTotalPrice: () => {
    set((state) => {
      const totalPrice = state.items.reduce((total, item) => {
        return total + parseFloat(item.price) * item.quantity;
      }, 0);
      return { ...state, totalPrice };
    });
  },

  removeFromCheckout: (key) => set((state) => {
    const updatedItems = state.items.map((item) => {
      if (item.key === key && item.quantity > 1){
        return {...item, quantity:item.quantity - 1}
      } else {
        return item;
      }
    });
    return { ...state, items: updatedItems };
  }),

  deleteFromCheckout: (key) => set((state) => {
    const updatedItems = state.items.filter((item) => item.key !== key);
    return { ...state, items: updatedItems };
  })
}));

export {saveInCartStore}
