import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter";
import { RootState } from "../redux";

const useCounter = () => {
  //hooks
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  //functions
  const dispatchIncrement = dispatch(increment());
  const dispatchDecrement = dispatch(decrement());

  return {
    //state
    count,

    //dispatch function
    dispatchIncrement,
    dispatchDecrement,
  };
};

export default useCounter;
