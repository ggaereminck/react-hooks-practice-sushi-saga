import React from "react";

function MoreButton({x, y, setX, setY}) {
  return <button onClick={() => {
    setX(() => x < 96 ? x+4 : 0)
    setY(() => y < 100 ? y+4 : 4)
  }
  }>More sushi!</button>;
}

export default MoreButton;
