import React, { useCallback } from "react";
import { Handle, Position } from "reactflow";

interface IPortNodeProps {
  data: any;
}

const PortNode: React.FC<IPortNodeProps> = (props) => {
  const { data } = props;

  const onChange = useCallback((evt: any) => {}, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="h-8 border-gray-500 border-solid border justify-center align-center py-1 px-4 rounded-full">
        <h4 className="text-center text-sm">{data.label}</h4>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
};

export default PortNode;
