import { create } from 'zustand';
// Ta ut priset enskilt och calculera ihop dom
//lägg till i CheckoutCart


// storage för det inlagda produkter i kundvagnen
const saveInCartStore = create((set) => ({
	items: [],
	
	addToCart: (item) => {
		set((state) => {
			console.log("Läggs till i kundvagnen:", item); 
			return { items: [...state.items, item] };
		});
	},
	
}));
export default saveInCartStore