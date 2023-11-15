import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter";
import { RootState } from "../redux";
import { setColor, setEdgeType, setThickness } from "../redux/edge";
import { useState } from "react";

const useEdge = () => {
  //hooks
  const { color, thickness, edgeType } = useSelector(
    (state: RootState) => state.edge
  );
  const dispatch = useDispatch();

  const [localColor, setLocalColor] = useState<string>(color);
  const [localThickness, setLocalThickness] = useState<number>(thickness);
  const [localEdgeType, setLocalEdgeType] = useState<string>(edgeType);

  //functions
  const disaptchSetThickness = (payload: number) =>
    dispatch(setThickness(payload));
  const dispatchSetColor = (payload: string) => dispatch(setColor(payload));
  const dispatchSetEdgeType = (payload: string) =>
    dispatch(setEdgeType(payload));

  const onConfirmChangeEdgeStyle = () => {
    disaptchSetThickness(localThickness);
    dispatchSetEdgeType(localEdgeType);
    dispatchSetColor(localColor);
  };

  return {
    localColor,
    localThickness,
    localEdgeType,

    //state
    color,
    thickness,
    edgeType,

    setEdgeType,
    setLocalColor,
    setLocalThickness,
    setLocalEdgeType,

    onConfirmChangeEdgeStyle,
  };
};

export default useEdge;
