import React from "react";

const StockPrice = ({ stock, goToStockMenu, goToHomeMenu }) => {
  return (
    <div>
      <h2>
        {stock.name} Current Price: ${stock.price}
      </h2>
      <button onClick={goToStockMenu}>Back to Stock Menu</button>
      <button onClick={goToHomeMenu}>Go to Home Menu</button>
    </div>
  );
};

export default StockPrice;
