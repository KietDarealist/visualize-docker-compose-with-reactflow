import React from "react";
import {
  EdgeProps,
  getBezierPath,
  getSimpleBezierPath,
  getSmoothStepPath,
  getStraightPath,
} from "reactflow";
import useEdge from "../../../hooks/useEdge";

export default function PortEdge(props: EdgeProps) {
  const { sourceX, sourceY, targetX, targetY } = props;
  const { setEdgeType, edgeType, color, thickness } = useEdge();
  const [edgePath] =
    edgeType == "bezier"
      ? getBezierPath({
          sourceX,
          sourceY,
          targetX,
          targetY,
        })
      : edgeType == "straight"
      ? getStraightPath({
          sourceX,
          sourceY,
          targetX,
          targetY,
        })
      : edgeType == "smoothstep"
      ? getSmoothStepPath({
          sourceX,
          sourceY,
          targetX,
          targetY,
        })
      : getSimpleBezierPath({
          sourceX,
          sourceY,
          targetX,
          targetY,
        });

  // Define an arrowhead marker
  const markerId = `arrow-${props.id}`;
  const markerSize = thickness + 10;

  return (
    <>
      <defs>
        <marker
          id={markerId}
          markerWidth={markerSize}
          markerHeight={markerSize}
          refX={markerSize / 2}
          refY={markerSize / 2}
          orient="auto"
          markerUnits="userSpaceOnUse"
        >
          <path
            d={`M0,0 L${markerSize}, ${markerSize / 2} L0,${markerSize} Z`}
            fill={color} // Set your desired arrow color here
          />
        </marker>
      </defs>

      <path
        style={{
          fill: "none",
          stroke: color, // Set your desired color here
          strokeWidth: thickness, // Set your desired width here
          markerEnd: `url(#${markerId})`, // Apply the arrowhead marker
        }}
        d={edgePath}
      />
    </>
  );
}
