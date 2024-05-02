import React, { useEffect } from "react";
import saveInCartStore from '../data/cartStore';

const TestComponent = () => {
  // Hämta updateQuantity-funktionen från saveInCartStore
  const { updateQuantity } = saveInCartStore();

  // Anropa updateQuantity direkt vid mount
  useEffect(() => {
    // Anropa updateQuantity med testdata för att minska kvantiteten för en viss artikel
    updateQuantity("itemKey123", -1);
  }, [updateQuantity]);

  return <div>Testar updateQuantity...</div>;
};

export default TestComponent;