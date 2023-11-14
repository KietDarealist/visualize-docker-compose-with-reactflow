import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
} from "reactflow";
import "reactflow/dist/style.css";

interface IEdgeExampleProps {
  initialEdges: {
    type: string;
    source: string;
    target: string;
    id: string;
    label: string;
  }[];
}

const EdgeExample: React.FC<IEdgeExampleProps> = (props) => {
  const { initialEdges } = props;
  const initialNodes = [
    {
      id: "1",
      data: { label: "choose" },
      position: {
        x: 0,
        y: 0,
      },
    },
    {
      id: "2",
      data: { label: "your" },
      position: {
        x: 100,
        y: 100,
      },
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      style={{ maxWidth: 400, maxHeight: 400 }}
    />
  );
};

export default EdgeExample;
