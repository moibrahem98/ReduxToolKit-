import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { order, restoked } from "./cakeSlice";
export const CakeView = () => {
  const { numOfCakes } = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of CakeS Is {numOfCakes}</h2>
      <button onClick={() => dispatch(order())}>Order Cake</button>
      <button onClick={() => dispatch(restoked(1))}>Restock Cake</button>
    </div>
  );
};
