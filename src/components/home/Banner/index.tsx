import React from "react";

interface IBannerProps {
  handleFileInputChange: (e: any) => void;
}

const Banner: React.FC<IBannerProps> = (props) => {
  const { handleFileInputChange } = props;
  return (
    <div className="flex items-center bg-white justify-center h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-gray-500 font-bold uppercase text-5xl">
          Visualize your docker compose file
        </h1>
        <p className="text-lg text-gray-400 mt-2">
          We help you visualize your docker compose file to a chart
        </p>
        <img
          src={require("../../../../src/assets/images/logo-docker.gif")}
          alt="Image"
          className="mt-4 mx-auto"
        />
        <div className="mt-8 flex space-x-10 justify-center">
          <input
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 w-64 rounded"
            type="file"
            accept=".yml" // Các loại tệp cho phép chọn
            onChange={handleFileInputChange}
          />

          <button className="bg-white hover:bg-gray-50 text-blue-600 px-4 py-2 w-64 rounded border-blue-500 border-2">
            Support us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
