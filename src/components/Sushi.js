import React from "react";
import { useState } from "react";

function Sushi({name, imgURL, price, setMoneyLeft, moneyLeft, setEmptyPlate, emptyPlate}) {
  const [eatenSushi, setEatenSushi] = useState(true)


  return (
    <div className="sushi">
      <div className="plate" onClick={() => {
        setEatenSushi(() => moneyLeft > 0 ? false : true) 
        setMoneyLeft(() => moneyLeft - price)
        setEmptyPlate(() => [...emptyPlate, name])
        }}>
        {/* Tell me if this sushi has been eaten! */}
        {eatenSushi === false ? null : (
          <img
            src={imgURL}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
