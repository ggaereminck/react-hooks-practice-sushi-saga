import React, { useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import { useState } from "react";

const API = "http://localhost:4000/sushis";

function App() {
  const [sushiData, setSushiData] = useState(null)
  const [moneyLeft, setMoneyLeft] = useState(100)
  const [emptyPlate, setEmptyPlate] = useState([])

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setSushiData(data))
  },[])

  return (
    <div className="app">
      {sushiData !== null ? <SushiContainer sushiData={sushiData} setMoneyLeft={setMoneyLeft} moneyLeft={moneyLeft} setEmptyPlate={setEmptyPlate} emptyPlate={emptyPlate}/> : null}
      <Table moneyLeft={moneyLeft} emptyPlate={emptyPlate}/>
    </div>
  );
}

export default App;
