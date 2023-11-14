import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter";
import { RootState } from "../redux";
import { setColor, setThickness } from "../redux/edge";
import { useState } from "react";

const useEdge = () => {
  //hooks
  const { color, thickness } = useSelector((state: RootState) => state.edge);
  const dispatch = useDispatch();

  const [localColor, setLocalColor] = useState<string>(color);
  const [localThickness, setLocalThickness] = useState<number>(thickness);

  //functions
  const disaptchSetThickness = (payload: number) =>
    dispatch(setThickness(payload));
  const dispatchSetColor = (payload: string) => dispatch(setColor(payload));

  const onConfirmChangeEdgeStyle = () => {
    disaptchSetThickness(localThickness);
    dispatchSetColor(localColor);
  };

  return {
    localColor,
    localThickness,

    //state
    color,
    thickness,

    setLocalColor,
    setLocalThickness,

    onConfirmChangeEdgeStyle,
  };
};

export default useEdge;
