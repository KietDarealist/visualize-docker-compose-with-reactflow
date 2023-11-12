import React, { CSSProperties } from "react";

interface CustomShapeProps {
  shape: "rectangle" | "diamond" | "hexagon"; // Thêm các hình dạng khác nếu cần
  textColor: string;
  fontSize: string;
  fontWeight: string;
  backgroundColor: string;
  borderRadius?: string;
}

const CustomShape: React.FC<CustomShapeProps> = ({
  shape,
  textColor,
  fontSize,
  fontWeight,
  backgroundColor,
  borderRadius = "0",
}) => {
  const commonStyles: CSSProperties = {
    color: textColor,
    fontSize: fontSize,
    fontWeight: fontWeight,
    backgroundColor: backgroundColor,
    borderRadius: `${borderRadius}px`,
    border: "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "130px",
    overflow: "hidden",
    padding: "2px",
  };

  const shapeStyles = {
    rectangle: {
      minWidth: "200px",
      maxWidth: "220px",
    },
    diamond: {
      width: "200px",
      height: "200px",
      transform: "rotate(45deg)",
    },
    hexagon: {
      width: "200px",
      height: "200px",
      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    },
  };

  const selectedShapeStyles = shapeStyles[shape] || shapeStyles["rectangle"];

  return (
    <div style={{ ...commonStyles, ...selectedShapeStyles }}>
      {shape === "diamond" && (
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill={backgroundColor}
          >
            Service name Image: Service Image
          </text>
        </svg>
      )}
      <h4 className={`text-center text-sm break-word`}>
        Service name <br /> Image: Service Image
      </h4>
    </div>
  );
};

export default CustomShape;
