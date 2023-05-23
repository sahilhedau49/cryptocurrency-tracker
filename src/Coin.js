import React from "react";

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  pricePercentage,
  marketCap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto image" />
          <h1>{name}</h1>
          <p>{symbol}</p>
        </div>
        <div className="coin-data">
          <p>{`Price: ${price.toLocaleString()} Rs`}</p>
          <p>{`24h Volume: ${volume.toLocaleString()} Rs`}</p>
          <p>{`Mkt cap: ${marketCap.toLocaleString()} Rs`}</p>
          {pricePercentage < 0 ? (
            <p className="text-red-500">{pricePercentage.toFixed(2)}%</p>
          ) : (
            <p className="text-green-500">{pricePercentage.toFixed(2)}%</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
