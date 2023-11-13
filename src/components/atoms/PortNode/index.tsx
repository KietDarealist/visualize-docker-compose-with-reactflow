import React, { useCallback } from "react";
import { Handle, Position } from "reactflow";

import { Typography } from "@mui/joy";
import usePortNode from "../../../hooks/usePortNode";

interface IPortNodeProps {
  data: any;
}

const PortNode: React.FC<IPortNodeProps> = (props) => {
  const { data } = props;

  const onChange = useCallback((evt: any) => {}, []);
  const { backgroundColor, borderRadius, textColor, fontSize, fontWeight } =
    usePortNode();

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        style={{
          backgroundColor: backgroundColor,
          borderRadius: `${borderRadius}px`,
        }}
        className={` border-solid border   align-center min-h-[130px] 
          [300px] min-w-[130px] max-w-[220px] overflow-hidden 
          px-2 py-4 flex flex-col justify-center`}
      >
        <h4
          style={{
            color: textColor,
            fontSize: fontSize,
            fontWeight: fontWeight,
          }}
          className={`text-center text-sm break-word`}
        >
          {data}
        </h4>
      </div>

      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
};

export default PortNode;
