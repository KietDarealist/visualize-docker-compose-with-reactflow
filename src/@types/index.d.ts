interface IDockerComposeFile {
  version: string;
  networks: INetworkItem[];
  volumes: IVolumeItem[];
  services?: IServiceItem[];
}

interface IContainerHealthCheck {
  test?: string[];
  interval?: string;
  timeout?: string;
  retries?: number;
}

interface IServiceItem {
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

interface INetworkItem {
  [key: string]: string;
}

interface IVolumeItem {
  [key: string]: string;
}

interface IServiceNode {
  id: string;
  position: { x: number; y: number };
  data: any;
}

interface INetworkNode {
  id: string;
  position: { x: number; y: number };
  data: any;
}

interface IVolumeNode {
  id: string;
  position: { x: number; y: number };
  data: any;
}
