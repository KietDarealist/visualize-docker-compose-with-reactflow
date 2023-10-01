import React, { useEffect, useMemo, useState } from "react";

import { readYaml } from "./utils";
import yaml from "js-yaml";
import ReactFlow, { MarkerType } from "reactflow";
import NetworkNode from "./components/nodes/NetworkNode";
import VolumeNode from "./components/nodes/VolumeNode";
import ServiceNode from "./components/nodes/ServiceNode";
import PortNode from "./components/nodes/PortNode";
import CustomConnectionLine from "./components/connectionLine/CustomConnectionLine";

const App = () => {
  const [fileContent, setFileContent] = useState<IDockerComposeFile | null>(
    null
  );

  //nodes
  const [serviceNodes, setServiceNodes] = useState<IServiceNode[]>([]);
  const [networkNodes, setNetworkNodes] = useState<INetworkNode[]>([]);
  const [volumeNodes, setVolumeNodes] = useState<IVolumeNode[]>([]);
  const [portNodes, setPortNodes] = useState<IPortNode[]>([]);

  //edges
  const [portToServiceEdges, setPortToServiceEdges] = useState<any[]>([]);
  const [serviceToNetworkEdges, setServiceToNetworkEdges] = useState<any[]>([]);

  const nodeTypes = useMemo(
    () => ({
      network: NetworkNode,
      volume: VolumeNode,
      service: ServiceNode,
      port: PortNode,
    }),
    []
  );

  const totalEdges = portToServiceEdges.concat(serviceToNetworkEdges);
  const totalNodes = networkNodes
    .concat(serviceNodes)
    .concat(volumeNodes)
    .concat(portNodes);

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e: any) {
      const fileData = e.target.result;
      setFileContent(yaml.load(fileData) as any);
    };
    reader.readAsText(file);
  };

  useEffect(() => {
    if (fileContent) {
      if (!!fileContent.networks) {
        let networks = Object.keys(fileContent.networks).map((item, index) => {
          return {
            id: `${item}`,
            position: { x: index * 250, y: 200 },
            type: "network",
            data: item,
          };
        });
        setNetworkNodes(networks);
      }
      if (!!fileContent?.volumes && !!fileContent.networks) {
        let networks = Object.keys(fileContent.networks).map((item, index) => {
          return {
            id: `${item}`,
            position: { x: index * 250, y: 200 },
            type: "network",
            data: item,
          };
        });
        setNetworkNodes((networks as any) || []);
        let volumes = Object.keys(fileContent.volumes).map((item, index) => {
          return {
            id: `${item}`,
            position: { x: index * 250 + networks.length * 250, y: 200 },
            type: "volume",
            data: item,
          };
        });
        setVolumeNodes((volumes as any) || []);
      }

      const mappedServices = Object.entries(fileContent.services as any).map(
        ([serviceName, serviceConfig]) => ({ [serviceName]: serviceConfig })
      );

      let mappedServiceWihoutPort: any[] = [];
      let mappedServiceWithPort: any[] = [];

      mappedServices.forEach((item, index) => {
        let isContainPort = !!(item?.[Object.keys(item)?.[0]] as any)?.ports;
        if (isContainPort) {
          mappedServiceWithPort?.push(item);
        } else {
          mappedServiceWihoutPort.push(item);
        }
      });

      let services = mappedServiceWihoutPort?.map((item, index) => {
        return {
          id: `${JSON.stringify(item)}`,
          position: {
            x: index * 250 + 1000,
            y: -200,
          },
          type: "service",
          data: item,
        };
      });

      let serviceWithPorts = mappedServiceWithPort.map((item, index) => {
        return {
          id: `service-${index.toString()}`,
          position: {
            x: index * 250,
            y: -200,
          },
          type: "service",
          data: item,
        };
      });
      let portNodesOfService: any[] = [];

      serviceWithPorts?.forEach((item, index) => {
        let listPortsOfServices = item.data?.[Object.keys(item.data)[0]]
          ?.ports as string[];
        listPortsOfServices?.forEach((port, portIndex) => {
          portNodesOfService?.push({
            id: port,
            position: {
              x: index * 250 + 55,
              y: -400,
            },
            type: "port",
            data: port,
          });
        });
      });

      let edgesFromPortToService: any[] = [];

      portNodesOfService.forEach((port, portIndex) => {
        serviceWithPorts.forEach((service, serviceIndex) => {
          if (
            (
              service.data?.[Object.keys(service.data)[0]]?.ports as string[]
            ).includes(port?.data)
          ) {
            edgesFromPortToService?.push({
              id: `${port.id}-${service.id}`,
              source: port.id,
              target: service.id,
              type: "straight",
              markerEnd: {
                type: MarkerType.ArrowClosed,
                width: 40,
                height: 20,
                color: "black",
                gap: 100,
              },
            });
          }
        });
      });

      setPortNodes(portNodesOfService);
      setPortToServiceEdges(edgesFromPortToService);
      setServiceNodes(services.concat((serviceWithPorts as any) || []));
    }
  }, [fileContent]);

  useEffect(() => {
    let edgesFromServiceToNetwork: any[] = [];
    if (networkNodes.length > 0) {
      networkNodes.forEach((network, networkIndex) => {
        serviceNodes.forEach((service, serviceIndex) => {
          if (!!service.data?.[Object.keys(service.data)[0]]?.networks) {
            if (
              (
                service.data?.[Object.keys(service.data)[0]]
                  ?.networks as string[]
              ).includes(`${network?.id}`)
            ) {
              edgesFromServiceToNetwork?.push({
                id: `${network.id}-${service.id}`,
                source: service.id,
                target: network.id,
                type: "straight",
                markerEnd: {
                  type: MarkerType.ArrowClosed,
                  width: 40,
                  height: 20,
                  color: "black",
                },
              });
            }
          }
        });
      });
    }
    setServiceToNetworkEdges(edgesFromServiceToNetwork);
  }, [networkNodes, serviceNodes]);

  return (
    <>
      {fileContent ? (
        <>
          <div style={{ width: "100vw", height: "100vh" }}>
            <ReactFlow
              nodes={totalNodes}
              edges={totalEdges}
              nodeTypes={nodeTypes}
              connectionLineComponent={CustomConnectionLine}
            />
          </div>
        </>
      ) : (
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
      )}
    </>
  );
};

export default App;
