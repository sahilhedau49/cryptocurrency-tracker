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
    <div className="coin-container rounded-2xl px-12 sm:px-6 py-8 bg-[#181818]">
      <div className="coin-row">
        <div className="coin flex">
          <img className="w-[20%]" src={image} alt="symbol" />
          <h1 className="my-auto ml-10 font-semibold text-2xl">{name}</h1>
        </div>
        <div className="coin-data pt-4">
          <p className="text-xl uppercase mb-2">{symbol}</p>
          <p className="text-lg sm:text-base">
            <span className="text-slate-300 mr-2">Price:</span>
            {price.toLocaleString()} Rs
          </p>
          <p className="text-lg sm:text-base">
            <span className="text-slate-300 mr-2">24h Volume:</span>
            {volume.toLocaleString()} Rs
          </p>
          <p className="text-lg sm:text-base">
            <span className="text-slate-300 mr-2">Mkt cap:</span>
            {marketCap.toLocaleString()} Rs
          </p>
          {pricePercentage < 0 ? (
            <p className="text-red-500 text-xl sm:text-base">
              {pricePercentage.toFixed(2)}%
            </p>
          ) : (
            <p className="text-green-500 text-xl sm:text-base">
              {pricePercentage.toFixed(2)}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
