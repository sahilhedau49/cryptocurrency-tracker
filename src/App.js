import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  // This way also works.
  //
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en"
  //     )
  //     .then((res) => {
  //       setCoins(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, []);

  const getApiData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
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
    <div className="App min-h-screen bg-[#121212] text-white">
      <div className="nav-bar flex justify-between px-20 py-6 shadow-lg shadow-[#3f3f3f]">
        <div className="logo">
          <h1 className="font-semibold text-2xl ">CRYPTO Tracker</h1>
        </div>
        <div className="search-section my-auto">
          <label className="text-lg pr-2">Search a currency: </label>
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            className="search px-4 py-2 bg-[#181818] rounded outline-none"
          ></input>
        </div>
      </div>
      <div className="coin-main grid grid-cols-3 gap-x-12 gap-y-24 p-20">
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
    </div>
  );
}

export default App;
