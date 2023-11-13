import React, { useCallback } from "react";
import { Handle, Position } from "reactflow";
import {} from "react-shapes";

import "./styles.css";
import { Typography } from "@mui/joy";
import useNetworkNode from "../../hooks/useNetworkNode";

interface INetworkNodeProps {
  data: any;
}

const NetworkNode: React.FC<INetworkNodeProps> = (props) => {
  const { data } = props;
  const { backgroundColor, borderRadius, textColor, fontSize, fontWeight } =
    useNetworkNode();

  const onChange = useCallback((evt: any) => {}, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        style={{
          backgroundColor: backgroundColor,
          borderRadius: `${borderRadius}px`,
        }}
        className={` border-solid border  align-center min-h-[130px] max-h-
                          [250px] min-w-[200px] max-w-[220px] overflow-hidden px-2 py-4 
                           flex flex-col justify-center`}
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
          <br />
        </h4>
      </div>

      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
};

export default NetworkNode;
