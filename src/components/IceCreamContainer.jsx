import React, { useEffect } from "react";
import { buyIceCream } from "src/redux/index";
import { useDispatch, useSelector } from "react-redux";

function CakeContainer() {
  const dispatch = useDispatch();

  const numberOfIceCream = useSelector(
    (state) => state.iceCream.numberOfIceCream
  );
  useEffect(() => {
    console.log(numberOfIceCream);
  }, [numberOfIceCream]);
  return (
    <div>
      <h2>Number of cakes - {numberOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;
