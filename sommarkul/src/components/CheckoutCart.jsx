import React from "react";
import saveInCartStore from "../data/cartStore"; 


const CheckoutCart = () => {
  const items = saveInCartStore(state => state.items); // Hämta varorna från kundvagnen från Zustand

  return (
    <div className="product-in-cart">
      <h2>Kundvagnen</h2>
      <ul>
        
        {items.map((item, index) => (
          <div className="items-div" key={index}>{item.name}</div>
        ))}
      </ul>
      
    </div>
  );
};

export default CheckoutCart;