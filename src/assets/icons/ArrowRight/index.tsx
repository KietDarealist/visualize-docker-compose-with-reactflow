import * as React from "react";

interface IArrowRightIconProps {
  width?: number;
  height?: number;
}

const ArrowRightIcon: React.FC<IArrowRightIconProps> = (props) => {
  const { width = 512, height = 512 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      data-name="Layer 1"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M23.768 11.448 19.35 7.087c-.498-.492-1.35-.143-1.35.552V11H1a1 1 0 1 0 0 2h17v3.361c0 .695.852 1.044 1.35.552l4.418-4.361a.773.773 0 0 0 0-1.104Z" />
    </svg>
  );
};
export default ArrowRightIcon;
