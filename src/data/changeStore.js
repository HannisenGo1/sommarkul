import { create } from 'zustand';

const ProductStore = create((set) => ({
	products: [],

	setProducts: (newProducts) =>
		set((state) => ({
			products: newProducts
		})),

		// för att lägga till ny produkt 
	addProduct: (product) =>
		set((state) => ({
			products: [ ...state.products, product ]
		}))
}));

export { ProductStore };