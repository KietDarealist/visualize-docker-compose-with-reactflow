import { Typography } from "@mui/joy";
import React, { useCallback } from "react";
import { Handle, Position } from "reactflow";

interface IServiceNodeProps {
  data: any;
}

const ServiceNode: React.FC<IServiceNodeProps> = (props) => {
  const { data } = props;
  let serviceKeyName = Object.keys(data)[0];

  const onChange = useCallback((evt: any) => {}, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        className=" border-solid border  align-center min-h-[130px] max-h-
      [250px] w-52 max-w-[220px] overflow-hidden px-2 py-4 rounded-3xl border-gray-300 bg-gray-100 flex flex-col justify-center"
      >
        <Typography
          id="modal-desc"
          textColor="text.black"
          fontSize="sm"
          textAlign="center"
        >
          {serviceKeyName}
        </Typography>
        <h4 className="text-center text-sm break-words text-gray-600 font-normal">
          image: {data?.[serviceKeyName]?.image}
        </h4>
      </div>

      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
};

export default ServiceNode;
