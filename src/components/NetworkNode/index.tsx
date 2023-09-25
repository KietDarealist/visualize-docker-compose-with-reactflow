import React, { useCallback } from "react";
import { Handle, Position } from "reactflow";

import "./styles.css";

interface INetworkNodeProps {
  data: any;
}

const NetworkNode: React.FC<INetworkNodeProps> = (props) => {
  const { data } = props;

  const onChange = useCallback((evt: any) => {}, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="rounded-bl-xl rounded-br-xl rounded-tl-sm rounded-tr-sm flex flex-col h-20 border-gray-500 border-solid border justify-center align-center py-1 px-4">
        <h4 className="text-center text-sm">{data}</h4>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
};

export default NetworkNode;
