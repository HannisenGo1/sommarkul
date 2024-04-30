import React from "react";
import saveInCartStore from "../data/cartStore"; 
import { useNavigate } from 'react-router-dom';
import FormPayment from "./FormPayment";


const CheckoutCart = () => {
	console.log('CheckoutCart komponenten renderas');
  const items = saveInCartStore(state => state.items); 
 const totalPrice = saveInCartStore(state => state.totalPrice);
const navigate = useNavigate();
  

  const backtomenybtn = () =>{
	navigate('/');
  }
  const handleAddToCart = (item) => {
    saveInCartStore.addToCart(item);
    saveInCartStore.calculateCheckoutTotal(); // Uppdatera det totala priset
  }

  const handleRemoveFromCart = (id) => {
    saveInCartStore.removeFromCheckout(id);
    saveInCartStore.calculateCheckoutTotal(); // Uppdatera det totala priset
  }

  return (
	<>
<div className="back-btn-cart"> 
<button className="back-from-cart" onClick={backtomenybtn} >Fortsätt handla </button>
</div>
    <div className="product-in-cart">
      <h2>Kundvagnen</h2>
      <div className="artiklar-in-cart">
        
        {items.map((item, index) => (
          <div className="items-div" key={index}>
			<p> {item.name}</p>
		<img src={item.imgurl} alt={item.name} 
			className="productImage" />
			
			
         
		  
		  
		  </div>
		  
        ))}<p>Antal artiklar: {items.length}</p>
		<p> Totala priset:{totalPrice}</p>
      </div>
    
    </div>
<FormPayment/>
	</>
  );
};

export default CheckoutCart;