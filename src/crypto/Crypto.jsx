import React, { useState, useEffect } from "react";
import axios from "axios";

function Crypto() {
  const SEI = 81002;
  const SUI = 1392;
  const SEIYAN = 167800;
  const HSUI = 215000;
  const DYM = 770;
  const WIF = 690;
  const EPEP = 101100;
  const DOGE = 2068;
  const API_URL = "https://api.coingecko.com/api/v3/coins/";
  const API_URL_2 = "https://api.coinpaprika.com/v1/tickers/";

  const [sei, setSei] = useState(0);
  const [sui, setSui] = useState(0);
  const [seiyan, setSeiyan] = useState(0);
  const [hsui, setHsui] = useState(0);
  const [dym, setDym] = useState(0);
  const [wif, setWif] = useState(0);
  const [epep, setEpep] = useState(0);
  const [doge, setDoge] = useState(0);

  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      let response = await axios.get(API_URL_2 + "sei-sei");
      setSei(response.data.quotes.USD.price);
      // console.log(response.data.quotes.USD.price);
      response = await axios.get(API_URL_2 + "sui-sui");
      setSui(response.data.quotes.USD.price);
      response = await axios.get(API_URL + "seiyan");
      setSeiyan(response.data.market_data.current_price.usd);
      response = await axios.get(API_URL + "suicune-on-sui");
      setHsui(response.data.market_data.current_price.usd);
      response = await axios.get(API_URL_2 + "dym-dymension-iou");
      setDym(response.data.quotes.USD.price);
      response = await axios.get(API_URL_2 + "wif-dogwifcoin");
      setWif(response.data.quotes.USD.price);
      response = await axios.get(API_URL_2 + "epep-epep");
      setEpep(response.data.quotes.USD.price);
      response = await axios.get(API_URL_2 + "doge-dogecoin");
      setDoge(response.data.quotes.USD.price);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData(); // Call your data fetching function to refresh the data
  };

  const totalSEI = Math.round(sei * SEI);
  const totalSUI = Math.round(sui * SUI);
  const totalSEIYAN = Math.round(seiyan * SEIYAN);
  const totalHSUI = Math.round(hsui * HSUI);
  const totalDYM = Math.round(dym * DYM);
  const totalWIF = Math.round(wif * WIF);
  const totalEPEP = Math.round(epep * EPEP);
  const totalDOGE = Math.round(doge * DOGE);
  const total =
    totalSEI +
    totalSUI +
    totalSEIYAN +
    totalHSUI +
    totalDYM +
    totalWIF +
    totalEPEP +
    totalDOGE;

  return (
    <div>
      {loading && <p>Loading prices...</p>}
      {/* {error && <p>Error: {error.message}</p>} */}
      {sei && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto", // creates four columns
            gap: "10px", // adds some space between the rows and columns
            alignItems: "center", // centers items vertically
          }}
        >
          <div>
            <strong>SEI:</strong>
          </div>
          <div>{SEI}</div>
          <div>
            <strong>Value:</strong>
          </div>
          <div>{totalSEI}</div>
          <div>
            <strong>SUI:</strong>
          </div>
          <div>{SUI}</div>
          <div>
            <strong>Value:</strong>
          </div>
          <div>{totalSUI}</div>
          <div>
            <strong>SEIYAN:</strong>
          </div>
          <div>{SEIYAN}</div>
          <div>
            <strong>Value:</strong>
          </div>
          <div>{totalSEIYAN}</div>
          <div>
            <strong>HSUI:</strong>
          </div>
          <div>{HSUI}</div>
          <div>
            <strong>Value:</strong>
          </div>
          <div>{totalHSUI}</div>
          <div>
            <strong>DYM:</strong>
          </div>
          <div>{DYM}</div>
          <div>
            <strong>Value:</strong>
          </div>
          <div>{totalDYM}</div>
          <div>
            <strong>WIF:</strong>
          </div>
          <div>{WIF}</div>
          <div>
            <strong>Value:</strong>
          </div>
          <div>{totalWIF}</div>
          <div>
            <strong>EPEP:</strong>
          </div>
          <div>{EPEP}</div>
          <div>
            <strong>Value:</strong>
          </div>
          <div>{totalEPEP}</div>
          <div>
            <strong>DOGE:</strong>
          </div>
          <div>{DOGE}</div>
          <div>
            <strong>Value:</strong>
          </div>
          <div>{totalDOGE}</div>
        </div>
      )}
      <h2 className="mt-3 mb-3">Total: {total}</h2>
      <button onClick={fetchData}>Refresh</button>
    </div>
  );
}

export default Crypto;
