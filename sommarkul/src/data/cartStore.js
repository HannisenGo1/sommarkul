import { create } from 'zustand';


const saveInCartStore = create((set) => ({
  items: [],

  addToCart: (item) => {
    set((state) => {
      console.log("Lägger till i kundvagnen:", item); // console.log här
      return { items: [...state.items, item] };
    });
  },
}));
export default saveInCartStore