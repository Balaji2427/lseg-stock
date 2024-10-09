import React, { useState, useEffect } from "react";
import HomeMenu from "./components/HomeMenu";
import StockMenu from "./components/StockMenu";
import StockPrice from "./components/StockPrice";
import stockData from "./assets/stock-data.json";
import "./App.css";

function App() {
  const [selectedExchange, setSelectedExchange] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleExchangeSelection = (exchange) => {
    setSelectedExchange(exchange);
    setSelectedStock(null); // Reset stock selection
  };

  const handleStockSelection = (stock) => {
    setSelectedStock(stock);
  };

  const goToHomeMenu = () => {
    setSelectedExchange(null);
    setSelectedStock(null);
  };

  return (
    <div className="App">
      {!selectedExchange ? (
        <HomeMenu onSelectExchange={handleExchangeSelection} />
      ) : !selectedStock ? (
        <StockMenu
          exchange={selectedExchange}
          stockData={stockData[selectedExchange]}
          onSelectStock={handleStockSelection}
          goToHomeMenu={goToHomeMenu}
        />
      ) : (
        <StockPrice
          stock={selectedStock}
          goToStockMenu={() => setSelectedStock(null)}
          goToHomeMenu={goToHomeMenu}
        />
      )}
    </div>
  );
}

export default App;
