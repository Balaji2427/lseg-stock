import React from "react";

const StockMenu = ({ exchange, stockData, onSelectStock, goToHomeMenu }) => {
  return (
    <div>
      <h2>Stocks in {exchange}</h2>
      {stockData.map((stock, index) => (
        <button key={index} onClick={() => onSelectStock(stock)}>
          {stock.name}
        </button>
      ))}
      <button onClick={goToHomeMenu}>Go to Home Menu</button>
    </div>
  );
};

export default StockMenu;
