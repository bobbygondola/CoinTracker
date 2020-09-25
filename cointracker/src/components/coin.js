import React from "react";
import '../styles/coin.css'

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <div className="coinContainer">
      <div className="coinRow">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coinSymbol">{symbol}</p>
        </div>
        <div className="coinData">
          <p className="coinPrice">Price: ${price}</p>
          <p className="coinVolume">Total Volume: ${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coinPercent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coinPercent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coinMarketCap">Market Cap: ${marketCap}</p>
        </div>
      </div>
    </div>
  );
};
export default Coin;
