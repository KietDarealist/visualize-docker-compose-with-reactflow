import React, { useEffect, useState } from "react";

import { readYaml } from "./utils";
import yaml from "js-yaml";

interface IDockerComposeFile {
  version: string;
  networks: Object[];
}

const App = () => {
  const [fileContent, setFileContent] = useState<IDockerComposeFile | null>(
    null
  );

  function handleFileInputChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e: any) {
      const fileData = e.target.result;
      console.log("file content is", fileData);
      setFileContent(yaml.load(fileData) as any);
      // Xử lý dữ liệu tệp ở đây
    };

    reader.readAsText(file); // Đọc tệp dưới dạng văn bản
  }

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
          src="https://d2gbo5uoddvg5.cloudfront.net/images/gifs/logo-docker.gif"
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

export default App;
