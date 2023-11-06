import React from "react";
import PencilIcon from "../../assets/icons/Pencil";

interface IToolBarProps {}

const ToolBar: React.FC<IToolBarProps> = (props) => {
  return (
    <div
      style={{ width: "20vw", display: "flex", flexDirection: "column" }}
      className="items-center justify-center px-10"
    >
      <h1 className="text-gray-500 font-bold uppercase text-2xl text-center">
        Menu
      </h1>
      <button className="mt-4 w-full font-medium text-gray-600 border-gray-300 border rounded-xl py-2 flex justify-center items-centers active:opacity-80">
        <p className="mr-2">Customize Nodes</p>
        <PencilIcon />
      </button>
      <button className="mt-4 w-full font-medium text-gray-600 border-gray-300 border rounded-xl py-2 flex justify-center items-centers active:opacity-80">
        <p className="mr-2">Customize Edges</p>
        <PencilIcon />
      </button>
      <button className="mt-4 w-full font-medium text-gray-600 border-gray-300 border rounded-xl py-2 flex justify-center items-centers active:opacity-80">
        <p className="mr-2">View Full Screen</p>
        <PencilIcon />
      </button>
      <button className="mt-4 w-full font-medium text-gray-600 border-gray-300 border rounded-xl py-2 flex justify-center items-centers active:opacity-80">
        <p className="mr-2">Exit</p>
        <PencilIcon />
      </button>
    </div>
  );
};

export default ToolBar;
