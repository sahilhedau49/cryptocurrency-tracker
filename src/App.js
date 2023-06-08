import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

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
      <div className="nav-bar flex md:flex-col md:px-6 justify-between px-20 py-6 shadow-lg shadow-[#3f3f3f]">
        <div className="logo">
          <h1 className="font-semibold text-2xl md:mb-4 md:text-center">
            CRYPTO Tracker
          </h1>
        </div>
        <div className="search-section flex md:text-center my-auto">
          <div>
            <label className="text-lg pr-2">Search a currency: </label>
            <input
              type="text"
              placeholder="Search"
              onChange={handleChange}
              className="search px-4 py-2 text-black rounded outline-none"
            ></input>
          </div>
          <div className="search-section ml-4 md:text-center my-auto">
            <button
              className="search px-4 py-2 text-black rounded outline-none"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
          </div>
          <div className="search-section ml-4 md:text-center my-auto">
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="search px-4 py-2 text-black rounded outline-none"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className="coin-main grid grid-cols-3 gap-x-12 lg:grid-cols-2 sm:grid-cols-1 gap-y-24 md:gap-y-8 p-20 lg:p-8 sm:p-8">
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
