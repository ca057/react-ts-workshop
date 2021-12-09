import { Action, Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { rootReducer } from "../../store";
import { decrement, increment, reset } from "../../store/count";

const Counter: React.VFC = () => {
  const count = useSelector<ReturnType<typeof rootReducer>, number>(
    (state) => state.count
  );
  const dispatch = useDispatch<Dispatch<Action>>();

  return (
    <div className="row">
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default Counter;
