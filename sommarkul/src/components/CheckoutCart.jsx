import React from "react";
import saveInCartStore from "../data/cartStore"; 
import { useNavigate } from 'react-router-dom';
// få ut informationen från items
// kunna ta bort artiklar, lägga till och minska.
// total beloppet + antal artiklar
// lägga till formulär+ validering
//Betala knappen

const CheckoutCart = () => {
	console.log('CheckoutCart komponenten renderas');
  const items = saveInCartStore(state => state.items); // Hämta varorna från kundvagnen från Zustand cartStore.js
 
const navigate = useNavigate();
  

  const backtomenybtn = () =>{
	navigate('/');
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
          <div className="items-div" key={index}>{item.name}</div>
		  
        ))}
		<p> totala priset:</p>
      </div>
      
    </div>

	</>
  );
};

export default CheckoutCart;