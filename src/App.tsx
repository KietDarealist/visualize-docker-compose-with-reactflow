import React, { useEffect, useMemo, useState } from "react";

//utils
import yaml from "js-yaml";

//styles
import ReactFlow, { MarkerType, useNodesState } from "reactflow";
import NetworkNode from "./components/NetworkNode";
import VolumeNode from "./components/VolumeNode";
import ServiceNode from "./components/ServiceNode";
import PortNode from "./components/PortNode";
import CustomConnectionLine from "./components/CustomConnectionLine";
import Banner from "./components/Banner";

import PositionedMenu from "./components/SideMenu";
import SideMenu from "./components/SideMenu";

const App = () => {
  const [fileContent, setFileContent] = useState<IDockerComposeFile | null>(
    null
  );

  //nodes
  const [serviceNodes, setServiceNodes] = useState<IServiceNode[]>([]);
  const [networkNodes, setNetworkNodes] = useState<INetworkNode[]>([]);
  const [volumeNodes, setVolumeNodes] = useState<IVolumeNode[]>([]);
  const [portNodes, setPortNodes] = useState<IPortNode[]>([]);
  const [totalNodes, setTotalNodes, onTotalNodesChange] = useNodesState([]);

  //edges
  const [portToServiceEdges, setPortToServiceEdges] = useState<any[]>([]);
  const [serviceToNetworkEdges, setServiceToNetworkEdges] = useState<any[]>([]);
  const [volumeToNetworkEdges, setVolumeToNetworkEdges] = useState<any[]>([]);

  const nodeTypes = useMemo(
    () => ({
      network: NetworkNode,
      volume: VolumeNode,
      service: ServiceNode,
      port: PortNode,
    }),
    []
  );

  const totalEdges = portToServiceEdges
    .concat(serviceToNetworkEdges)
    .concat(volumeToNetworkEdges);

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e: any) {
      const fileData = e.target.result;
      setFileContent(yaml.load(fileData) as any);
    };
    reader.readAsText(file);
  };

  const detectNetworkIncluded = (
    networkObject: Object | Array<any>,
    networkId: string
  ) => {
    let result = false;
    if (Array.isArray(networkObject)) {
      result = (networkObject as any[]).includes(networkId);
    } else {
      result = Object.keys(networkObject)?.includes(networkId);
    }
    return result;
  };

  useEffect(() => {
    if (fileContent) {
      //store service nodes
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

      //store network nodes
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

      //store service nodes
      const mappedServices = Object.entries(fileContent.services as any).map(
        ([serviceName, serviceConfig]) => ({ [serviceName]: serviceConfig })
      );

      let clonedMappedService: any[] = [];

      mappedServices.forEach((item, index) => {
        clonedMappedService?.push(item);
      });

      let services = clonedMappedService.map((item, index) => {
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

      //store port nodes
      let portNodesOfService: any[] = [];
      services?.forEach((item, index) => {
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

      //store edges
      let edgesFromPortToService: any[] = [];
      portNodesOfService.forEach((port, portIndex) => {
        services.forEach((service, serviceIndex) => {
          if (
            (
              service.data?.[Object.keys(service.data)[0]]?.ports as string[]
            )?.includes(port?.data)
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
                gap: 20,
              },
            });
          }
        });
      });

      setPortNodes(portNodesOfService);
      setPortToServiceEdges(edgesFromPortToService);
      setServiceNodes(services);
    }
  }, [fileContent]);

  useEffect(() => {
    //stores edge from service to network
    let edgesFromServiceToNetwork: any[] = [];
    if (networkNodes.length > 0) {
      networkNodes.forEach((network, networkIndex) => {
        serviceNodes.forEach((service, serviceIndex) => {
          if (!!service.data?.[Object.keys(service.data)[0]]?.networks) {
            if (
              detectNetworkIncluded(
                service.data?.[Object.keys(service.data)[0]]?.networks,
                `${network?.id}`
              )
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

  useEffect(() => {
    //stores edge from service to volume
    let edgesFromServiceToVolume: any[] = [];
    if (volumeNodes.length > 0) {
      volumeNodes.forEach((volume, volumeIndex) => {
        serviceNodes.forEach((service, serviceIndex) => {
          if (!!service.data?.[Object.keys(service.data)[0]]?.volumes) {
            (
              service.data?.[Object.keys(service.data)[0]]?.volumes as any[]
            )?.forEach((kiet, my) => {
              let split = kiet?.split(":") as string[];
              split.forEach((splitItem, splitIndex) => {
                if (splitItem == volume.id) {
                  edgesFromServiceToVolume?.push({
                    id: `${volume.id}-${service.id}`,
                    source: service.id,
                    target: volume.id,
                    type: "straight",
                    markerEnd: {
                      type: MarkerType.ArrowClosed,
                      width: 40,
                      height: 20,
                      color: "black",
                    },
                  });
                }
              });
            });
          }
        });
      });
    }
    setVolumeToNetworkEdges(edgesFromServiceToVolume);
  }, [volumeNodes, serviceNodes]);

  useEffect(() => {
    setTotalNodes(
      networkNodes.concat(serviceNodes).concat(volumeNodes).concat(portNodes)
    );
  }, [volumeNodes, networkNodes, serviceNodes]);

  return (
    <>
      {fileContent ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "80vw",
              height: "100vh",
              alignItems: "center",
            }}
          >
            <ReactFlow
              nodes={totalNodes}
              edges={totalEdges}
              onNodesChange={onTotalNodesChange}
              nodeTypes={nodeTypes}
              nodesDraggable={true}
              connectionLineComponent={CustomConnectionLine}
              style={{ borderRightWidth: 5, borderColor: "#d1d5db" }}
            />
          </div>

          {/* <ToolBar /> */}
          <SideMenu />
        </div>
      ) : (
        <Banner handleFileInputChange={handleFileInputChange} />
      )}
    </>
  );
};

export default App;
