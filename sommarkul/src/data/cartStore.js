import { create } from 'zustand';

const saveInCartStore = create((set) => ({
  items: [],
  totalPrice: 0, // Separat variabel för totalpriset
// använder paseFloat då jag har lagt in det som en sträng i firebase! 

  addToCart: (item) => {
    set((state) => {
      console.log("Läggs till i kundvagnen:", item);
      const updatedTotalPrice = state.totalPrice + parseFloat(item.price);

      return { 
        items: [...state.items, item],
        totalPrice: updatedTotalPrice,
      };
    });
  },

  removeFromCart: (itemId) => {
    set((state) => {
      const itemToRemove = state.items.find(item => item.id === itemId);
      if (!itemToRemove) return state;

      const updatedTotalPrice = state.totalPrice - itemToRemove.price;
      const updatedItems = state.items.filter(item => item.id !== itemId);
      return { 
        items: updatedItems,
        totalPrice: updatedTotalPrice,
      };
    });
  },
}));

export default saveInCartStore;

