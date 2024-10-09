import React from "react";

const HomeMenu = ({ onSelectExchange }) => {
  return (
    <>
      <div>
        <h3>Hello! Welcome to LSEG. I'm here to help you.</h3>
      </div>
      <div>
        <h3>Select a Stock Exchange</h3>
        <button onClick={() => onSelectExchange("LSEG")}>
          London Stock Exchange
        </button>
        <button onClick={() => onSelectExchange("NASDAQ")}>
          NASDAQ Stock Exchange
        </button>
        <button onClick={() => onSelectExchange("NYSE")}>
          New York Stock Exchange
        </button>
      </div>
    </>
  );
};

export default HomeMenu;
