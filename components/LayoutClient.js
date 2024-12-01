"use client";

import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import NextTopLoader from "nextjs-toploader";
import config from "@/config";

const ClientLayout = ({ children }) => {
  return (
    <>
      <NextTopLoader color={config.colors.main} showSpinner={false} />
      <Toaster position="bottom-center" />
      <Tooltip id="tooltip" />
      {children}
    </>
  );
};

export default ClientLayout;
