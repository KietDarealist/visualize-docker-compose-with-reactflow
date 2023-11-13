import { Typography } from "@mui/joy";
import React, { useCallback } from "react";
import { Handle, Position } from "reactflow";
import useServiceNode from "../../../hooks/useServiceNode";

interface IServiceNodeProps {
  data: any;
}

const ServiceNode: React.FC<IServiceNodeProps> = (props) => {
  const { data } = props;
  let serviceKeyName = Object.keys(data)[0];

  const onChange = useCallback((evt: any) => {}, []);
  const { backgroundColor, borderRadius, textColor, fontSize, fontWeight } =
    useServiceNode();

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        style={{
          backgroundColor: backgroundColor,
          borderRadius: `${borderRadius}px`,
        }}
        className=" border-solid border  align-center min-h-[130px] max-h-
      [250px] min-w-[200px] max-w-[220px] overflow-hidden px-2 py-4 border-gray-300  flex flex-col justify-center"
      >
        <h4
          style={{
            color: textColor,
            fontSize: fontSize,
            fontWeight: fontWeight,
          }}
          className={`text-center text-sm break-word`}
        >
          {serviceKeyName}
          <br /> image: {data?.[serviceKeyName]?.image}
        </h4>
      </div>

      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
};

export default ServiceNode;
