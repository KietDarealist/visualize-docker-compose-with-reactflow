import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter";
import { RootState } from "../redux";
import {
  setBackGroundColor,
  setBorderRadius,
  setFontSize,
  setFontWeight,
  setTextColor,
} from "../redux/portNode";
import { useState } from "react";

const usePortNode = () => {
  //hooks
  const { backgroundColor, fontSize, fontWeight, borderRadius, textColor } =
    useSelector((state: RootState) => state.portNode);
  const dispatch = useDispatch();

  const [localBackgroundColor, setLocalBackgroundColor] =
    useState<string>(backgroundColor);
  const [localTextColor, setLocalTextColor] = useState<string>(textColor);
  const [localFontSize, setLocalFontSize] = useState<number>(fontSize);
  const [localFontWeight, setLocalFontWeight] = useState<number>(fontWeight);
  const [localBorderRadius, setLocalBorderRadius] =
    useState<number>(borderRadius);

  //functions
  const dispatchSetBackgroundColor = (backgroundColor: string) =>
    dispatch(setBackGroundColor(backgroundColor));
  const dispatchSetTextColor = (textColor: string) =>
    dispatch(setTextColor(textColor));
  const dispatchSetFontSize = (fontSize: number) =>
    dispatch(setFontSize(fontSize));
  const dispatchSetFontWeight = (fontWeight: number) =>
    dispatch(setFontWeight(fontWeight));
  const dispatchSetBorderRadius = (borderRadius: number) =>
    dispatch(setBorderRadius(borderRadius));

  const onConfirmChangeServiceNodeStyle = () => {
    dispatchSetBackgroundColor(localBackgroundColor);
    dispatchSetTextColor(localTextColor);
    dispatchSetFontSize(localFontSize);
    dispatchSetFontWeight(localFontWeight);
    dispatchSetBorderRadius(localBorderRadius);
  };

  return {
    backgroundColor,
    textColor,
    fontSize,
    fontWeight,
    borderRadius,

    localBackgroundColor,
    localTextColor,
    localFontSize,
    localFontWeight,
    localBorderRadius,

    setLocalBackgroundColor,
    setLocalTextColor,
    setLocalFontSize,
    setLocalFontWeight,
    setLocalBorderRadius,
    onConfirmChangeServiceNodeStyle,
  };
};

export default usePortNode;
