import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { order, restoked } from "./iceCreamSlice";
export const IceCreamView = () => {
  const { numOficeCream } = useSelector((state) => state.iceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number Of iceCreams is {numOficeCream}</h2>
      <button onClick={() => dispatch(order())}>Order iceCream</button>
      <button onClick={() => dispatch(restoked(1))}>Restock iceCreams</button>
    </div>
  );
};
