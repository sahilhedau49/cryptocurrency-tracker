import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "../Coin";
import { UserAuth } from "../context/AuthContext";
import ConnectPage from "./ConnectPage";

const DataPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const { SignOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await SignOut();
    } catch (error) {
      console.log(error);
    }
  };

  const getApiData = async () => {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=51&page=1&sparkline=false&locale=en`
      );
      setCoins(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App min-h-screen pb-20 bg-[#121212] text-white">
      <div className="nav-bar flex md:flex-col md:px-6 justify-between px-20 py-6 shadow-lg shadow-[#3f3f3f]">
        <div className="logo self-center">
          <h1 className="font-semibold gradientText text-2xl md:mb-4 md:text-center">
            CRYPTO Tracker
          </h1>
        </div>
        <div className="search-section flex md:text-center md:flex-col my-auto">
          <div>
            <label className="text-lg pr-2">Search a currency: </label>
            <input
              type="text"
              placeholder="Search"
              onChange={handleChange}
              className="search px-4 py-2 text-black rounded outline-none"
            ></input>
          </div>
          <div className="flex search-section ml-4 md:mt-3 md:text-center my-auto sm:flex-col-reverse sm:ml-0">
            <button
              className="search px-4 py-2 text-black rounded outline-none sm:p-1 sm:w-[30%] sm:mx-auto"
              onClick={handleSignOut}
            >
              Log Out
            </button>
            {user?.displayName ? (
              <p className="text-center mx-3 text-xl gradientText font-semibold self-center">
                {user.displayName}
              </p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
      <div className="coin-main grid grid-cols-3 gap-x-12 lg:grid-cols-2 sm:grid-cols-1 gap-y-24 md:gap-y-8 p-20 lg:p-8 sm:p-8 ">
        {filterCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              volume={coin.total_volume}
              pricePercentage={coin.price_change_percentage_24h}
              marketCap={coin.market_cap}
            />
          );
        })}
      </div>
      <ConnectPage />
    </div>
  );
};

export default DataPage;
