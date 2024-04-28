import React from "react";
import saveInCartStore from "../data/cartStore"; 


const CheckoutCart = () => {
  const items = saveInCartStore(state => state.items); // Hämta varorna från kundvagnen från Zustand

  return (
    <div className="All-items-in-cart">
      <h2>Kundvagnen</h2>
      <ul>
        
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default CheckoutCart;