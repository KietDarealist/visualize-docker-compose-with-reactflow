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
      <div className="border-gray-500 border-solid border justify-center align-center py-1 h-20 w-52 overflow-hidden">
        <h4 className="text-center text-sm">{serviceKeyName}</h4>
        <h4 className="text-center text-sm break-words">
          {data?.[serviceKeyName]?.image}
        </h4>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
};

export default ServiceNode;
