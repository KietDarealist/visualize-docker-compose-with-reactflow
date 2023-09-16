import React, { useEffect, useState } from "react";

import { readYaml } from "./utils";
import yaml from "js-yaml";

interface IDockerComposeFile {
  version: string;
  networks: Object;
  services?: ServiceConfig[];
}

interface IContainerHealthCheck {
  test?: string[];
  interval?: string;
  timeout?: string;
  retries?: number;
}
interface ServiceConfig {
  [serviceName: string]: {
    image: string;
    ports?: string[];
    volumes?: string[];
    networks: string[];
    depends_on?: string[];
    deploy: {
      replicas: number;
      update_config?: {
        parallelism: number;
        delay?: string;
      };
      restart_policy: {
        condition: string;
        delay?: string;
        max_attempts?: number;
        window?: string;
      };
      mode?: string;
      labels?: string[];
      placement?: {
        constraints: string[];
      };
    };
  };
}

const App = () => {
  const [fileContent, setFileContent] = useState<IDockerComposeFile | null>(
    null
  );
  const [serviceNodes, setServiceNodes] = useState<any[]>([]);

  function handleFileInputChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e: any) {
      const fileData = e.target.result;
      console.log("file content is\n", yaml.load(fileData));
      setFileContent(yaml.load(fileData) as any);
    };
    reader.readAsText(file); // Đọc tệp dưới dạng văn bản
  }

  useEffect(() => {
    if (fileContent) {
      setServiceNodes(Object.keys(fileContent.services as any));
    }
  }, [fileContent]);

  console.log("adadas", JSON.stringify(fileContent?.services));

  return (
    <div className="flex items-center bg-white justify-center h-screen">
      {!!fileContent ? (
        <div>
          {Object.entries(fileContent.services as any).map(
            ([serviceName, serviceData]) => (
              <div key={serviceName}>
                <h1>{serviceName}</h1>
                Image : <h3>{(serviceData as any).image}</h3>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="container mx-auto text-center">
          <h1 className="text-gray-500 font-bold uppercase text-5xl">
            Visualize your docker compose file
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            We help you visualize your docker compose file to a chart
          </p>
          {/* <img
          src="https://d2gbo5uoddvg5.cloudfront.net/images/gifs/logo-docker.gif"
          alt="Image"
          className="mt-4 mx-auto"
        /> */}
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
      )}
    </div>
  );
};

export default App;
