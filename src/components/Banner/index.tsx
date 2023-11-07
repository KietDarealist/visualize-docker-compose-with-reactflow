import React from "react";
import Button from "@mui/joy/Button";
import UploadButton from "../UploadButton";
import { SvgIcon } from "@mui/joy";

interface IBannerProps {
  handleFileInputChange: (e: any) => void;
}

const Banner: React.FC<IBannerProps> = (props) => {
  const { handleFileInputChange } = props;
  return (
    <div className="flex items-center bg-white justify-center h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-gray-500 font-bold uppercase text-3xl">
          Visualize your docker compose file
        </h1>
        <p className="text-md text-gray-400 mt-2">
          We help you visualize your docker compose file to a chart
        </p>
        <img
          src={require("../../../src/assets/images/logo-docker.gif")}
          alt="Image"
          className="mt-4 mx-auto w-[500px]"
        />
        <div className="mt-4 flex space-x-8 justify-center">
          <UploadButton onChange={handleFileInputChange} />
          <Button
            size="lg"
            variant="outlined"
            startDecorator={
              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </SvgIcon>
            }
          >
            Support us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
