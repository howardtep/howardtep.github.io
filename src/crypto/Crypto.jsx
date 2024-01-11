import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./crypto.css";
function Crypto() {
  const [coins, setCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCoins, setFilteredCoins] = useState([]);

  const handleAddCoin = () => {
    setCoins([
      ...coins,
      <Row className="coin mb-3" key={coins.length + 1}>
        <Col md={4}>
          <Row>
            <Col md={4}>
              <div className="set form-control" onClick={handleSetClick}>
                Set
              </div>
            </Col>
            <Col md={8}>
              <input
                id="value"
                className="form-control"
                type="text"
                placeholder="Amount"
              />
            </Col>
          </Row>
        </Col>
        <Col md={4}>Column 2</Col>
        <Col md={4}>Column 3</Col>
      </Row>,
    ]);
  };

  const handleSetClick = (event) => {
    const div = event.target;
    const coinRow = event.target.closest(".coin");
    const input = coinRow.querySelector("#value");
    const inputValue = input.value;
    console.log(inputValue);
    div.innerText == "Set"
      ? (input.className = "disabled form-control")
      : (input.className = "form-control");

    div.innerText = div.innerText === "Set" ? "Edit" : "Set";
  };

  return (
    <>
      <div className="container center">
        <h1>Portfolio</h1>
        <section className="mt-5">
          <div className="m-5">{coins}</div>
          <button className="btn bg-light mt-5" onClick={handleAddCoin}>
            Add
          </button>
        </section>
      </div>
    </>
  );
}

function Portfolio() {
  const [user, setUser] = useState("Howard");
  useEffect(() => {
    const savedHoldings = localStorage.getItem("portfolio");
    if (savedHoldings) {
      setHoldings(JSON.parse(savedHoldings));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio", JSON.stringify(holdings));
  }, [holdings]);
}

export default Crypto;
