import React, { useCallback } from "react";
import { Handle, Position } from "reactflow";

import { Typography } from "@mui/joy";

interface INetworkNodeProps {
  data: any;
}

const NetworkNode: React.FC<INetworkNodeProps> = (props) => {
  const { data } = props;

  const onChange = useCallback((evt: any) => {}, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        className=" border-solid border   align-center min-h-[130px] rounded-full max-h-
          [300px] w-52 max-w-[220px] overflow-hidden px-2 py-4 border-gray-300 bg-gray-100 flex flex-col justify-center"
      >
        <Typography
          id="modal-desc"
          textColor="text.black"
          fontSize="sm"
          textAlign="center"
        >
          {data}
        </Typography>
      </div>

      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
};

export default NetworkNode;
