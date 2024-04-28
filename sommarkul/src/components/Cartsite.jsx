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
  // Hämta antalet varor från storage, när det är 0 så syns inget!
  const itemCount = saveInCartStore(state => state.items.length);

  return (
    <div className="cart-counter">
     {itemCount > 0 && <span>{itemCount}</span>}
    </div>
  );
};

export {Cart, CartCounter}
