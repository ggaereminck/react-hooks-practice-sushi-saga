import React from "react";

function Table({ emptyPlate, moneyLeft}) {
  // renders an empty plate for every element in the array
  const emptyPlates = emptyPlate.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      {moneyLeft > 0 ? <h1 className="remaining">
        You have: ${moneyLeft} remaining!
      </h1> : <h1 className="remaining">You have no money left!</h1>}
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
