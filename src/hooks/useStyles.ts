import { useDispatch, useSelector } from "react-redux";
import { setServiceNodeStyle } from "../redux/styles/reducer";
import { RootState } from "../redux";

const useStyles = () => {
  //hooks
  const { serviceNodeStyle } = useSelector((state: RootState) => state.styles);
  const dispatch = useDispatch();

  //functions
  const dispatchSetServiceStyle = (style: string) =>
    dispatch(setServiceNodeStyle(style));

  return {
    //state
    serviceNodeStyle,

    //dispatch function
    dispatchSetServiceStyle,
  };
};

export default useStyles;
