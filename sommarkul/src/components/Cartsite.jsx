import React from 'react';
import saveInCartStore from '../data/cartStore';

const Cart = () => {
  const items = saveInCartStore((state) => state.items);

  return (
    <div>
      <h2>Kundvagnen</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <CartCounter />
    </div>
  );
};

const CartCounter = () => {
  // Hämta antalet varor från storage 
  const itemCount = saveInCartStore(state => state.items.length);

  return (
    <div className="cart-counter">
      <span>{itemCount}</span>
    </div>
  );
};

export {Cart, CartCounter}
