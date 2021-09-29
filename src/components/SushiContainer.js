import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"
import { useState } from "react";

function SushiContainer({sushiData, setMoneyLeft, moneyLeft, setEmptyPlate, emptyPlate}) {
const [slicedSushi, setSlicedSushi] = useState(sushiData)
const [x, setX] = useState(0)
const [y, setY] = useState(4)

console.log(x)
console.log(y)

  return (
    <div className="belt">
        {slicedSushi.map(sushi => {
          return(
          <Sushi key={sushi.id} name={sushi.name} imgURL={sushi.img_url} price={sushi.price} createdAt={sushi.created_at} setMoneyLeft={setMoneyLeft} moneyLeft={moneyLeft} setEmptyPlate={setEmptyPlate} emptyPlate={emptyPlate}/>
        )}).slice(x, y)}
      <MoreButton x={x} y={y} setX={setX} setY={setY}/>
    </div>
  );
}

export default SushiContainer;
