import React from 'react';
import saveInCartStore from '../data/cartStore';


const CartCounter = () => {
  // Hämta antalet varor från storage, när det är 0 så syns inget!
  const itemCount = saveInCartStore(state => state.items.length);

  return (
    <div className="cart-counter">
     {itemCount > 0 && <span>{itemCount}</span>}
    </div>
  );
};

export {CartCounter}
