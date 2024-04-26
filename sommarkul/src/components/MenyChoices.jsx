

const MenyChoices = () => {
  const handleShowAllProducts = () => {
   
  };

  const handleShowAllLek = () => {
   
  };

  const handleShowAllBad = () => {
    
  };

  return (
    <div className="meny-alternativ">
      <button className="show-all-products" onClick={handleShowAllProducts}>
        Alla produkter
      </button>
      <button className="show-all-lek" onClick={handleShowAllLek}>
        Lek
      </button>
      <button className="show-all-bad" onClick={handleShowAllBad}>
        Bad
      </button>
    </div>
  );
};

export {MenyChoices} 
